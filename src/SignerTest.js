import React from 'react';
import './SignerTest.css';
import {
  Alert,
  Button,
  TextField,
  Typography,
  Snackbar,
} from '@mui/material';

import {
  DeployUtil,
  CLPublicKey,
  encodeBase16,
  CasperClient,
} from 'casper-js-sdk';

export default class WalletTest extends React.Component {
  constructor() {
    super();
    this.state = {
      walletConnected: false,
      recipient: '',
      amount: '2.5',
      transferTag: '0',
      message: '',
      contractWasm: null,
      deployHash: '',
      deploy: {},
      activeKey: '',
      signature: '',
      deployProcessed: false,
      deployType: 'transfer',
      showAlert: false,
      currentNotification: {},
    };
    this.casperService = new CasperClient('https://node.testnet.casper.network/rpc');
  }

  async componentDidMount() {
    if (await this.checkConnection()) {
      const pubKey = await this.getActivePublicKey();
      this.setState({ walletConnected: true, activeKey: pubKey });
    }
  }

  handleRecipientChange = (event) => {
    this.setState({ recipient: event.target.value });
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleTransferIdChange = (event) => {
    this.setState({ transferTag: event.target.value });
  };

  toggleAlert = (show) => {
    this.setState({ showAlert: show });
  };

  createAlert = (text, severity = 'error') => {
    return (
      <Alert onClose={() => this.toggleAlert(false)} severity={severity}>
        {text}
        {severity === 'error' ? '!' : ''}
      </Alert>
    );
  };

  async checkConnection() {
    const isConnected = await window.CasperWalletProvider?.isConnected();
    return isConnected;
  }

  async getActivePublicKey() {
    return await window.CasperWalletProvider?.getActivePublicKey();
  }

  async connectToWallet() {
    try {
      await window.CasperWalletProvider.requestConnection();
      const pubKey = await this.getActivePublicKey();
      this.setState({
        walletConnected: true,
        activeKey: pubKey,
        currentNotification: { text: 'Casper Walletに接続されました!', severity: 'success' },
        showAlert: true,
      });
    } catch (err) {
      this.setState({
        currentNotification: { text: '接続失敗: ' + err.message, severity: 'error' },
        showAlert: true,
      });
    }
  }

  createTransferDeploy(source_publicKey, recipient_publicKey) {
    let amount_motes = parseFloat(this.state.amount) * 1_000_000_000;
    let networkName = 'casper-test';
    let gasPrice = 1;
    let ttl = 1800000;

    let sessionCode = DeployUtil.ExecutableDeployItem.newTransfer(
      amount_motes,
      recipient_publicKey,
      null,
      this.state.transferTag,
    );

    return DeployUtil.makeDeploy(
      new DeployUtil.DeployParams(
        source_publicKey,
        networkName,
        gasPrice,
        ttl,
      ),
      sessionCode,
      DeployUtil.standardPayment(10000),
    );
  }

  async signDeploy() {
    const keyHex = this.state.activeKey;
    if (!keyHex) {
      this.setState({
        currentNotification: { text: 'Casper Walletが未接続です。', severity: 'error' },
        showAlert: true,
      });
      return;
    }

    const source_publicKey = CLPublicKey.fromHex(keyHex);
    const recipient_publicKey = CLPublicKey.fromHex(this.state.recipient);
    const deploy = this.createTransferDeploy(source_publicKey, recipient_publicKey);
    const deployJson = DeployUtil.deployToJson(deploy);

    try {
      const signed = await window.CasperWalletProvider.sign(deployJson, keyHex);
      const signedDeploy = DeployUtil.deployFromJson(signed);
      if (signedDeploy.ok) {
        const finalDeploy = signedDeploy.val;
        const hash = await this.casperService.putDeploy(finalDeploy);
        this.setState({
          signature: finalDeploy.approvals[0].signature,
          deployHash: hash,
          deployProcessed: true,
          currentNotification: { text: 'デプロイの署名が成功しました！', severity: 'success' },
          showAlert: true,
        });
      } else {
        this.setState({
          currentNotification: { text: 'デプロイ変換エラー', severity: 'error' },
          showAlert: true,
        });
      }
    } catch (err) {
      this.setState({
        currentNotification: { text: err.message, severity: 'error' },
        showAlert: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Snackbar
          open={this.state.showAlert}
          autoHideDuration={6000}
          onClose={() => this.toggleAlert(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {this.createAlert(this.state.currentNotification.text, this.state.currentNotification.severity)}
        </Snackbar>
        <header className="App-header">
          <Typography variant="h2">寄付・チップ</Typography>
          {this.state.walletConnected ? (
            <Typography style={{ width: '60%', marginTop: '1rem' }}>
              接続済み: {this.state.activeKey}
            </Typography>
          ) : (
            <Button variant="contained" onClick={() => this.connectToWallet()}>
              Casper Walletに接続
            </Button>
          )}
          <form>
            <TextField
              label="受取人 (Public Key Hex)"
              value={this.state.recipient}
              onChange={this.handleRecipientChange}
              variant="filled"
              style={{ backgroundColor: 'white', width: '100%', marginTop: '.8em' }}
            />
            <TextField
              label="数量 (CSPR)"
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              variant="filled"
              style={{ backgroundColor: 'white', width: '100%', marginTop: '.8em' }}
            />
            <TextField
              label="Transfer ID（メモ）"
              type="number"
              value={this.state.transferTag}
              onChange={this.handleTransferIdChange}
              variant="filled"
              style={{ backgroundColor: 'white', width: '100%', marginTop: '.8em' }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '1em' }}
              onClick={() => this.signDeploy()}
            >
              署名して送信
            </Button>
          </form>
        </header>
      </div>
    );
  }
}
