import { CLType, TypeID, TypeName } from './CLType';
/**
 * Represents a fixed-size ByteArray type within the Casper type system.
 * This class allows for defining a ByteArray with a specific size, and includes methods
 * to handle its serialization, string representation, and conversion to JSON format.
 */
export declare class CLTypeByteArray implements CLType {
    size: number;
    /**
     * Initializes a new instance of the CLTypeByteArray class.
     * @param size - Specifies the fixed size of the byte array.
     */
    constructor(size: number);
    /**
     * Converts the CLTypeByteArray instance into a byte representation.
     * This includes the type ID and the size of the byte array.
     * @returns A Uint8Array that represents the CLTypeByteArray.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a human-readable string representation of the CLTypeByteArray.
     * @returns A string in the format "ByteArray: size".
     */
    toString(): string;
    /**
     * Retrieves the unique type identifier (TypeID) for the ByteArray.
     * @returns TypeID for ByteArray.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of this type as defined in the Casper system.
     * @returns TypeName for ByteArray.
     */
    getName(): TypeName;
    /**
     * Gets the fixed size of the byte array.
     * @returns The size of the byte array.
     */
    getSize(): number;
    /**
     * Converts the CLTypeByteArray instance to a JSON-compatible representation.
     * The JSON object contains a single key-value pair, where the key is "ByteArray"
     * and the value is the size of the array.
     * @returns An object with the ByteArray size.
     */
    toJSON(): {
        [key: string]: number;
    };
    /**
     * Constructs a CLTypeByteArray instance from a JSON representation.
     * @param source - The JSON input containing the size of the ByteArray.
     * @returns A new CLTypeByteArray instance.
     * @throws Will throw an error if the input type is not a number.
     */
    static fromJSON(source: any): CLTypeByteArray;
}
