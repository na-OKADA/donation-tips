import { InitiatorAddr } from './InitiatorAddr';
import { Duration, Timestamp } from './Time';
import { PricingMode } from './PricingMode';
import { Args } from './Args';
import { TransactionTarget } from './TransactionTarget';
import { TransactionEntryPoint } from './TransactionEntryPoint';
import { TransactionScheduling } from './TransactionScheduling';
/**
 * Interface representing the parameters required to build a `TransactionV1Payload`.
 * Contains all necessary data to construct a valid V1 transaction payload.
 */
interface ITransactionPayloadBuildParams {
    /**
     * The address of the transaction initiator.
     */
    initiatorAddr: InitiatorAddr;
    /**
     * Arguments for the transaction.
     */
    args: Args;
    /**
     * The time-to-live (TTL) duration of the transaction.
     */
    ttl: Duration;
    /**
     * Entry point for the transaction execution.
     */
    entryPoint: TransactionEntryPoint;
    /**
     * Pricing mode for the transaction.
     */
    pricingMode: PricingMode;
    /**
     * Timestamp indicating when the transaction was created.
     */
    timestamp: Timestamp;
    /**
     * Target destination of the transaction.
     */
    transactionTarget: TransactionTarget;
    /**
     * Scheduling details for the transaction.
     */
    scheduling: TransactionScheduling;
    /**
     * Name of the chain the transaction should be executed on.
     */
    chainName: string;
}
/**
 * Class representing a collection of fields used in transaction serialization.
 * This class handles serialization and deserialization of transaction data fields.
 */
export declare class PayloadFields {
    /**
     * Arguments for the transaction.
     */
    args: Args;
    /**
     * Target destination of the transaction.
     */
    target: TransactionTarget;
    /**
     * Entry point for the transaction execution.
     */
    entryPoint: TransactionEntryPoint;
    /**
     * Scheduling details for the transaction execution.
     */
    scheduling: TransactionScheduling;
    /**
     * Internal map to store serialized fields, where the key is the field identifier.
     */
    private fields;
    /**
     * Builds a `PayloadFields` instance from provided transaction details.
     *
     * @param args - Transaction arguments.
     * @param transactionTarget - Transaction target.
     * @param transactionEntryPoint - Transaction entry point.
     * @param transactionScheduling - Scheduling information for the transaction.
     * @returns A new `PayloadFields` instance.
     * @throws Error if any of the required parameters are missing or invalid.
     */
    static build(args: Args, transactionTarget: TransactionTarget, transactionEntryPoint: TransactionEntryPoint, transactionScheduling: TransactionScheduling): PayloadFields;
    /**
     * Adds a serialized field to the payload.
     *
     * @param field - Field identifier.
     * @param value - Serialized value of the field.
     */
    addField(field: number, value: Uint8Array): void;
    /**
     * Retrieves the value of a specific field.
     *
     * @param fieldIndex - Identifier of the field.
     * @returns Serialized value of the field.
     */
    getFieldValue(fieldIndex: number): Uint8Array | undefined;
    /**
     * Serializes the fields of the object into a `Uint8Array` for transmission or storage.
     *
     * This method iterates over the `fields` map, serializing each key-value pair. The key is
     * written as a 16-bit unsigned integer, and the value is written as a sequence of bytes.
     * The resulting byte array contains all serialized fields in order, preceded by the number of fields.
     *
     * @returns A `Uint8Array` containing the serialized representation of the fields.
     *
     */
    toBytes(): Uint8Array;
}
/**
 * Class representing the payload for a V1 transaction.
 */
export declare class TransactionV1Payload {
    /**
     * Address of the transaction initiator.
     */
    initiatorAddr: InitiatorAddr;
    /**
     * Timestamp when the transaction was created.
     */
    timestamp: Timestamp;
    /**
     * Time-to-live (TTL) duration of the transaction.
     */
    ttl: Duration;
    /**
     * Pricing mode used for the transaction.
     */
    pricingMode: PricingMode;
    /**
     * Name of the chain the transaction should be executed on.
     */
    chainName: string;
    /**
     * Serialized fields associated with the transaction.
     */
    fields: PayloadFields;
    /**
     * Serializes the transaction payload into a `Uint8Array`.
     *
     * @returns A `Uint8Array` representing the serialized transaction payload.
     */
    toBytes(): Uint8Array;
    /**
     * Constructs a `TransactionV1Payload` instance with specified parameters.
     *
     * @param params - Parameters for building the transaction payload.
     * @returns A new `TransactionV1Payload` instance.
     */
    static build({ initiatorAddr, args, ttl, entryPoint, pricingMode, timestamp, transactionTarget, scheduling, chainName }: ITransactionPayloadBuildParams): TransactionV1Payload;
}
export {};
