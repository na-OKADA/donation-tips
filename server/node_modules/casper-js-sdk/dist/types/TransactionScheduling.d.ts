import { Timestamp } from './Time';
/**
 * Enum representing the scheduling tags for transaction scheduling types.
 */
export declare enum TransactionSchedulingTag {
    /** Native scheduling, meaning no future scheduling is applied. */
    Native = 0,
    /** Future scheduling based on the era ID. */
    FutureEra = 1,
    /** Future scheduling based on a specific timestamp. */
    FutureTimestamp = 2
}
/**
 * Represents the scheduling for a transaction in a future era.
 */
export declare class FutureEraScheduling {
    /**
     * The ID of the future era when the transaction is scheduled to occur.
     */
    eraID: number;
    /**
     * Creates a new instance of `FutureEraScheduling`.
     *
     * @param eraID The era ID when the transaction is scheduled.
     */
    constructor(eraID: number);
    toBytes(): Uint8Array;
}
/**
 * Represents the scheduling for a transaction in a future timestamp.
 */
export declare class FutureTimestampScheduling {
    /**
     * The timestamp when the transaction is scheduled to occur.
     */
    timestamp: Timestamp;
    /**
     * Creates a new instance of `FutureTimestampScheduling`.
     *
     * @param timestamp The timestamp when the transaction is scheduled.
     */
    constructor(timestamp: Timestamp);
    toBytes(): Uint8Array;
}
/**
 * Represents a transaction scheduling, which could be either immediate (standard), scheduled for a future era, or scheduled for a future timestamp.
 */
export declare class TransactionScheduling {
    /**
     * Represents the standard (immediate) scheduling with no future scheduling.
     */
    standard?: object;
    /**
     * Represents scheduling to a future era with a specified `eraID`.
     */
    futureEra?: FutureEraScheduling;
    /**
     * Represents scheduling to a future timestamp with a specified `timestamp`.
     */
    futureTimestamp?: FutureTimestampScheduling;
    /**
     * Creates a new instance of `TransactionScheduling`.
     *
     * @param standard The standard scheduling with no delay.
     * @param futureEra The future era scheduling.
     * @param futureTimestamp The future timestamp scheduling.
     */
    constructor(standard?: object, futureEra?: FutureEraScheduling, futureTimestamp?: FutureTimestampScheduling);
    /**
     * Determines the tag that corresponds to the current scheduling type.
     *
     * @returns The corresponding tag for the scheduling type.
     */
    tag(): TransactionSchedulingTag;
    /**
     * Serializes the transaction scheduling into a byte array representation.
     *
     * @returns A `Uint8Array` representing the transaction scheduling.
     */
    toBytes(): Uint8Array;
    /**
     * Creates a `TransactionScheduling` instance from a JSON object.
     *
     * @param json The JSON object to deserialize into a `TransactionScheduling` instance.
     * @returns The deserialized `TransactionScheduling` object.
     * @throws Error if the JSON format is invalid.
     */
    static fromJSON(json: any): TransactionScheduling;
    /**
     * Converts the transaction scheduling into a JSON-compatible format.
     *
     * @returns The JSON representation of the transaction scheduling.
     * @throws Error if the scheduling type is unknown.
     */
    toJSON(): unknown;
    /**
     * Deserializes a `Uint8Array` into a `TransactionScheduling` instance.
     *
     * This method parses a byte array representation of a `TransactionScheduling`
     * object, determines the type of scheduling based on the tag, and reconstructs
     * the appropriate instance.
     *
     * @param bytes - The byte array to be deserialized.
     * @returns A `TransactionScheduling` instance based on the serialized data.
     * @throws Error - If the byte array is invalid, missing required fields, or contains
     *                 an unrecognized scheduling tag.
     *
     * ### Tags and Their Associated Schedulers:
     * - `TransactionSchedulingTag.Native`: Represents a native scheduling target.
     * - `TransactionSchedulingTag.FutureEra`: Represents a scheduling target tied to a future era.
     * - `TransactionSchedulingTag.FutureTimestamp`: Represents a scheduling target tied to a future timestamp.
     *
     * ### Example
     * ```typescript
     * const bytes = new Uint8Array([...]); // Provide valid TransactionScheduling bytes
     * const scheduling = TransactionScheduling.fromBytes(bytes);
     * console.log(scheduling); // Parsed TransactionScheduling instance
     * ```
     */
    static fromBytes(bytes: Uint8Array): TransactionScheduling;
}
