# Donation Tips

Casper Walletによるtransferを行うことができます。

## Testnetでの実行方法
以下のコマンドでserverを起動します。

```bash
cd server
npm i
npm start
```

.envファイルを設定していることを前提としています。
```bash
CASPER_NCTL=http://localhost:11103/rpc
CASPER_TESTNET=https://node.testnet.cspr.cloud/rpc
CSPR_CLOUD_API_KEY=01917755-xxxx-Your-Own-APIKEY  <--CSPR.cloud KEY*を設定
```
※https://cspr.build/ にて登録できます。


また、以下のコマンドで、Reactフロントエンドアプリケーションを起動します。

```bash
cd app
yarn install
yarn start
```

Walletと繋ぎ使用するNetworkをドロップダウンから選択してください。
※senderがCSPR(Testnet)を保有していることを確認の上で実行してください。

動作確認を行うには、表示されたTransaction Hashを、[testnet.cspr.live](https://testnet.cspr.live/)で入力して確認します。

## NCTLでの実行方法

serverを起動します。

```bash
cd server
npm i
npm start
```

次に、faucetアカウントのsecret_keyを、Walletにインポートします。

```bash
cat /casper-nctl/assets/net-1/faucet/secret_key.pem
```

送信先(user-1など)のpublic_key_hexを確認します。

```bash
cat /casper-nctl/assets/net-1/users/user-1/public_key_hex
```

以下のコマンドで、Reactフロントエンドアプリケーションを起動します。

```bash
cd app
yarn install
yarn start
```

senderをfaucetアカウントとし、受取人をuser-1に指定して実行を行います。

動作確認を行うには、表示されたTransaction Hashを使用して、デプロイ情報の取得を行います。

``` bash
casper-client get-transaction --node-address http://localhost:11101 $TRANSACTION_HASH
```

## ホワイトリスト

Casper Walletをlocalhost以外で使用するには、Casperの認可を受ける必要があります。

https://github.com/casper-ecosystem/signer/blob/master/public/manifest.json#L22
