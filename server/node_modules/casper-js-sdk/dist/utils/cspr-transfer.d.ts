import { Deploy, Transaction } from '../types';
export interface IMakeCsprTransferDeployParams {
    senderPublicKeyHex: string;
    recipientPublicKeyHex: string;
    transferAmount: string;
    chainName?: string;
    memo?: string;
    ttl?: number;
    timestamp?: string;
    gasPrice?: number;
    paymentAmount?: string;
}
/**
 * Creates a CSPR transfer `Deploy`.
 *
 * This function generates a `Deploy` for transferring CSPR from one account to another.
 *
 * @param params - The parameters required to create the transfer deploy.
 * @param params.senderPublicKeyHex - The sender's public key in hexadecimal format.
 * @param params.recipientPublicKeyHex - The recipient's public key in hexadecimal format.
 * @param params.transferAmount - The amount of CSPR to transfer.
 *                                This value must be represented in its smallest unit (motes).
 *                                For example, to transfer 2.5 CSPR, provide the value `2500000000` (2.5 * 10^9 motes).
 * @param params.chainName - (Optional) The name of the Casper network chain.
 *                           Defaults to `'CasperNetworkName.Mainnet'` if not specified.
 * @param params.memo - (Optional) Tag/Memo (Comment/Note/Remark)
 *                      Most exchanges require a Tag/Memo for CSPR deposits to be credited correctly.
 *                      Make sure to provide the Tag/Memo if required.
 * @param params.ttl - (Optional) The time-to-live (TTL) for the `Deploy` in milliseconds.
 *                      Specifies how long the `Deploy` is valid before it expires.
 *                      Defaults 1800000 (30 minutes)
 * @param params.timestamp - (Optional) The timestamp in ISO 8601 format
 *
 * @returns A promise that resolves to the created Deploy instance, ready to be sent to the Casper network.
 *
 * @example
 * ```ts
 * import { makeCsprTransferDeploy } from 'casper-js-sdk';
 *
 * const deploy = await makeCsprTransferDeploy({
 *   senderPublicKeyHex: '0123456789asdfbcdef...',
 *   recipientPublicKeyHex: '0123456789abcdef...',
 *   transferAmount: '2500000000', // 2.5 CSPR
 * });
 *
 * console.log('Created Deploy:', deploy);
 * ```
 */
export declare const makeCsprTransferDeploy: ({ senderPublicKeyHex, recipientPublicKeyHex, transferAmount, chainName, memo, ttl, timestamp, gasPrice, paymentAmount }: IMakeCsprTransferDeployParams) => Deploy;
interface IMakeCsprTransferTransactionParams extends IMakeCsprTransferDeployParams {
    casperNetworkApiVersion: string;
}
export declare const makeCsprTransferTransaction: ({ senderPublicKeyHex, recipientPublicKeyHex, transferAmount, chainName, memo, ttl, timestamp, casperNetworkApiVersion, gasPrice, paymentAmount }: IMakeCsprTransferTransactionParams) => Transaction;
export {};
