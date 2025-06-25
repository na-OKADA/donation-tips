/**
 * Represents a single field in the call table.
 */
export declare class Field {
    readonly index: number;
    readonly offset: number;
    value: Uint8Array;
    /**
     * Constructs a new `Field` instance.
     *
     * @param index - The index of the field.
     * @param offset - The offset of the field in the payload.
     * @param value - The byte array value of the field.
     */
    constructor(index: number, offset: number, value: Uint8Array);
    /**
     * Calculates the serialized vector size for the given number of fields.
     *
     * This method determines the size of the serialized vector required
     * to store all fields, including their indices and offsets.
     *
     * @returns The size of the serialized vector in bytes.
     */
    static serializedVecSize(): number;
}
/**
 * Handles serialization and deserialization of call table data.
 *
 * The `CalltableSerialization` class is responsible for managing a collection
 * of fields and converting them into a byte array for serialization. It can
 * also reconstruct the fields from a serialized byte array.
 */
export declare class CalltableSerialization {
    private fields;
    private currentOffset;
    /**
     * Adds a field to the call table.
     *
     * @param index - The field index.
     * @param value - The field value as a byte array.
     * @returns The current instance of `CalltableSerialization`.
     * @throws An error if the fields are not added in the correct index order.
     */
    addField(index: number, value: Uint8Array): CalltableSerialization;
    /**
     * Serializes the call table into a byte array.
     *
     * @returns A `Uint8Array` representing the serialized call table.
     */
    toBytes(): Uint8Array;
    /**
     * Retrieves a specific field by its index.
     *
     * @param index - The index of the field to retrieve.
     * @returns The field value as a `Uint8Array`, or `undefined` if the field is not found.
     */
    getField(index: number): Uint8Array | undefined;
    /**
     * Deserializes a byte array into a `CalltableSerialization` object.
     *
     * This method reconstructs the call table and its fields from a serialized byte array.
     *
     * @param bytes - The serialized byte array.
     * @returns A `CalltableSerialization` instance containing the deserialized fields.
     * @throws An error if the byte array is invalid or missing required fields.
     */
    static fromBytes(bytes: Uint8Array): CalltableSerialization;
}
