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
    Signer,
    DeployUtil,
    CLPublicKey,
    encodeBase16,
    CasperClient
  } from 'casper-js-sdk';

  export default class SignerTest extends React.Component {
  
    constructor() {
      super();
      this.state = {
        signerConnected: false,
        signerLocked: true,
        recipient: "",
        amount: "2.5",
        transferTag: "0",
        message: "",
        contractWasm: null,
        deployHash: "",
        deploy: {},
        activeKey: "",
        signature: "",
        deployProcessed: false,
        deployType: "transfer",
        showAlert: false,
        currentNotification: {}
      };
      this.casperService = new CasperClient('/testnet')
    }

    async componentDidMount() {
      setTimeout(async () => {
        try {
          const connected = await this.checkConnection();
          this.setState({ signerConnected: connected })
        } catch (err) {
          console.log(err)
          this.setState({currentNotification: {text: err.message}, showAlert: true});
        }
      }, 100);
      if (this.state.signerConnected) this.setState({activeKey: await this.getActiveKeyFromSigner()})
      
      // アプリケーションがSingerと接続したときに実行されるイベント
      window.addEventListener('signer:connected', msg => {
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          signerConnected: true,
          activeKey: msg.detail.activeKey,
          currentNotification: {text: 'Signerに接続されました!', severity: 'success'},
          showAlert: true
        });
      });
    
      // アプリケーションがSingerと接続解除したときに実行されるイベント
      window.addEventListener('signer:disconnected', msg => {
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          signerConnected: false,
          activeKey: msg.detail.activeKey,
          currentNotification: {text: 'Signerの接続が解除されました', severity: 'info'},
          showAlert: true
        });
      });

      // ブラウザのタブが追加されたときに実行されるイベント
      window.addEventListener('signer:tabUpdated', msg => {
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          signerConnected: msg.detail.isConnected,
          activeKey: msg.detail.activeKey
        })
      });

      // SignerのActive keyが変更されたときに実行されるイベント
      window.addEventListener('signer:activeKeyChanged', msg => {
        this.setState({
          activeKey: msg.detail.activeKey,
          currentNotification: {text: 'Active keyが変更されました', severity: 'warning'},
          showAlert: true
        });
      });

      // Signerがロックされたときに実行されるイベント
      window.addEventListener('signer:locked', msg => {
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          currentNotification: {text: 'Signerがロックされました', severity: 'info'},
          showAlert: true,
          activeKey: msg.detail.activeKey
        })
      });

      // Signerがアンロックされたときに実行されるイベント
      window.addEventListener('signer:unlocked', msg => {
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          signerConnected: msg.detail.isConnected,
          activeKey: msg.detail.activeKey
        })
      });

      // Signerの初期状態をconsoleに出力
      window.addEventListener('signer:initialState', msg => {
        console.log("Initial State: ", msg.detail);
        this.setState({
          signerLocked: !msg.detail.isUnlocked,
          signerConnected: msg.detail.isConnected,
          activeKey: msg.detail.activeKey
        });
      })
    }

    handleRecipientChange(event) {
      this.setState({recipient: event.target.value});
    }
    
    handleAmountChange(event) {
      this.setState({amount: event.target.value});
    }

    handleTransferIdChange(event) {
      this.setState({transferTag: event.target.value});
    }
    
    handleMessageChange(event) {
      this.setState({message: event.target.value});
    }

    toggleAlert(show) {
      this.setState({showAlert: show});
    }
  
    createAlert = (text, severity = 'error') => {
      return (
        <Alert onClose={() => this.toggleAlert(false)} severity={severity}>
          {text}{severity === 'error' ? '!' : ''}
        </Alert>
      );
    }
  
    async checkConnection() {
      return await Signer.isConnected();
    }
  
    async getActiveKeyFromSigner() {
      return await Signer.getActivePublicKey();
    }
    
    // Signerとの接続
    connectToSigner() {
      return Signer.sendConnectionRequest();
    }
    
    createTransferDeploy(source_publicKey, recipient_publicKey) {

      let amount_cspr = this.state.amount;
      let amount_motes = amount_cspr * 1000000000;
      // Testnet: casper-test, NCTL: casper-net-1
      let networkName = "casper-test";
      let gasPrice = 1;
      let ttl = 1800000;
  
      let sessionCode = DeployUtil.ExecutableDeployItem.newTransfer(
        amount_motes,
        recipient_publicKey,
        null,
        this.state.transferTag,
      )
      
      // デプロイの作成
      return DeployUtil.makeDeploy(
        new DeployUtil.DeployParams(
          source_publicKey,
          networkName,
          gasPrice,
          ttl
        ),
        sessionCode,
        DeployUtil.standardPayment(10000)
      );
    }
  
    async signDeploy() {
      let key;
      try {
        // Public Key Hexを取得
        key = await Signer.getActivePublicKey();
      } catch (err) {
        this.setState({currentNotification: {text: err.message, severity: 'error'}, showAlert: true});
        return;
      }
      this.setState({activeKey: key});

      let source_publicKey = CLPublicKey.fromHex(key);

      let recipient_publicKeyHex = this.state.recipient;
      let recipient_publicKey = CLPublicKey.fromHex(recipient_publicKeyHex);

      let deploy = await this.createTransferDeploy(source_publicKey, recipient_publicKey);
      let deployJSON = DeployUtil.deployToJson(deploy);

      let signedDeployJSON;
      try {
        // Signerによる署名 (JSON)
        signedDeployJSON = await Signer.sign(deployJSON, key, recipient_publicKeyHex);
      } catch (err) {
        this.setState({currentNotification: {text: err.message, severity: 'error'}, showAlert: true});
        return;
      }

      // 署名済みのデプロイ(JSON)を変換
      let signedDeploy = DeployUtil.deployFromJson(signedDeployJSON);

      if (signedDeploy.ok) {
        this.setState({
          signature: signedDeploy.unwrap().approvals[0].signature,
          deployHash: encodeBase16(signedDeploy.unwrap().hash),
          deploy: signedDeployJSON,
          deployProcessed: true,
          currentNotification: {text: 'デプロイの署名が成功しました！', severity: 'success'},
          showAlert: true
        });
        // 署名済みのデプロイをブロックチェーンに送信
        await this.casperService.putDeploy(signedDeploy.val);  
      } else {
        signedDeploy.mapErr(err => {
          this.setState({currentNotification: {text: err.message, severity: 'error'}, showAlert: true});
          return;
        });
      }
    }
  
    render() {
      return (
        <div className="App">
          <Snackbar
            id='error-bar'
            open={this.state.showAlert}
            autoHideDuration={6000}
            onClose={() => this.toggleAlert(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            {this.createAlert(this.state.currentNotification.text, this.state.currentNotification.severity)}
          </Snackbar>
          <header className="App-header">
            <Typography
              variant="h2"
            >
              寄付・チップ
            </Typography>
            { this.state.signerConnected ? this.state.signerLocked ?
              <Typography
                style={{
                  width: '60%',
                  borderRadius: '.6rem',
                  marginTop: '1.3rem',
                  marginBottom: '1rem',
                  padding: '.5rem 0'
                }}
              >
                Signerをアンロックしてください。
              </Typography>
              :
              <Typography
                style={{
                  width: '60%',
                  borderRadius: '.6rem',
                  marginTop: '1.3rem',
                  marginBottom: '1rem',
                  padding: '.5rem 0'
                }}
              >
                接続済み: { this.state.activeKey　}
              </Typography>
              :         
              <Button
                color="primary"
                variant="contained"
                disabled={this.state.signerConnected}
                onClick={() => {this.connectToSigner()}}
                >
                Signerをアンロックしてください。
              </Button>
            }
            <form>
              <TextField
                id="recipient"
                name="recipient"
                label="受取人 (Public Key Hex)"
                margin="normal"
                variant="filled"
                value={ this.state.recipient }
                onChange={ evt => this.handleRecipientChange(evt) }
                style={
                  {
                    backgroundColor: 'white',
                    borderRadius: '.6rem',
                    width: '100%',
                    marginTop: '.8em'
                  }
                }
              />
              <TextField
                id="amount"
                name="amount"
                label="数量 (CSPR)"
                type="number"
                margin="normal"
                variant="filled"
                value={ this.state.amount }
                onChange={ evt => this.handleAmountChange(evt) }
                style={
                  {
                    backgroundColor: 'white',
                    borderRadius: '.6rem',
                    width: '100%',
                    marginTop: '.8em'
                  }
                }
              />
              <TextField
                id="memo"
                name="memo"
                label="Transfer ID （メモ）"
                type="number"
                margin="normal"
                variant="filled"
                value={ this.state.transferTag }
                onChange={ evt => this.handleTransferIdChange(evt) }
                style={
                  {
                    backgroundColor: 'white',
                    borderRadius: '.6rem',
                    width: '100%',
                    marginTop: '.8em'
                  }
                }
              />
              <TextField
                id="deploy-hash"
                name="deploy-hash"
                label="Deploy Hash"
                margin="normal"
                variant="filled"
                value={ this.state.deployHash }
                disabled
                style={
                  {
                    backgroundColor: 'white',
                    borderRadius: '.6rem',
                    width: '100%',
                    marginTop: '.8em'
                  }
                }
              />
              <Button
                size="large"
                variant="contained"
                color="secondary"
                onClick={ () => this.signDeploy() }
                style={{
                  margin: '2rem',
                  marginTop: '3rem',
                  marginLeft: 0,
                  width: '80%',
                  float: 'center',
                  backgroundColor: 'blue'
                }}
                >
                デプロイに署名する
              </Button>
            </form>
          </header>
        </div>
      );
    }
  }