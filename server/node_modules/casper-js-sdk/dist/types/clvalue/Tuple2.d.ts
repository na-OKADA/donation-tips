import { CLTypeTuple2 } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents a tuple containing two CLValues in the Casper type system.
 */
export declare class CLValueTuple2 {
    innerType: CLTypeTuple2;
    inner1: CLValue;
    inner2: CLValue;
    /**
     * Initializes a new instance of the CLValueTuple2 class.
     * @param innerType - The CLTypeTuple2 representing the type of the tuple.
     * @param inner1 - The first CLValue in the tuple.
     * @param inner2 - The second CLValue in the tuple.
     */
    constructor(innerType: CLTypeTuple2, inner1: CLValue, inner2: CLValue);
    /**
     * Converts the tuple to its byte representation.
     * @returns A Uint8Array representing the concatenated bytes of both inner CLValues.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the tuple.
     * @returns A string representation of the tuple in the format "(value1, value2)".
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible array.
     *
     * @returns {any[]} An array containing the JSON representations of inner1 and inner2.
     */
    toJSON(): any[];
    /**
     * Retrieves the values of the tuple as an array.
     * @returns An array containing the two CLValues of the tuple.
     */
    value(): [CLValue, CLValue];
    /**
     * Creates a CLValueTuple2 instance from a Uint8Array.
     * Parses the byte array to retrieve the two values of the tuple.
     * @param source - The Uint8Array containing the byte representation of the Tuple2 value.
     * @param clType - The CLTypeTuple2 representing the type of the tuple.
     * @returns An object containing the new CLValueTuple2 instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeTuple2): IResultWithBytes<CLValueTuple2>;
}
