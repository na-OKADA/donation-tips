import { IDValue } from './id_value';
import { TransactionHash, TransactionWrapper, Deploy, URef, EntityAddr, AccountHash, PublicKey } from '../types';
export declare const ApiVersion = "2.0";
export declare enum Method {
    GetDeploy = "info_get_deploy",
    GetTransaction = "info_get_transaction",
    GetStateItem = "state_get_item",
    QueryGlobalState = "query_global_state",
    GetDictionaryItem = "state_get_dictionary_item",
    GetStateBalance = "state_get_balance",
    GetStateAccount = "state_get_account_info",
    GetStateEntity = "state_get_entity",
    GetEraInfo = "chain_get_era_info_by_switch_block",
    GetBlock = "chain_get_block",
    GetBlockTransfers = "chain_get_block_transfers",
    GetEraSummary = "chain_get_era_summary",
    GetAuctionInfo = "state_get_auction_info",
    GetAuctionInfoV2 = "state_get_auction_info_v2",
    GetValidatorChanges = "info_get_validator_changes",
    GetStateRootHash = "chain_get_state_root_hash",
    GetStatus = "info_get_status",
    GetReward = "info_get_reward",
    GetPeers = "info_get_peers",
    PutDeploy = "account_put_deploy",
    PutTransaction = "account_put_transaction",
    SpeculativeExec = "speculative_exec",
    QueryBalance = "query_balance",
    QueryBalanceDetails = "query_balance_details",
    InfoGetChainspec = "info_get_chainspec"
}
export declare class RpcRequest {
    version: string;
    id?: IDValue;
    method: Method;
    params: any;
    constructor(version: string, method: Method, params: any, id?: IDValue);
    static defaultRpcRequest(method: Method, params: any): RpcRequest;
}
export declare class ParamStateRootHash {
    stateRootHash: string;
    key: string;
    path?: string[];
    constructor(stateRootHash: string, key: string, path?: string[]);
}
export declare class BlockIdentifier {
    hash?: string;
    height?: number;
    constructor(hash?: string, height?: number);
}
export declare class ParamQueryGlobalStateID {
    stateRootHash?: string;
    blockHash?: string;
    blockHeight?: number;
    constructor(stateRootHash?: string, blockHash?: string, blockHeight?: number);
}
export declare class ParamQueryGlobalState {
    stateIdentifier?: ParamQueryGlobalStateID;
    key: string;
    path?: string[];
    constructor(stateIdentifier: ParamQueryGlobalStateID | undefined, key: string, path?: string[]);
    static newQueryGlobalStateParam(key: string, path: string[], id?: ParamQueryGlobalStateID): ParamQueryGlobalState;
}
export declare class ParamTransactionHash {
    transactionHash?: TransactionHash;
    finalizedApprovals?: boolean;
    constructor(transactionHash?: TransactionHash, finalizedApprovals?: boolean);
}
export declare class ParamDeployHash {
    deployHash?: string;
    finalizedApprovals?: boolean;
    constructor(deployHash?: string, finalizedApprovals?: boolean);
}
export declare class ParamBlockIdentifier {
    blockIdentifier?: BlockIdentifier;
    constructor(blockIdentifier?: BlockIdentifier);
    static byHeight(height: number): ParamBlockIdentifier;
    static byHash(hash: string): ParamBlockIdentifier;
}
export declare class ParamGetAccountInfoBalance {
    accountIdentifier: string;
    paramBlockIdentifier: ParamBlockIdentifier;
    constructor(accountIdentifier: string, paramBlockIdentifier: ParamBlockIdentifier);
    toJSON(): any;
}
export declare class EntityIdentifier {
    accountHash?: AccountHash;
    publicKey?: PublicKey;
    entityAddr?: EntityAddr;
    constructor(accountHash?: AccountHash, publicKey?: PublicKey, entityAddr?: EntityAddr);
    static fromAccountHash(accountHash: AccountHash): EntityIdentifier;
    static fromPublicKey(pubKey: PublicKey): EntityIdentifier;
    static fromEntityAddr(entityAddr: EntityAddr): EntityIdentifier;
}
export declare class ParamGetStateEntity {
    entityIdentifier: EntityIdentifier;
    blockIdentifier?: BlockIdentifier;
    constructor(entityIdentifier: EntityIdentifier, blockIdentifier?: BlockIdentifier);
}
export declare class AccountIdentifier {
    accountHash?: AccountHash;
    publicKey?: PublicKey;
    constructor(accountHash?: AccountHash, publicKey?: PublicKey);
}
export declare class PutDeployRequest {
    deploy: Deploy;
    constructor(deploy: Deploy);
}
export declare class PutTransactionRequest {
    transaction: TransactionWrapper;
    constructor(transaction: TransactionWrapper);
}
export declare class GlobalStateIdentifier {
    blockHash?: string;
    blockHeight?: number;
    stateRoot?: string;
    constructor(blockHash?: string, blockHeight?: number, stateRoot?: string);
}
export declare class EraIdentifier {
    block?: BlockIdentifier;
    era?: number;
    constructor(block?: BlockIdentifier, era?: number);
}
export declare class ParamDictionaryIdentifierURef {
    dictionaryItemKey: string;
    seedUref: string;
    constructor(dictionaryItemKey: string, seedUref: string);
}
export declare class AccountNamedKey {
    key: string;
    dictionaryName: string;
    dictionaryItemKey: string;
    constructor(key: string, dictionaryName: string, dictionaryItemKey: string);
}
export declare class ParamDictionaryIdentifierContractNamedKey {
    key: string;
    dictionaryName: string;
    dictionaryItemKey: string;
    constructor(key: string, dictionaryName: string, dictionaryItemKey: string);
}
export declare class ParamDictionaryIdentifier {
    accountNamedKey?: AccountNamedKey;
    contractNamedKey?: ParamDictionaryIdentifierContractNamedKey;
    uRef?: ParamDictionaryIdentifierURef;
    dictionary?: string;
    constructor(accountNamedKey?: AccountNamedKey, contractNamedKey?: ParamDictionaryIdentifierContractNamedKey, uRef?: ParamDictionaryIdentifierURef, dictionary?: string);
}
export declare class SpeculativeExecParams {
    deploy: Deploy;
    blockIdentifier?: BlockIdentifier;
    constructor(deploy: Deploy, blockIdentifier?: BlockIdentifier);
}
export declare class PurseIdentifier {
    mainPurseUnderPublicKey?: PublicKey;
    mainPurseUnderAccountHash?: AccountHash;
    mainPurseUnderEntityAddr?: EntityAddr;
    purseUref?: URef;
    constructor(mainPurseUnderPublicKey?: PublicKey, mainPurseUnderAccountHash?: AccountHash, mainPurseUnderEntityAddr?: EntityAddr, purseUref?: URef);
    static fromPublicKey(pubKey: PublicKey): PurseIdentifier;
    static fromAccountHash(accountHash: AccountHash): PurseIdentifier;
    static fromEntityAddr(entityAddr: EntityAddr): PurseIdentifier;
    static fromUref(uref: URef): PurseIdentifier;
}
export declare class QueryBalanceRequest {
    purseIdentifier: PurseIdentifier;
    stateIdentifier?: GlobalStateIdentifier;
    constructor(purseIdentifier: PurseIdentifier, stateIdentifier?: GlobalStateIdentifier);
}
export declare class QueryBalanceDetailsRequest {
    purseIdentifier: PurseIdentifier;
    stateIdentifier?: GlobalStateIdentifier;
    constructor(purseIdentifier: PurseIdentifier, stateIdentifier?: GlobalStateIdentifier);
}
export declare class InfoGetRewardRequest {
    validator: PublicKey;
    delegator?: PublicKey;
    eraIdentifier?: EraIdentifier;
    constructor(validator: PublicKey, delegator?: PublicKey, eraIdentifier?: EraIdentifier);
}
export declare class StateGetBalanceRequest {
    stateRootHash: string;
    purseURef?: string;
    constructor(stateRootHash: string, purseURef: string);
}
export declare class StateGetDictionaryRequest {
    stateRootHash: string;
    dictionaryIdentifier?: ParamDictionaryIdentifier;
    constructor(stateRootHash: string, dictionaryIdentifier?: ParamDictionaryIdentifier);
}
