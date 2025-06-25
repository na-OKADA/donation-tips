import express from "express";
import cors from "cors";
const app = express();

import pkg_body_parser from 'body-parser';
const { json, urlencoded } = pkg_body_parser;
app.use(cors());

app.use(json({ limit: "30mb", extended: true }));
app.use(urlencoded({ limit: "30mb", extended: true }));

import pkg from 'casper-js-sdk'
const { HttpHandler, RpcClient, Transaction, PurseIdentifier, PublicKey } = pkg;

// const ENDPOINT = "https://node.testnet.casper.network/rpc"
const ENDPOINT = "http://localhost:11103/rpc"
const rpcHandler = new HttpHandler(ENDPOINT);
const rpcClient = new RpcClient(rpcHandler);

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

app.post("/", async (req, res) => {
    let { signedTransactionJSON } = req.body;

    const transactionFromJson = Transaction.fromJSON(signedTransactionJSON);

    await sleep(1000);

    let result;
    try {
        result = await rpcClient.putTransaction(transactionFromJson);
        // Check if result and transactionHash exist
        if (!result || !result.transactionHash) {
            return res.status(500).json({
                error: "Transaction failed or no transactionHash returned.",
                details: result
            });
        }
        res.status(200).send(result.transactionHash);
    } catch (e) {
        console.error(e);
        res.status(500).json({
            error: "Error submitting transaction.",
            details: e.message || e.toString()
        });
    }
});

app.post("/balance", async (req, res) => {
    let { publicKeyHex } = req.body;


    try {
        const publicKey = PublicKey.fromHex(publicKeyHex);
        const purseIdentifier = PurseIdentifier.fromPublicKey(publicKey);

        const balance = await rpcClient.queryLatestBalance(purseIdentifier);

        console.log("here")
        console.log(balance);
        res.status(200).send(balance.rawJSON.balance);
    } catch (error) {
        console.log("there")
        console.log(error);
        res.status(500).json({
            error: "There is no balance for the account",
            details: error.message || error.toString()
        })
    }
});

app.listen(9000, () => console.log("running on port 9000..."));
