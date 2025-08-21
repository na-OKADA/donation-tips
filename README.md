# Donation Tips

Casper Walletによる、transferを行うことができます。

## Testnetでの実行方法

server/index.jsの下記部分を https://node.testnet.casper.network/rpc に書き換えます。

```index.js
const ENDPOINT = "https://node.testnet.casper.network/rpc"
```

次に、NETWORK_NAMEは"casper-test"に設定します。

```WalletTest.js
const NETWORK_NAME = "casper-test";
```

以下のコマンドで、serverを起動します。

```bash
$ cd server
$ npm i
$ npm start
```

また、src/WalletTest.jsの、下記部分は'casper-test'に設定します。

```SignerTest.js
.chainName('casper-test')
```

以下のコマンドで、Reactフロントエンドアプリケーションを起動します。

```bash
$ cd app
$ yarn install
$ yarn start
```

senderがCSPR(Testnet)を保有していることを確認し、実行を行います。

動作確認を行うには、表示されたDeploy Hashを、[testnet.cspr.live](https://testnet.cspr.live/)で入力して確認します。

## NCTLでの実行方法

server/index.jsの下記部分を、ターゲットノードアドレスに変更します。

```index.js
const ENDPOINT = "http://localhost:11103/rpc"
```

次に、NETWORK_NAMEを"casper-net-1"に設定します。
```WalletTest.js
let networkName = "casper-net-1";
```

また、src/WalletTest.jsの、下記部分は'casper-net-1'に設定します。

```WalletTest.js
const NETWORK_NAME = "casper-net-1";
```

以下のコマンドで、serverを起動します。

```bash
$ cd server
$ npm i
$ npm start
```

次に、faucetアカウントのsecret_keyを、Signerにインポートします。

```bash
$ cat /casper-nctl/assets/net-1/faucet/secret_key.pem
```

送信先(user-1など)のpublic_key_hexを確認します。

```bash
$ cat /casper-nctl/assets/net-1/users/user-1/public_key_hex
```

以下のコマンドで、Reactフロントエンドアプリケーションを起動します。

```bash
$ cd app
$ yarn install
$ yarn start
```

senderをfaucetアカウントとし、受取人をuser-1に指定して実行を行います。

動作確認を行うには、表示されたTransaction Hashを使用して、デプロイ情報の取得を行います。

``` bash
$ casper-client get-transaction --node-address http://localhost:11101 $TRANSACTION_HASH
```

## ホワイトリスト

Casper Walletをlocalhost以外で使用するには、Casperの認可を受ける必要があります。

https://github.com/casper-ecosystem/signer/blob/master/public/manifest.json#L22
