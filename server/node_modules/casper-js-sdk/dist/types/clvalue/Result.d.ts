import { CLTypeResult } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents a Result type in the Casper type system.
 * A Result can either be a success (Ok) or an error (Err).
 */
export declare class CLValueResult {
    type: CLTypeResult;
    isSuccess: boolean;
    inner: CLValue;
    /**
     * Initializes a new instance of the CLValueResult class.
     * @param type - The CLTypeResult representing the type of the Result.
     * @param isSuccess - A boolean indicating whether the Result is a success (true) or an error (false).
     * @param inner - The CLValue contained within the Result.
     */
    constructor(type: CLTypeResult, isSuccess: boolean, inner: CLValue);
    /**
     * Converts the Result to its byte representation.
     * Includes a success flag byte (1 for success, 0 for error) followed by the bytes of the inner value.
     * @returns A Uint8Array representing the bytes of the Result.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the Result.
     * @returns A string representation of the Result, either "Ok(innerValue)" or "Err(innerValue)".
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible format.
     *
     * @returns {any} The JSON representation of the inner value.
     *
     * Calls `toJSON()` on the inner value to produce its JSON representation.
     */
    toJSON(): any;
    /**
     * Retrieves the inner CLValue of the Result.
     * @returns The CLValue contained within the Result.
     */
    value(): CLValue;
    /**
     * Creates a CLValueResult instance from a Uint8Array.
     * Parses the byte array to interpret the success flag and the inner value.
     * @param source - The Uint8Array containing the byte representation of the Result value.
     * @param clType - The CLTypeResult representing the type of the Result.
     * @returns An object containing the new CLValueResult instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeResult): IResultWithBytes<CLValueResult>;
}
