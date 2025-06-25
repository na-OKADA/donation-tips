import { TypeID, TypeName, CLType } from './CLType';
/**
 * Represents a Tuple1 type in the Casper type system.
 * This class implements the CLType interface for tuples containing a single element.
 */
export declare class CLTypeTuple1 implements CLType {
    /**
     * The CLType of the single element in the Tuple1.
     */
    inner: CLType;
    /**
     * Initializes a new instance of the CLTypeTuple1 class.
     * @param inner - The CLType of the single element in the Tuple1.
     */
    constructor(inner: CLType);
    /**
     * Converts the CLTypeTuple1 instance to its byte representation.
     * This includes the type ID for Tuple1 followed by the byte representation of the inner type.
     * @returns A Uint8Array representing the CLTypeTuple1.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeTuple1.
     * @returns A string in the format "Tuple1 (innerType)".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeTuple1.
     * @returns The TypeID associated with Tuple1.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeTuple1.
     * @returns The TypeName for Tuple1.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeTuple1 instance to a JSON-compatible representation.
     * The JSON object contains a "Tuple1" key with an array that includes the inner type.
     * @returns A JSON object representing the Tuple1 type and its inner type.
     */
    toJSON(): {
        [key: string]: CLType[];
    };
    /**
     * Creates a CLTypeTuple1 instance from a JSON representation.
     * Parses JSON input to determine the inner type for the Tuple1.
     * @param source - The JSON representation of the CLTypeTuple1.
     * @returns A new CLTypeTuple1 instance with the parsed inner type.
     * @throws Error if the JSON structure is invalid or the inner type is not correctly specified.
     */
    static fromJSON(source: any): CLTypeTuple1;
}
