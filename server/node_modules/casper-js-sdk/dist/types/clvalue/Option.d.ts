import { CLTypeOption } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents an optional value in the Casper type system.
 * An option can either contain a value or be empty (null).
 */
export declare class CLValueOption {
    type?: CLTypeOption;
    inner: CLValue | null;
    /**
     * Initializes a new instance of the CLValueOption class.
     * @param inner - The CLValue contained in the option, or null if empty.
     * @param type - The CLTypeOption representing the type of the option.
     */
    constructor(inner: CLValue | null, type?: CLTypeOption);
    /**
     * Converts the option to its byte representation.
     * If the option is empty, it returns a Uint8Array with a single 0 byte.
     * If it contains a value, it returns a Uint8Array with 1 followed by the inner value's bytes.
     * @returns A Uint8Array representing the bytes of the option.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the option.
     * @returns An empty string if the option is empty, otherwise the string representation of the inner value.
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible format.
     *
     * @returns {any} The JSON representation of the inner value or `null` if empty.
     *
     * If the instance is empty, it returns `null`. Otherwise, it calls `toJSON()`
     * on the inner value to produce its JSON representation.
     */
    toJSON(): any;
    /**
     * Checks if the option is empty.
     * @returns true if the option is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Retrieves the inner value of the option.
     * @returns The inner CLValue if the option is not empty, or null if it is empty.
     */
    value(): CLValue | null;
    /**
     * Creates a CLValueOption instance from a Uint8Array.
     * Parses the byte array to determine if the option is empty or contains a value.
     * @param source - The Uint8Array containing the byte representation of the Option value.
     * @param clType - The CLTypeOption representing the type of the option.
     * @returns An object containing the new CLValueOption instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeOption): IResultWithBytes<CLValueOption>;
}
