import React from "react";
import "./WalletTest.css";
import {
  Alert,
  Button,
  TextField,
  Typography,
  Snackbar,
  IconButton, 
  InputAdornment, 
} from "@mui/material";
import {
  NativeTransferBuilder,
  PublicKey,
  TransactionV1
} from "casper-js-sdk";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const NETWORK_NAME = "casper-net-1";
const CopyableField = ({ label, value }) => (
  <TextField
    label={label}
    variant="filled"
    value={value}
    disabled
    fullWidth
    style={{ marginTop: ".8em", backgroundColor: "white", borderRadius: ".6rem", wordBreak: "break-word" }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            onClick={() => navigator.clipboard.writeText(value)}
            edge="end"
            size="small"
          >
            <ContentCopyIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default class WalletTest extends React.Component {
  constructor() {
    super();
    this.state = {
      walletConnected: false,
      walletLocked: true,
      recipient: "",
      amount: "2.5",
      transferTag: "0",
      deployHash: "",
      signature: "",
      currentNotification: { text: "", severity: "info" },
      showAlert: false,
      deployProcessed: false,
      activeKey: "",
    };
  }

  formatSignature(sig) {
    if (!sig) return "";
    if (sig instanceof Uint8Array) {
      return Array.from(sig)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
    return sig; 
  }

  componentDidMount() {
    const provider = window.CasperWalletProvider;

    if (provider) {
      provider.isConnected().then(async (connected) => {
        if (connected) {
          try {
            const pub = await provider.getActivePublicKey();
            this.setState({
              walletConnected: true,
              walletLocked: false,
              activeKey: pub,
            });
          } catch (err) {
            if (err?.message?.toLowerCase().includes("locked")) {
              console.warn("Wallet is connected but locked.");
            } else {
              console.error(err);
            }
          }
        }
      });
    }

    const events = [
      [
        "casper-wallet:connected",
        (detail) => ({
          walletConnected: true,
          walletLocked: false,
          activeKey: detail.publicKey,
          currentNotification: { text: "Connected", severity: "success" },
        }),
      ],
      [
        "casper-wallet:unlocked",
        () => ({
          walletLocked: false,
          currentNotification: { text: "Wallet Unlocked", severity: "info" },
        }),
      ],
      [
        "casper-wallet:disconnected",
        () => ({
          walletConnected: false,
          walletLocked: true,
          activeKey: "",
          currentNotification: { text: "Disconnected", severity: "info" },
        }),
      ],
      [
        "casper-wallet:locked",
        () => ({
          walletLocked: true,
          currentNotification: { text: "Wallet Locked", severity: "warning" },
        }),
      ],
      [
        "casper-wallet:activeKeyChanged",
        (detail) => ({
          activeKey: detail.publicKey,
          currentNotification: { text: "Active Key Changed", severity: "info" },
        }),
      ],
    ];

    events.forEach(([evt, fn]) => {
      window.addEventListener(evt, (msg) => {
        this.setState({ ...fn(msg.detail), showAlert: true });
      });
    });
  }

  toggleAlert = (show) => this.setState({ showAlert: show });
  createAlert = (text, severity) => (
    <Alert onClose={() => this.toggleAlert(false)} severity={severity}>
      {text}
    </Alert>
  );

  connectToCasperWallet = async () => {
    try {
      if (typeof window.CasperWalletProvider !== "function") {
        throw new Error("Casper Wallet not installed");
      }

      const prov = window.CasperWalletProvider();

      await prov.requestConnection();

      const pub = await prov.getActivePublicKey();

      this.setState({
        walletConnected: true,
        walletLocked: false,
        activeKey: pub,
        currentNotification: { text: "Connected", severity: "success" },
        showAlert: true,
      });
    } catch (err) {
      this.setState({
        currentNotification: { text: err.message, severity: "error" },
        showAlert: true,
      });
    }
  };

  createDeploy = async () => {
    const senderKeyHex = this.state.activeKey;
    const recipientKeyHex = this.state.recipient;
    const amountCSPR = parseFloat(this.state.amount);
    const transferId = this.state.transferTag ? parseInt(this.state.transferTag) : undefined;
  
    if (!senderKeyHex || !recipientKeyHex) {
      throw new Error("Sender or recipient key missing.");
    }
  
    if (isNaN(amountCSPR) || amountCSPR <= 0) {
      throw new Error("Invalid transfer amount.");
    }
  
    const senderKey = PublicKey.fromHex(senderKeyHex);
    const recipientKey = PublicKey.fromHex(recipientKeyHex);
    const amountMotes = Math.floor(amountCSPR * 1e9).toString();
  
    const builder = new NativeTransferBuilder()
      .from(senderKey)
      .target(recipientKey)
      .amount(amountMotes)
      .chainName(NETWORK_NAME)
      .payment(10_000_000_000);
  
    if (transferId !== undefined && !isNaN(transferId)) {
      builder.id(transferId);
    }
  
    return builder.build();
  };      

  getSignatureWithPrefix = (publicKeyHex, res) => {
    const publicKeyBytes = PublicKey.fromHex(publicKeyHex).key.bytes();
  
    let prefix;
    if (publicKeyBytes.length === 32) {
      prefix = 0x01;
    } else if (publicKeyBytes.length === 33) {
      prefix = 0x02;
    } else {
      throw new Error("Unexpected publicKeyBytes length: " + publicKeyBytes.length);
    }
  
    const signatureWithPrefix = new Uint8Array(res.signature.length + 1);
    signatureWithPrefix[0] = prefix;
    signatureWithPrefix.set(res.signature, 1);
  
    return signatureWithPrefix;
  };
  
  signDeploy = async () => {
    let provider;
    try {
      if (typeof window.CasperWalletProvider !== "function") {
        throw new Error("Casper Wallet not detected");
      }
  
      provider = window.CasperWalletProvider();
  
      if (!(await provider.isConnected())) {
        throw new Error("Wallet not connected");
      }
    } catch (err) {
      this.setState({
        currentNotification: { text: err.message, severity: "error" },
        showAlert: true,
      });
      return;
    }
  
    try {
      const transaction = await this.createDeploy();
      const transactionJSON = transaction.toJSON();
  
      const res = await provider.sign(JSON.stringify(transactionJSON), this.state.activeKey);
  
      if (res.cancelled) {
        throw new Error("Signing cancelled by user.");
      }
  
      const signatureWithPrefix = this.getSignatureWithPrefix(this.state.activeKey, res);
  
      const signedDeploy = TransactionV1.setSignature(
        transaction,
        signatureWithPrefix,
        PublicKey.fromHex(this.state.activeKey)
      );
  
      const signedDeployJson = signedDeploy.toJSON();
  
      console.log("Signed Deploy JSON:", JSON.stringify(signedDeployJson, null, 2));
  
      const response = await fetch("http://localhost:9000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ signedTransactionJSON: signedDeployJson }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to send transaction");
      }
  
      const deployHashRaw = await response.text();
      const deployHash = deployHashRaw.replace(/^"|"$/g, ""); 
  
      this.setState({
        deployProcessed: true,
        deployHash,
        signature: signatureWithPrefix,
        currentNotification: { text: `Deploy sent: ${deployHash}`, severity: "success" },
        showAlert: true,
      });
    } catch (err) {
      this.setState({
        currentNotification: { text: err.message || String(err), severity: "error" },
        showAlert: true,
      });
    }
  };    
  

  render() {
    return (
      <div className="App">
        <Snackbar
          open={this.state.showAlert}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => this.toggleAlert(false)}
        >
          <Alert
            onClose={() => this.toggleAlert(false)}
            severity={this.state.currentNotification.severity}
          >
            {this.state.currentNotification.text}
          </Alert>
        </Snackbar>

        <header className="App-header">
          <Typography variant="h2">寄付・チップ</Typography>
          {this.state.walletConnected ? (
            this.state.walletLocked ? (
              <Typography>Please unlock Casper Wallet.</Typography>
            ) : (
              <Typography>Connected: {this.state.activeKey}</Typography>
            )
          ) : (
            <Button variant="contained" onClick={this.connectToCasperWallet}>
              Connect Casper Wallet
            </Button>
          )}

          <form>
            <TextField
              label="受取人 (Public Key Hex)"
              variant="filled"
              value={this.state.recipient}
              onChange={(e) => this.setState({ recipient: e.target.value })}
              fullWidth
              style={{ marginTop: ".8em", backgroundColor: "white", borderRadius: ".6rem" }}
            />
            <CopyableField label="数量 (CSPR)" value={this.state.amount} />
            <CopyableField label="Transfer ID（メモ）" value={this.state.transferTag} />
            <CopyableField label="Transaction Hash" value={this.state.deployHash} />
            <CopyableField label="Signature" value={this.formatSignature(this.state.signature)} />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.signDeploy}
              disabled={!this.state.walletConnected || this.state.walletLocked}
              fullWidth
              style={{ marginTop: "2rem", backgroundColor: "blue" }}
            >
              署名 & デプロイ
            </Button>
          </form>
        </header>
      </div>
    );
  }
}