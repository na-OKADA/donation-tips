import { CLTypeTuple3 } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents a tuple containing three CLValues in the Casper type system.
 */
export declare class CLValueTuple3 {
    innerType: CLTypeTuple3;
    inner1: CLValue;
    inner2: CLValue;
    inner3: CLValue;
    /**
     * Initializes a new instance of the CLValueTuple3 class.
     * @param innerType - The CLType representing the type of the tuple.
     * @param inner1 - The first CLValue in the tuple.
     * @param inner2 - The second CLValue in the tuple.
     * @param inner3 - The third CLValue in the tuple.
     */
    constructor(innerType: CLTypeTuple3, inner1: CLValue, inner2: CLValue, inner3: CLValue);
    /**
     * Converts the tuple to its byte representation.
     * @returns A Uint8Array representing the concatenated bytes of all three inner CLValues.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the tuple.
     * @returns A string representation of the tuple in the format "(value1, value2, value3)".
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible array.
     *
     * @returns {any[]} An array containing the JSON representations of inner1, inner2, and inner3.
     */
    toJSON(): any[];
    /**
     * Retrieves the values of the tuple as an array.
     * @returns An array containing the three CLValues of the tuple.
     */
    value(): [CLValue, CLValue, CLValue];
    /**
     * Creates a CLValueTuple3 instance from a Uint8Array.
     * Parses the byte array to retrieve the three values of the tuple.
     * @param source - The Uint8Array containing the byte representation of the Tuple3 value.
     * @param clType - The CLTypeTuple3 representing the type of the tuple.
     * @returns An object containing the new CLValueTuple3 instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeTuple3): IResultWithBytes<CLValueTuple3>;
}
