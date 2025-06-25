import { Effect, ExecutionResult, ExecutionResultV1, Deploy, Transaction, TransactionHash, Block, BlockV1, BlockWrapper, InitiatorAddr, Message, HexBytes, Timestamp, PublicKey, Hash, Transform } from '../types';
export declare enum EventName {
    APIVersionEventType = "ApiVersion",
    BlockAddedEventType = "BlockAdded",
    DeployProcessedEventType = "DeployProcessed",
    DeployAcceptedEventType = "DeployAccepted",
    DeployExpiredEventType = "DeployExpired",
    TransactionProcessedEventType = "TransactionProcessed",
    TransactionAcceptedEventType = "TransactionAccepted",
    TransactionExpiredEventType = "TransactionExpired",
    EventIDEventType = "EventID",
    FinalitySignatureType = "FinalitySignature",
    StepEventType = "Step",
    FaultEventType = "Fault",
    ShutdownType = "Shutdown"
}
export declare class RawEvent {
    eventType: string;
    data: string;
    lastEventId: string;
    constructor(eventType: string, data: string, lastEventId: string);
    private parseEvent;
    parseAsAPIVersionEvent(): APIVersionEvent;
    parseAsDeployProcessedEvent(): DeployProcessedEvent;
    parseAsBlockAddedEvent(): BlockAddedEvent;
    parseAsDeployAcceptedEvent(): DeployAcceptedEvent;
    parseAsFinalitySignatureEvent(): FinalitySignatureEvent;
    parseAsTransactionExpiredEvent(): TransactionExpiredEvent;
    parseAsTransactionProcessedEvent(): TransactionProcessedEvent;
    parseAsTransactionAcceptedEvent(): TransactionAcceptedEvent;
    parseAsFaultEvent(): FaultEvent;
    parseAsStepEvent(): StepEvent;
}
export declare class APIVersionEvent {
    apiVersion: string;
    constructor(apiVersion: string);
}
export declare class BlockAdded {
    blockHash: string;
    block: Block;
    constructor(blockHash: string, block: Block);
}
export declare class BlockAddedEvent {
    BlockAdded: BlockAdded;
    constructor(blockAdded: BlockAdded);
    static fromJSON(data: any): BlockAddedEvent;
}
export declare class BlockAddedV1 {
    blockHash: string;
    block: BlockV1;
    constructor(blockHash: string, block: BlockV1);
}
export declare class BlockAddedEventV1 {
    BlockAdded: BlockAddedV1;
    constructor(blockAdded: BlockAddedV1);
}
export declare class BlockAddedWrapper {
    blockHash: string;
    block: BlockWrapper;
    constructor(blockHash: string, block: BlockWrapper);
}
export declare class BlockAddedEventWrapper {
    BlockAdded: BlockAddedWrapper;
    constructor(blockAdded: BlockAddedWrapper);
}
export declare class DeployProcessedPayload {
    deployHash: Hash;
    account: PublicKey;
    timestamp: Timestamp;
    ttl: string;
    blockHash: Hash;
    executionResult: ExecutionResultV1;
}
export declare class DeployProcessedEvent {
    deployProcessed: DeployProcessedPayload;
}
export declare class DeployAcceptedEvent {
    deployAccepted: Deploy;
}
export declare class DeployExpiredPayload {
    deployHash: Hash;
}
export declare class DeployExpiredEvent {
    deployExpired: DeployExpiredPayload;
}
export declare class TransactionAcceptedPayload {
    transaction: Transaction;
}
export declare class TransactionAcceptedEvent {
    transactionAcceptedPayload: TransactionAcceptedPayload;
    static fromJSON(data: any): TransactionAcceptedEvent | Error;
}
export declare class TransactionExpiredPayload {
    transactionHash: TransactionHash;
}
export declare class TransactionExpiredEvent {
    transactionExpiredPayload: TransactionExpiredPayload;
    static fromJSON(data: any): TransactionExpiredEvent | Error;
}
export declare class TransactionProcessedPayload {
    blockHash: Hash;
    transactionHash: TransactionHash;
    initiatorAddr: InitiatorAddr;
    timestamp: Timestamp;
    ttl: string;
    executionResult: ExecutionResult;
    messages: Message[];
}
export declare class TransactionProcessedEvent {
    transactionProcessedPayload: TransactionProcessedPayload;
    static fromJSON(data: any): TransactionProcessedEvent | Error;
}
export declare class FinalitySignatureV1 {
    blockHash: Hash;
    eraID: number;
    signature: HexBytes;
    publicKey: PublicKey;
}
export declare class FinalitySignatureV2 {
    blockHash: Hash;
    blockHeight?: number;
    chainNameHash?: Hash;
    eraID: number;
    signature: HexBytes;
    publicKey: PublicKey;
}
export declare class FinalitySignatureWrapper {
    v1?: FinalitySignatureV1;
    v2?: FinalitySignatureV2;
}
export declare class FinalitySignature {
    blockHash: Hash;
    blockHeight?: number;
    chainNameHash?: Hash;
    eraID: number;
    signature: HexBytes;
    publicKey: PublicKey;
    originFinalitySignatureV1?: FinalitySignatureV1;
}
export declare class FinalitySignatureEvent {
    finalitySignature: FinalitySignature;
    static fromJSON(data: any): FinalitySignatureEvent | Error;
    constructor(finalitySignature: FinalitySignature);
}
export declare class FaultPayload {
    eraID: number;
    publicKey: PublicKey;
    timestamp: Timestamp;
}
export declare class FaultEvent {
    fault: FaultPayload;
}
export declare class StepPayload {
    eraID: number;
    executionEffect: Effect;
    executionEffects: Transform[];
}
export declare class StepEvent {
    step: StepPayload;
}
