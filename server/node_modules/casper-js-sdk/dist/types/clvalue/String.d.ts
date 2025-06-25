import { IResultWithBytes } from './CLValue';
/**
 * Represents a string value in the Casper type system.
 */
export declare class CLValueString {
    private value;
    /**
     * Initializes a new instance of the CLValueString class.
     * @param value - The string value to be represented.
     */
    constructor(value: string);
    /**
     * Converts the string value to its byte representation.
     * The result is a Uint8Array containing the length of the string (as a 4-byte prefix) followed by the string's bytes.
     * @returns A Uint8Array representing the bytes of the string.
     */
    bytes(): Uint8Array;
    /**
     * Converts a size number to its 4-byte Uint8Array representation in little-endian format.
     * @param size - The size to convert.
     * @returns A Uint8Array representing the size.
     */
    private sizeToBytes;
    /**
     * Converts the instance to a JSON-compatible string.
     *
     * @returns {string} The string representation of the instance.
     */
    toJSON(): string;
    /**
     * Provides the string value.
     * @returns The string value.
     */
    toString(): string;
    /**
     * Creates a CLValueString instance from a Uint8Array.
     * Parses the byte array to retrieve the string value, interpreting the first 4 bytes as the string length.
     * @param source - The Uint8Array containing the byte representation of the string value.
     * @returns An object containing the new CLValueString instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueString>;
}
