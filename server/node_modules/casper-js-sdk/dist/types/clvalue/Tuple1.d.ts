import { CLTypeTuple1 } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents a tuple containing one CLValue in the Casper type system.
 */
export declare class CLValueTuple1 {
    innerType: CLTypeTuple1;
    private innerVal;
    /**
     * Initializes a new instance of the CLValueTuple1 class.
     * @param innerType - The CLTypeTuple1 representing the type of the tuple.
     * @param innerVal - The CLValue contained in the tuple.
     */
    constructor(innerType: CLTypeTuple1, innerVal: CLValue);
    /**
     * Converts the tuple to its byte representation.
     * @returns A Uint8Array representing the bytes of the inner CLValue.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the tuple.
     * @returns A string representation of the tuple in the format "(value)".
     */
    toString(): string;
    /**
     * Retrieves the value of the tuple.
     * @returns The CLValue contained in the tuple.
     */
    value(): CLValue;
    /**
     * Converts the instance to a JSON-compatible array.
     *
     * @returns {any} An array containing the JSON representation of the inner value.
     */
    toJSON(): any[];
    /**
     * Creates a CLValueTuple1 instance from a Uint8Array.
     * Parses the byte array to retrieve the inner value of the tuple.
     * @param source - The Uint8Array containing the byte representation of the Tuple1 value.
     * @param clType - The CLTypeTuple1 representing the type of the tuple.
     * @returns An object containing the new CLValueTuple1 instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeTuple1): IResultWithBytes<CLValueTuple1>;
}
