import { TypeID, TypeName, CLType } from './CLType';
/**
 * Represents a Tuple2 type in the Casper type system.
 * This class implements the CLType interface for tuples containing two elements.
 */
export declare class CLTypeTuple2 implements CLType {
    /**
     * The CLType of the first element in the Tuple2.
     */
    inner1: CLType;
    /**
     * The CLType of the second element in the Tuple2.
     */
    inner2: CLType;
    /**
     * Initializes a new instance of the CLTypeTuple2 class.
     * @param inner1 - The CLType of the first element in the Tuple2.
     * @param inner2 - The CLType of the second element in the Tuple2.
     */
    constructor(inner1: CLType, inner2: CLType);
    /**
     * Converts the CLTypeTuple2 instance to its byte representation.
     * This includes the type ID for Tuple2 followed by the byte representations of both inner types.
     * @returns A Uint8Array representing the CLTypeTuple2.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeTuple2.
     * @returns A string in the format "Tuple2 (innerType1, innerType2)".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeTuple2.
     * @returns The TypeID associated with Tuple2.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeTuple2.
     * @returns The TypeName for Tuple2.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeTuple2 instance to a JSON-compatible representation.
     * The JSON object contains a "Tuple2" key with an array including the two inner types.
     * @returns A JSON object representing the Tuple2 type and its inner types.
     */
    toJSON(): {
        [key: string]: CLType[];
    };
    /**
     * Creates a CLTypeTuple2 instance from a JSON representation.
     * Parses JSON input to determine the two inner types for the Tuple2.
     * @param source - The JSON representation of the CLTypeTuple2.
     * @returns A new CLTypeTuple2 instance with the parsed inner types.
     * @throws Error if the JSON structure is invalid or the inner types are not correctly specified.
     */
    static fromJSON(source: any): CLTypeTuple2;
}
