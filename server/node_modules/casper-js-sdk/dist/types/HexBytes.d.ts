/**
 * Represents a collection of bytes stored as a `Uint8Array` with methods
 * to convert to/from hexadecimal and JSON.
 */
export declare class HexBytes {
    /**
     * The raw byte data stored in a `Uint8Array`.
     */
    bytes: Uint8Array;
    /**
     * Creates a new instance of `HexBytes`.
     *
     * @param bytes The byte data as a `Uint8Array`.
     */
    constructor(bytes: Uint8Array);
    /**
     * Converts the stored bytes into a hexadecimal string.
     *
     * @returns The hexadecimal string representation of the byte data.
     */
    toHex(): string;
    /**
     * Converts the stored bytes to a JSON string representation.
     * This method returns the hexadecimal string of the byte data.
     *
     * @returns The hexadecimal string as a JSON string.
     */
    toJSON(): string;
    /**
     * Creates a `HexBytes` instance from a hexadecimal string.
     *
     * @param hexString The hexadecimal string to convert.
     * @returns A new `HexBytes` instance.
     */
    static fromHex(hexString: string): HexBytes;
    /**
     * Creates a `HexBytes` instance from a JSON string.
     * The JSON string should be a hexadecimal string.
     *
     * @param json The JSON string to convert.
     * @returns A new `HexBytes` instance.
     */
    static fromJSON(json: string): HexBytes;
    /**
     * Returns a string representation of the byte data as hexadecimal.
     *
     * @returns A string representing the byte data in hexadecimal format.
     */
    toString(): string;
}
