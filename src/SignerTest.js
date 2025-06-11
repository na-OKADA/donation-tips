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
<<<<<<< HEAD
  DeployUtil,
  CLPublicKey,
  encodeBase16,
  CasperClient,
} from 'casper-js-sdk';

export default class WalletTest extends React.Component {
=======
  Keys,
  DeployUtil,
  CLPublicKey,
  RuntimeArgs,
  CLValueBuilder,
  CasperClient,
  Deploy,
  createRecipientAddress,
  standardPayment,
  encodeBase16,
  RpcClient
} from 'casper-js-sdk';

export default class SignerTest extends React.Component {
>>>>>>> 4c052e5 (Update: 20250610)
  constructor() {
    super();
    this.state = {
      walletConnected: false,
      recipient: '',
      amount: '2.5',
      transferTag: '0',
      message: '',
<<<<<<< HEAD
      contractWasm: null,
=======
>>>>>>> 4c052e5 (Update: 20250610)
      deployHash: '',
      deploy: {},
      activeKey: '',
      signature: '',
      deployProcessed: false,
      deployType: 'transfer',
      showAlert: false,
      currentNotification: {},
    };
<<<<<<< HEAD
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
=======

    this.casperService = new RpcClient('/nctl');
  }

  async connectToCasperWallet() {
    try {
      if (typeof window.CasperWalletProvider !== 'function') {
        this.setState({
          currentNotification: {
            text: 'Casper Walletが見つかりません。インストールされているか確認してください。',
            severity: 'error',
          },
          showAlert: true,
        });
        return;
      }
  
      const provider = window.CasperWalletProvider(); // ✅ 関数として呼び出す
  
      // ウォレットとの接続をリクエスト
      await provider.requestConnection();
  
      // アクティブな公開鍵を取得
      const publicKeyHex = await provider.getActivePublicKey();
  
      this.setState({
        walletConnected: true,
        activeKey: publicKeyHex,
        currentNotification: { text: 'Casper Walletに接続しました', severity: 'success' },
>>>>>>> 4c052e5 (Update: 20250610)
        showAlert: true,
      });
    } catch (err) {
      this.setState({
<<<<<<< HEAD
        currentNotification: { text: '接続失敗: ' + err.message, severity: 'error' },
        showAlert: true,
      });
    }
  }

