import { Deploy, Transaction } from '../types';
export interface IMakeCep18TransferDeployParams {
    contractPackageHash: string;
    senderPublicKeyHex: string;
    recipientPublicKeyHex: string;
    transferAmount: string;
    paymentAmount: string;
    chainName?: string;
    ttl?: number;
    timestamp?: string;
    gasPrice?: number;
}
/**
 * This function generates a `Deploy` for transferring CEP-18 from one account to another.
 *
 * @param params - The parameters required to create the CEP-18 transfer deploy.
 * @param params.contractPackageHash - The hash of the contract package to interact with.
 *                              This is a 64-character hexadecimal string representing the contract package.
 * @param params.senderPublicKeyHex - The sender's public key in hexadecimal format.
 * @param params.recipientPublicKeyHex - The recipient's public key in hexadecimal format.
 * @param params.transferAmount - The amount of CSPR to transfer.
 *                                This value must be represented in its smallest unit (motes).
 *                                For example, to transfer 2.5 CSPR, provide the value `2500000000` (2.5 * 10^9 motes).
 * @param params.paymentAmount - The amount of CSPR to pay a network fee.
 *                               This value must be represented in its smallest unit (motes).
 * @param params.chainName - (Optional) The name of the Casper network chain.
 *                           Defaults to `'CasperNetworkName.Mainnet'` if not specified.
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
 * const deploy = await makeCep18TransferDeploy({
 *   contractHash: '0123456789asdfbcdef...',
 *   senderPublicKeyHex: '0123456789asdfbcdef...',
 *   recipientPublicKeyHex: '0123456789abcdef...',
 *   transferAmount: '25000000000', // 25 CEP-18 with 9 decimals
 *   paymentAmount: '3000000000', // 3 CSPR
 * });
 *
 * console.log('Created Deploy:', deploy);
 * ```
 */
export declare const makeCep18TransferDeploy: ({ contractPackageHash, senderPublicKeyHex, recipientPublicKeyHex, transferAmount, paymentAmount, chainName, ttl, timestamp, gasPrice }: IMakeCep18TransferDeployParams) => Deploy;
interface IMakeCep18TransferTransactionParams extends IMakeCep18TransferDeployParams {
    casperNetworkApiVersion: string;
}
export declare const makeCep18TransferTransaction: ({ contractPackageHash, senderPublicKeyHex, recipientPublicKeyHex, transferAmount, paymentAmount, chainName, ttl, timestamp, casperNetworkApiVersion, gasPrice }: IMakeCep18TransferTransactionParams) => Transaction;
export {};
