import { Args, Deploy, Transaction } from '../types';
import { NFTTokenStandard } from '../@types';
export interface IMakeNftTransferDeployParams {
    nftStandard: NFTTokenStandard;
    contractPackageHash: string;
    senderPublicKeyHex: string;
    recipientPublicKeyHex: string;
    paymentAmount: string;
    chainName?: string;
    ttl?: number;
    tokenId?: string;
    tokenHash?: string;
    timestamp?: string;
    gasPrice?: number;
}
/**
 * Creates a `Deploy` for transferring an NFT (Non-Fungible Token).
 * This function constructs and returns a `Deploy` for transferring NFTs according to the specified parameters.
 *
 * @param params - The parameters required to create the NFT transfer deploy.
 * @param params.nftStandard - The NFT standard being used (e.g., CEP-78, CEP-47).
 * @param params.contractPackageHash - The hash of the contract package to interact with.
 * @param params.senderPublicKeyHex - The sender's public key in hexadecimal format.
 * @param params.recipientPublicKeyHex - The recipient's public key in hexadecimal format.
 * @param params.paymentAmount - The payment amount for the transaction, specified in motes.
 * @param params.chainName - The name of the Casper network chain (e.g., "casper", "casper-test"). Defaults to Mainnet.
 * @param params.ttl - The time-to-live (TTL) for the deploy in milliseconds. Defaults to the constant `DEFAULT_DEPLOY_TTL`.
 * @param params.tokenId - The ID of the token to transfer. Optional and used if the standard requires it.
 * @param params.tokenHash - The hash of the token to transfer. Optional and used if the standard requires it.
 * @param params.timestamp - (Optional) The timestamp in ISO 8601 format
 *
 * @returns A deploy object representing the NFT transfer operation.
 *
 * @example
 * ```ts
 * import { makeNftTransferDeploy, NFTTokenStandard } from 'casper-js-sdk';
 *
 * const deploy = await makeNftTransferDeploy({
 *   nftStandard: NFTTokenStandard.CEP47,
 *   contractPackageHash: '0123456789asdfbcdef...',
 *   senderPublicKeyHex: '0123456789asdfbcdef...',
 *   recipientPublicKeyHex: '0123456789abcdef...',
 *   paymentAmount: '3000000000', // 3 CSPR
 *   tokenId: 234,
 * });
 *
 * console.log('Created Deploy:', deploy);
 * ```
 */
export declare const makeNftTransferDeploy: ({ nftStandard, contractPackageHash, senderPublicKeyHex, recipientPublicKeyHex, paymentAmount, chainName, ttl, tokenId, tokenHash, timestamp, gasPrice }: IMakeNftTransferDeployParams) => Deploy;
interface IMakeNftTransferTransactionParams extends IMakeNftTransferDeployParams {
    casperNetworkApiVersion: string;
}
export declare const makeNftTransferTransaction: ({ nftStandard, contractPackageHash, senderPublicKeyHex, recipientPublicKeyHex, paymentAmount, chainName, ttl, tokenId, tokenHash, timestamp, casperNetworkApiVersion, gasPrice }: IMakeNftTransferTransactionParams) => Transaction;
export declare const getRuntimeArgsForNftTransfer: ({ nftStandard, senderPublicKeyHex, recipientPublicKeyHex, tokenId, tokenHash }: Pick<IMakeNftTransferDeployParams, 'nftStandard' | 'senderPublicKeyHex' | 'recipientPublicKeyHex' | 'tokenId' | 'tokenHash'>) => Args;
export declare const getRuntimeArgsForCep78Transfer: ({ tokenHash, tokenId, recipientPublicKeyHex, senderPublicKeyHex }: Pick<IMakeNftTransferDeployParams, 'tokenId' | 'recipientPublicKeyHex' | 'tokenHash' | 'senderPublicKeyHex'>) => Args;
export declare function getRuntimeArgsForCep47Transfer({ tokenId, recipientPublicKeyHex }: Required<Pick<IMakeNftTransferDeployParams, 'tokenId' | 'recipientPublicKeyHex'>>): Args;
export {};