  createTransferDeploy(source_publicKey, recipient_publicKey) {
    let amount_motes = parseFloat(this.state.amount) * 1_000_000_000;
    let networkName = 'casper-test';
=======
        currentNotification: {
          text: `接続失敗: ${err.message}`,
          severity: 'error',
        },
        showAlert: true,
      });
    }
  }  

  createTransferDeploy(source_publicKey, recipient_publicKey) {
    let amount_cspr = parseFloat(this.state.amount);
    let amount_motes = Math.floor(amount_cspr * 1000000000);
    let networkName = 'casper-net-1';
>>>>>>> 4c052e5 (Update: 20250610)
    let gasPrice = 1;
    let ttl = 1800000;

    let sessionCode = DeployUtil.ExecutableDeployItem.newTransfer(
      amount_motes,
      recipient_publicKey,
      null,
<<<<<<< HEAD
      this.state.transferTag,
=======
      this.state.transferTag
>>>>>>> 4c052e5 (Update: 20250610)
    );

    return DeployUtil.makeDeploy(
      new DeployUtil.DeployParams(
        source_publicKey,
        networkName,
        gasPrice,
<<<<<<< HEAD
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
=======
        ttl
      ),
      sessionCode,
      DeployUtil.standardPayment(10000)
    );
  }

  async signAndSendDeploy() {
    try {
      const { activeKey, recipient, amount, transferTag } = this.state;
  
      if (!activeKey || !recipient) {
        this.setState({
          currentNotification: {
            text: '送信者または受信者の公開鍵が未設定です。',
            severity: 'error',
          },
          showAlert: true,
        });
        return;
      }
  
      const senderPk = CLPublicKey.fromHex(activeKey);
      const recipientPk = CLPublicKey.fromHex(recipient);
      const amountMotes = parseFloat(amount) * 1e9;
      const tag = parseInt(transferTag);
  
      // デプロイ作成
      const deployParams = new DeployUtil.DeployParams(senderPk, 'casper', 1, 1800000);
      const session = DeployUtil.ExecutableDeployItem.newTransfer(
        amountMotes,
        recipientPk,
        null,
        tag
      );
      const payment = DeployUtil.standardPayment(100000000); // e.g. 0.1 CSPR
      const deploy = DeployUtil.makeDeploy(deployParams, session, payment);
  
      const deployJson = DeployUtil.deployToJson(deploy);
  
      // CasperWallet.sign を使用（v1.4以降）
      if (!window.CasperWallet || typeof window.CasperWallet.sign !== 'function') {
        this.setState({
          currentNotification: {
            text: 'Casper Walletが見つかりません。インストールされているか確認してください。',
            severity: 'error',
          },
          showAlert: true,
        });
        return;
      }
  
      const signedDeployJson = await window.CasperWallet.sign(activeKey, deployJson, 'casper');
  
      const signedDeploy = DeployUtil.deployFromJson(signedDeployJson);
      if (signedDeploy.ok) {
        const deployUnwrapped = signedDeploy.unwrap();
  
        this.setState({
          signature: deployUnwrapped.approvals[0].signature,
          deployHash: encodeBase16(deployUnwrapped.hash),
          deploy: signedDeployJson,
          deployProcessed: true,
          currentNotification: { text: 'デプロイの署名が成功しました！', severity: 'success' },
          showAlert: true,
        });
  
        await this.casperService.putDeploy(deployUnwrapped);
      } else {
        this.setState({
          currentNotification: {
            text: '署名済みデプロイの変換に失敗しました。',
            severity: 'error',
          },
          showAlert: true,
        });
      }
  
    } catch (err) {
      this.setState({
        currentNotification: {
          text: 'エラー: ' + (err?.message || err),
          severity: 'error',
        },
>>>>>>> 4c052e5 (Update: 20250610)
        showAlert: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Snackbar
<<<<<<< HEAD
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
=======
          id="error-bar"
          open={this.state.showAlert}
          autoHideDuration={6000}
          onClose={() => this.setState({ showAlert: false })}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => this.setState({ showAlert: false })}
            severity={this.state.currentNotification.severity}
          >
            {this.state.currentNotification.text}
          </Alert>
        </Snackbar>
  
        <header className="App-header">
          <Typography variant="h2">寄付・チップ</Typography>
  
          {this.state.walletConnected ? (
            <Typography
              style={{
                width: '60%',
                borderRadius: '.6rem',
                marginTop: '1.3rem',
                marginBottom: '1rem',
                padding: '.5rem 0',
              }}
            >
              接続済み: {this.state.activeKey}
            </Typography>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => this.connectToCasperWallet()}
            >
              Casper Walletに接続する
            </Button>
          )}
  
          <form>
            <TextField
              id="recipient"
              name="recipient"
              label="受取人 (Public Key Hex)"
              margin="normal"
              variant="filled"
              value={this.state.recipient}
              onChange={(evt) => this.setState({ recipient: evt.target.value })}
              style={{
                backgroundColor: 'white',
                borderRadius: '.6rem',
                width: '100%',
                marginTop: '.8em',
              }}
            />
            <TextField
              id="amount"
              name="amount"
              label="数量 (CSPR)"
              type="number"
              margin="normal"
              variant="filled"
              value={this.state.amount}
              onChange={(evt) => this.setState({ amount: evt.target.value })}
              style={{
                backgroundColor: 'white',
                borderRadius: '.6rem',
                width: '100%',
                marginTop: '.8em',
              }}
            />
            <TextField
              id="memo"
              name="memo"
              label="Transfer ID （メモ）"
              type="number"
              margin="normal"
              variant="filled"
              value={this.state.transferTag}
              onChange={(evt) => this.setState({ transferTag: evt.target.value })}
              style={{
                backgroundColor: 'white',
                borderRadius: '.6rem',
                width: '100%',
                marginTop: '.8em',
              }}
            />
            <TextField
              id="deploy-hash"
              name="deploy-hash"
              label="Deploy Hash"
              margin="normal"
              variant="filled"
              value={this.state.deployHash}
              disabled
              style={{
                backgroundColor: 'white',
                borderRadius: '.6rem',
                width: '100%',
                marginTop: '.8em',
              }}
            />
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => this.signAndSendDeploy()}
              style={{
                margin: '2rem',
                marginTop: '3rem',
                marginLeft: 0,
                width: '80%',
                backgroundColor: 'blue',
              }}
            >
              デプロイに署名する
>>>>>>> 4c052e5 (Update: 20250610)
            </Button>
          </form>
        </header>
      </div>
    );
<<<<<<< HEAD
  }
}
=======
  }}
>>>>>>> 4c052e5 (Update: 20250610)
