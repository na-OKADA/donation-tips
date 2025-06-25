import { Deploy, Transaction } from '../types';
import { AuctionManagerEntryPoint, CasperNetworkName } from '../@types';
export interface IMakeAuctionManagerDeployParams {
    contractEntryPoint: AuctionManagerEntryPoint.delegate | AuctionManagerEntryPoint.undelegate | AuctionManagerEntryPoint.redelegate;
    delegatorPublicKeyHex: string;
    validatorPublicKeyHex: string;
    newValidatorPublicKeyHex?: string;
    amount: string;
    paymentAmount?: string;
    chainName?: CasperNetworkName;
    ttl?: number;
    contractHash?: string;
    timestamp?: string;
    gasPrice?: number;
}
/**
 * Creates a `Deploy` for the Auction Manager contract.
 *
 * This function generates a `Deploy` that interacts with the Auction Manager
 * contract on the Casper network. It supports operations such as delegation,
 * un-delegation, and validator change management.
 *
 * @param params - The parameters required to create the Auction Manager deploy.
 * @param params.contractEntryPoint - The entry point to invoke in the Auction Manager contract.
 * @param params.delegatorPublicKeyHex - The delegator's public key in hexadecimal format.
 * @param params.validatorPublicKeyHex - The validator's public key in hexadecimal format.
 * @param params.newValidatorPublicKeyHex - (Optional) The new validator's public key in hexadecimal format (used in validator change operations).
 * @param params.amount - The amount of CSPR to delegate/undelegate/redelegate.
 *                        This value must be represented in its smallest unit (motes).
 *                        For example, to transfer 2.5 CSPR, provide the value `2500000000` (2.5 * 10^9 motes).
 * @param params.paymentAmount - The amount of CSPR to pay a network fee.
 *                        This value must be represented in its smallest unit (motes).
 *                        For example, to transfer 2.5 CSPR, provide the value `2500000000` (2.5 * 10^9 motes).
 * @param params.chainName - (Optional) The name of the Casper network chain - {CasperNetworkName}.
 *                           Must be either `'casper'` (mainnet) or `'casper-test'` (testnet).
 *                           Defaults to `'CasperNetworkName.Mainnet'` if not specified.
 * @param params.ttl - (Optional) The time-to-live (TTL) for the `Deploy` in milliseconds.
 *                      Specifies how long the `Deploy` is valid before it expires.
 *                      Defaults 1800000 (30 minutes)
 * @param params.timestamp - (Optional) The timestamp in ISO 8601 format
 * @param params.contractHash - (Optional) The custom contract hash
 *
 * @returns A deploy object that can be signed and sent to the network.
 *
 * @throws {Error} Throws an error if required parameters are missing or invalid.
 *
 * @example
 * ```ts
 * import { makeAuctionManagerDeploy, AuctionManagerEntryPoint } from 'casper-js-sdk';
 *
 * const deploy = makeAuctionManagerDeploy({
 *   contractEntryPoint: AuctionManagerEntryPoint.delegate,
 *   delegatorPublicKeyHex: "0123456789abcdef...",
 *   validatorPublicKeyHex: "0123456789awedef...",
 *   amount: "500000000000",
 * });
 * ```
 */
export declare const makeAuctionManagerDeploy: ({ delegatorPublicKeyHex, validatorPublicKeyHex, contractEntryPoint, amount, paymentAmount, chainName, newValidatorPublicKeyHex, ttl, contractHash, timestamp, gasPrice }: IMakeAuctionManagerDeployParams) => Deploy;
interface IMakeAuctionManagerTransactionParams extends IMakeAuctionManagerDeployParams {
    casperNetworkApiVersion: string;
}
export declare const makeAuctionManagerTransaction: ({ delegatorPublicKeyHex, validatorPublicKeyHex, contractEntryPoint, amount, paymentAmount, chainName, newValidatorPublicKeyHex, ttl, contractHash, timestamp, casperNetworkApiVersion, gasPrice }: IMakeAuctionManagerTransactionParams) => Transaction;
export {};
