/**
 * Enum representing the available transaction entry points, each representing a different operation in the system.
 */
export declare enum TransactionEntryPointEnum {
    Custom = "Custom",
    Transfer = "Transfer",
    AddBid = "AddBid",
    WithdrawBid = "WithdrawBid",
    Delegate = "Delegate",
    Undelegate = "Undelegate",
    Redelegate = "Redelegate",
    ActivateBid = "ActivateBid",
    ChangeBidPublicKey = "ChangeBidPublicKey",
    Call = "Call",
    AddReservations = "AddReservations",
    CancelReservations = "CancelReservations"
}
/**
 * Enum representing the unique tags associated with each transaction entry point.
 * These tags are used to simplify storage and facilitate efficient comparison of entry points.
 */
export declare enum TransactionEntryPointTag {
    Call = 0,
    Custom = 1,
    Transfer = 2,
    AddBid = 3,
    WithdrawBid = 4,
    Delegate = 5,
    Undelegate = 6,
    Redelegate = 7,
    ActivateBid = 8,
    ChangeBidPublicKey = 9,
    AddReservations = 10,
    CancelReservations = 11
}
/**
 * Represents a transaction entry point, which defines an action to be executed within the system.
 * This class supports predefined entry points as well as custom-defined actions.
 */
export declare class TransactionEntryPoint {
    /**
     * The type of transaction entry point, represented as an enum.
     */
    type: TransactionEntryPointEnum;
    /**
     * Custom entry point identifier, used when the `type` is `Custom`.
     */
    customEntryPoint?: string;
    /**
     * Initializes a new `TransactionEntryPoint` instance.
     *
     * @param type - The type of transaction entry point.
     * @param customEntryPoint - An optional identifier for custom entry points.
     */
    constructor(type: TransactionEntryPointEnum, customEntryPoint?: string);
    /**
     * Retrieves the unique tag associated with the transaction entry point.
     * Tags are used to identify entry points in a compact and efficient manner.
     *
     * @returns The tag number for the entry point.
     * @throws An error if the entry point is unknown.
     */
    tag(): number;
    /**
     * Serializes the transaction entry point into a byte array.
     *
     * @returns A `Uint8Array` representing the transaction entry point and any associated data.
     */
    toBytes(): Uint8Array;
    /**
     * Converts the transaction entry point to a JSON-compatible format.
     *
     * @returns A JSON object representing the transaction entry point.
     */
    toJSON(): unknown;
    /**
     * Creates a `TransactionEntryPoint` instance from a JSON representation.
     *
     * @param json - The JSON representation of the transaction entry point.
     * @returns A `TransactionEntryPoint` instance.
     * @throws An error if the JSON is invalid or the entry point is unknown.
     */
    static fromJSON(json: any): TransactionEntryPoint;
    /**
     * Deserializes a `TransactionEntryPoint` from its byte representation.
     *
     * This method takes a serialized byte array and reconstructs a `TransactionEntryPoint` object.
     * It supports multiple entry point types, including both predefined and custom entry points.
     *
     * @param bytes - The byte array representing the serialized `TransactionEntryPoint`.
     * @returns A deserialized `TransactionEntryPoint` instance.
     * @throws Will throw an error if the byte array is invalid or has missing fields.
     *
     * ### Example
     * ```typescript
     * const serializedBytes = new Uint8Array([0, 1, 2, 3, ...]);
     * const entryPoint = TransactionEntryPoint.fromBytes(serializedBytes);
     * console.log(entryPoint.type); // Logs the entry point type
     * ```
     */
    static fromBytes(bytes: Uint8Array): TransactionEntryPoint;
}
