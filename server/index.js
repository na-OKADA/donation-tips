import express from 'express';
import cors from 'cors';
import pkg from 'casper-js-sdk';
const { HttpHandler, RpcClient, Transaction } = pkg;
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const NETWORKS = {
  nctl: {
    rpcUrl: process.env.CASPER_NCTL || 'http://localhost:11101/rpc',
    chainName: 'casper-net-1',
  },
  testnet: {
    rpcUrl: process.env.CASPER_TESTNET || 'https://rpc.testnet.cspr.cloud',
    chainName: 'casper-test',
  },
  mainnet: {
    rpcUrl: process.env.CASPER_MAINNET || 'https://rpc.mainnet.cspr.cloud',
    chainName: 'casper',
  },
};

function getClient(networkKey) {
  const net = NETWORKS[networkKey];
  if (!net) return null;

  console.log('Using network:', networkKey);
  console.log('Using RPC URL:', net.rpcUrl);
  console.log('Using API Key:', process.env.CSPR_CLOUD_API_KEY);

  const handler = new HttpHandler(net.rpcUrl);

  if (process.env.CSPR_CLOUD_API_KEY && net.rpcUrl === 'https://node.testnet.cspr.cloud/rpc') {
    handler.setCustomHeaders({
      Authorization: process.env.CSPR_CLOUD_API_KEY,
    });
  }

  return new RpcClient(handler);
}

app.get('/', (_req, res) => res.json({ ok: true }));

app.post('/deploy/:network', async (req, res) => {
  const { network } = req.params;
  const client = getClient(network);
  if (!client) return res.status(400).json({ error: 'Invalid network' });

  const { signedTransactionJSON } = req.body;
  if (!signedTransactionJSON) {
    return res.status(400).json({ error: 'Missing signedTransactionJSON in body' });
  }

  let tx;
  try {
    tx = Transaction.fromJSON(signedTransactionJSON);
  } catch (e) {
    console.error('Transaction.fromJSON failed:', e);
    return res.status(400).json({ error: 'Bad signedTransactionJSON', details: e.message });
  }

  try {
    const result = await client.putTransaction(tx);
    console.log('RPC result:', result);

    if (!result || !result.transactionHash) {
      return res.status(502).json({
        error: 'RPC putTransaction did not return transactionHash',
        details: result,
      });
    }

    res.send(result.transactionHash);
  } catch (e) {
    console.error('putTransaction error:', e?.response?.data || e?.data || e?.message || e);
    res.status(502).json({
      error: 'Error submitting transaction',
      details: e?.response?.data || e?.data || e?.message || String(e),
    });
  }
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
  console.log(`🚀 running on port ${PORT} — networks: ${Object.keys(NETWORKS).join(', ')}`)
);
