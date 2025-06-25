import { TypeID, TypeName, CLType } from './CLType';
/**
 * Represents a Tuple3 type in the Casper type system.
 * This class implements the CLType interface for tuples containing three elements.
 */
export declare class CLTypeTuple3 implements CLType {
    /**
     * The CLType of the first element in the Tuple3.
     */
    inner1: CLType;
    /**
     * The CLType of the second element in the Tuple3.
     */
    inner2: CLType;
    /**
     * The CLType of the third element in the Tuple3.
     */
    inner3: CLType;
    /**
     * Initializes a new instance of the CLTypeTuple3 class.
     * @param inner1 - The CLType of the first element in the Tuple3.
     * @param inner2 - The CLType of the second element in the Tuple3.
     * @param inner3 - The CLType of the third element in the Tuple3.
     */
    constructor(inner1: CLType, inner2: CLType, inner3: CLType);
    /**
     * Converts the CLTypeTuple3 instance to its byte representation.
     * This includes the type ID for Tuple3 followed by the byte representations of the three inner types.
     * @returns A Uint8Array representing the CLTypeTuple3.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeTuple3.
     * @returns A string in the format "Tuple3 (innerType1, innerType2, innerType3)".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeTuple3.
     * @returns The TypeID associated with Tuple3.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeTuple3.
     * @returns The TypeName for Tuple3.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeTuple3 instance to a JSON-compatible representation.
     * The JSON object contains a "Tuple3" key with an array that includes the three inner types.
     * @returns A JSON object representing the Tuple3 type and its inner types.
     */
    toJSON(): {
        [key: string]: CLType[];
    };
    /**
     * Creates a CLTypeTuple3 instance from a JSON representation.
     * Parses JSON input to determine the three inner types for the Tuple3.
     * @param source - The JSON representation of the CLTypeTuple3.
     * @returns A new CLTypeTuple3 instance with the parsed inner types.
     * @throws Error if the JSON structure is invalid or the inner types are not correctly specified.
     */
    static fromJSON(source: any): CLTypeTuple3;
}
