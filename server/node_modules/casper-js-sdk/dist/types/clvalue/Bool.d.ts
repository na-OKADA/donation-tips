import { IResultWithBytes } from './CLValue';
/**
 * Represents a boolean value in the Casper type system.
 * This class encapsulates a boolean value and provides methods for byte conversion and CLValue integration.
 */
export declare class CLValueBool {
    private value;
    /**
     * Initializes a new instance of the CLValueBool class.
     * @param value - The boolean value to be stored.
     */
    constructor(value: boolean);
    /**
     * Converts the boolean value to its byte representation.
     * @returns A Uint8Array with a single byte: 1 for true, 0 for false.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the boolean value.
     * @returns The string 'true' or 'false'.
     */
    toString(): string;
    /**
     * Converts the instance to a JSON boolean.
     *
     * @returns {boolean} The boolean value of the instance.
     */
    toJSON(): boolean;
    /**
     * Retrieves the boolean value.
     * @returns The stored boolean value.
     */
    getValue(): boolean;
    /**
     * Creates a CLValueBool instance from a Uint8Array.
     * Parses the first byte in the array to determine the boolean value.
     * @param source - The Uint8Array containing the byte representation of the boolean value.
     * @returns An object containing the new CLValueBool instance and any remaining bytes.
     * @throws Will throw an error if the source array is empty or contains an invalid boolean byte.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueBool>;
}
