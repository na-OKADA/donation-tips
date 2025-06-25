import { IClient, IHandler } from './client';
import { ChainGetBlockResult, ChainGetBlockTransfersResult, ChainGetEraInfoResult, ChainGetEraSummaryResult, ChainGetStateRootHashResult, InfoGetChainspecResult, InfoGetDeployResult, InfoGetPeerResult, InfoGetRewardResult, InfoGetStatusResult, InfoGetTransactionResult, InfoGetValidatorChangesResult, PutDeployResult, PutTransactionResult, QueryBalanceDetailsResult, QueryBalanceResult, QueryGlobalStateResult, StateGetAccountInfo, StateGetAuctionInfoResult, StateGetAuctionInfoV1Result, StateGetAuctionInfoV2Result, StateGetBalanceResult, StateGetDictionaryResult, StateGetEntityResult, StateGetItemResult } from './response';
import { AccountIdentifier, EntityIdentifier, ParamBlockIdentifier, ParamDictionaryIdentifier, PurseIdentifier } from './request';
import { Deploy, PublicKey, Transaction } from '../types';
export declare class RpcClient implements IClient {
    private handler;
    constructor(handler: IHandler);
    getDeploy(hash: string): Promise<InfoGetDeployResult>;
    getDeployFinalizedApproval(hash: string): Promise<InfoGetDeployResult>;
    getTransactionByTransactionHash(transactionHash: string): Promise<InfoGetTransactionResult>;
    getTransactionByDeployHash(deployHash: string): Promise<InfoGetTransactionResult>;
    getTransactionFinalizedApprovalByTransactionHash(transactionHash: string): Promise<InfoGetTransactionResult>;
    getTransactionFinalizedApprovalByDeployHash(deployHash: string): Promise<InfoGetTransactionResult>;
    getStateItem(stateRootHash: string | null, key: string, path: string[]): Promise<StateGetItemResult>;
    queryLatestGlobalState(key: string, path: string[]): Promise<QueryGlobalStateResult>;
    queryGlobalStateByBlockHash(blockHash: string, key: string, path: string[]): Promise<QueryGlobalStateResult>;
    queryGlobalStateByBlockHeight(blockHeight: number, key: string, path: string[]): Promise<QueryGlobalStateResult>;
    queryGlobalStateByStateHash(stateRootHash: string | null, key: string, path: string[]): Promise<QueryGlobalStateResult>;
    getLatestEntity(entityIdentifier: EntityIdentifier): Promise<StateGetEntityResult>;
    getEntityByBlockHash(entityIdentifier: EntityIdentifier, hash: string): Promise<StateGetEntityResult>;
    getEntityByBlockHeight(entityIdentifier: EntityIdentifier, height: number): Promise<StateGetEntityResult>;
    getAccountInfoByBlockHash(blockHash: string, pub: PublicKey): Promise<StateGetAccountInfo>;
    getAccountInfoByBlockHeight(blockHeight: number, pub: PublicKey): Promise<StateGetAccountInfo>;
    getAccountInfo(blockIdentifier: ParamBlockIdentifier | null, accountIdentifier: AccountIdentifier): Promise<StateGetAccountInfo>;
    getDictionaryItem(stateRootHash: string | null, uref: string, key: string): Promise<StateGetDictionaryResult>;
    getDictionaryItemByIdentifier(stateRootHash: string | null, identifier: ParamDictionaryIdentifier): Promise<StateGetDictionaryResult>;
    getLatestBalance(purseURef: string): Promise<StateGetBalanceResult>;
    getBalanceByStateRootHash(purseURef: string, stateRootHash: string): Promise<StateGetBalanceResult>;
    getEraInfoLatest(): Promise<ChainGetEraInfoResult>;
    getEraInfoByBlockHeight(height: number): Promise<ChainGetEraInfoResult>;
    getEraInfoByBlockHash(hash: string): Promise<ChainGetEraInfoResult>;
    getLatestBlock(): Promise<ChainGetBlockResult>;
    getBlockByHash(hash: string): Promise<ChainGetBlockResult>;
    getBlockByHeight(height: number): Promise<ChainGetBlockResult>;
    getLatestBlockTransfers(): Promise<ChainGetBlockTransfersResult>;
    getBlockTransfersByHash(blockHash: string): Promise<ChainGetBlockTransfersResult>;
    getBlockTransfersByHeight(height: number): Promise<ChainGetBlockTransfersResult>;
    getEraSummaryLatest(): Promise<ChainGetEraSummaryResult>;
    getEraSummaryByHash(blockHash: string): Promise<ChainGetEraSummaryResult>;
    getEraSummaryByHeight(height: number): Promise<ChainGetEraSummaryResult>;
    getLatestAuctionInfo(): Promise<StateGetAuctionInfoResult>;
    getLatestAuctionInfoV1(): Promise<StateGetAuctionInfoV1Result>;
    getLatestAuctionInfoV2(): Promise<StateGetAuctionInfoV2Result>;
    getAuctionInfoByHash(blockHash: string): Promise<StateGetAuctionInfoResult>;
    getAuctionInfoV1ByHash(blockHash: string): Promise<StateGetAuctionInfoV1Result>;
    getAuctionInfoV2ByHash(blockHash: string): Promise<StateGetAuctionInfoV2Result>;
    getAuctionInfoByHeight(height: number): Promise<StateGetAuctionInfoResult>;
    getAuctionInfoV1ByHeight(height: number): Promise<StateGetAuctionInfoV1Result>;
    getAuctionInfoV2ByHeight(height: number): Promise<StateGetAuctionInfoV2Result>;
    getStateRootHashLatest(): Promise<ChainGetStateRootHashResult>;
    getStateRootHashByHash(blockHash: string): Promise<ChainGetStateRootHashResult>;
    getStateRootHashByHeight(height: number): Promise<ChainGetStateRootHashResult>;
    getValidatorChangesInfo(): Promise<InfoGetValidatorChangesResult>;
    getStatus(): Promise<InfoGetStatusResult>;
    getPeers(): Promise<InfoGetPeerResult>;
    putDeploy(deploy: Deploy): Promise<PutDeployResult>;
    putTransaction(transaction: Transaction): Promise<PutTransactionResult>;
    queryLatestBalance(identifier: PurseIdentifier): Promise<QueryBalanceResult>;
    queryBalanceByBlockHeight(purseIdentifier: PurseIdentifier, height: number): Promise<QueryBalanceResult>;
    queryBalanceByBlockHash(purseIdentifier: PurseIdentifier, blockHash: string): Promise<QueryBalanceResult>;
    queryBalanceByStateRootHash(purseIdentifier: PurseIdentifier, stateRootHash: string): Promise<QueryBalanceResult>;
    queryLatestBalanceDetails(purseIdentifier: PurseIdentifier): Promise<QueryBalanceDetailsResult>;
    queryBalanceDetailsByStateRootHash(purseIdentifier: PurseIdentifier, stateRootHash: string): Promise<QueryBalanceDetailsResult>;
    queryBalanceDetailsByBlockHeight(purseIdentifier: PurseIdentifier, height: number): Promise<QueryBalanceDetailsResult>;
    queryBalanceDetailsByBlockHash(purseIdentifier: PurseIdentifier, blockHash: string): Promise<QueryBalanceDetailsResult>;
    getChainspec(): Promise<InfoGetChainspecResult>;
    getValidatorRewardByEraID(validator: PublicKey, eraID: number): Promise<InfoGetRewardResult>;
    getValidatorRewardByBlockHash(validator: PublicKey, blockHash: string): Promise<InfoGetRewardResult>;
    getValidatorRewardByBlockHeight(validator: PublicKey, height: number): Promise<InfoGetRewardResult>;
    getDelegatorRewardByEraID(validator: PublicKey, delegator: PublicKey, eraID: number): Promise<InfoGetRewardResult>;
    getDelegatorRewardByBlockHash(validator: PublicKey, delegator: PublicKey, blockHash: string): Promise<InfoGetRewardResult>;
    getDelegatorRewardByBlockHeight(validator: PublicKey, delegator: PublicKey, height: number): Promise<InfoGetRewardResult>;
    getLatestValidatorReward(validator: PublicKey): Promise<InfoGetRewardResult>;
    getLatestDelegatorReward(validator: PublicKey, delegator: PublicKey): Promise<InfoGetRewardResult>;
    /**
     * Waits for a transaction to be confirmed within a given timeout period.
     * Implements a retry mechanism to handle transient errors from the getInfo function.
     *
     * @template T - The expected return type of the transaction info.
     * @param getInfo - A function that fetches transaction info based on its hash.
     * @param hash - The transaction hash to monitor.
     * @param timeout - The maximum time (in milliseconds) to wait for confirmation.
     * @param maxRetries - The maximum number of retries for transient errors.
     * @param retryDelay - The delay (in milliseconds) between retry attempts.
     * @returns A promise that resolves with the transaction info if confirmed, otherwise rejects on timeout or persistent errors.
     * @throws {Error} If the timeout is reached before confirmation or if getInfo fails consistently beyond the allowed retries.
     */
    private waitForConfirmation;
    /**
     * Waits for a transaction to be confirmed on-chain.
     * @param transaction - The transaction instance.
     * @param timeout - Optional timeout in milliseconds (default: 6000ms).
     * @returns A promise that resolves to `InfoGetTransactionResult` if successful.
     * @throws An error if the transaction times out.
     */
    waitForTransaction(transaction: Transaction, timeout?: number): Promise<InfoGetTransactionResult>;
    /**
     * Waits for a deploy to be confirmed on-chain.
     * @param deploy - The deploy instance.
     * @param timeout - Optional timeout in milliseconds (default: 60000ms).
     * @returns A promise that resolves to `InfoGetDeployResult` if successful.
     * @throws An error if the deploy times out.
     */
    waitForDeploy(deploy: Deploy, timeout?: number): Promise<InfoGetDeployResult>;
    private parseResponse;
    private processRequest;
}
