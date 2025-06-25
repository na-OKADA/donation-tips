import { CLTypeByteArray } from './cltype';
import { IResultWithBytes } from './CLValue';
/**
 * Represents a byte array value in the Casper type system.
 * This class encapsulates a byte array, providing methods for conversion to and from CLValue.
 */
export declare class CLValueByteArray {
    private data;
    /**
     * Initializes a new instance of the CLValueByteArray class.
     * @param data - The Uint8Array to be stored in the CLValueByteArray.
     */
    constructor(data: Uint8Array);
    /**
     * Retrieves the byte representation of the byte array.
     * @returns A Uint8Array representing the bytes of the byte array.
     */
    bytes(): Uint8Array;
    /**
     * Converts the instance to a JSON-compatible byte array.
     *
     * @returns {Uint8Array} The byte representation of the instance.
     */
    toJSON(): Uint8Array;
    /**
     * Provides a hexadecimal string representation of the byte array.
     * Each byte is represented by two hexadecimal digits.
     * @returns A string representing the byte array in hexadecimal format.
     */
    toString(): string;
    /**
     * Creates a CLValueByteArray instance from a Uint8Array.
     * Extracts the bytes specified by the given CLTypeByteArray size.
     * @param data - The Uint8Array containing the byte representation of the ByteArray value.
     * @param clType - The CLTypeByteArray defining the size of the ByteArray.
     * @returns An object containing the new CLValueByteArray instance and any remaining bytes.
     */
    static fromBytes(data: Uint8Array, clType: CLTypeByteArray): IResultWithBytes<CLValueByteArray>;
}
