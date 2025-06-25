import { TypeID, TypeName, CLType } from './CLType';
/**
 * Error thrown when the JSON format for a Result type is invalid.
 */
export declare const ErrInvalidResultJsonFormat: Error;
/**
 * Represents a Result type in the Casper type system.
 * This class implements the CLType interface, allowing for Result types with defined Ok and Err types.
 */
export declare class CLTypeResult implements CLType {
    /**
     * The CLType of the Ok value in the Result.
     */
    innerOk: CLType;
    /**
     * The CLType of the Err value in the Result.
     */
    innerErr: CLType;
    /**
     * Initializes a new instance of the CLTypeResult class.
     * @param innerOk - The CLType of the Ok value.
     * @param innerErr - The CLType of the Err value.
     */
    constructor(innerOk: CLType, innerErr: CLType);
    /**
     * Converts the CLTypeResult instance to its byte representation.
     * This includes the type ID for Result, followed by the byte representations of the Ok and Err types.
     * @returns A Uint8Array representing the CLTypeResult.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeResult.
     * @returns A string in the format "(Result: Ok(okType), Err(errType))".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeResult.
     * @returns The TypeID associated with Result.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeResult.
     * @returns The TypeName for Result.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeResult instance to a JSON-compatible representation.
     * The JSON object includes a "Result" key containing the JSON representations of the Ok and Err types.
     * @returns A JSON object representing the Result type and its Ok and Err types.
     */
    toJSON(): {
        [key: string]: {
            ok: CLType;
            err: CLType;
        };
    };
    /**
     * Creates a CLTypeResult instance from a JSON representation.
     * Parses JSON input to determine the Ok and Err types for the Result.
     * @param source - The JSON representation of the CLTypeResult.
     * @returns A new CLTypeResult instance with parsed Ok and Err types.
     * @throws {ErrInvalidResultJsonFormat} If the JSON structure is invalid.
     */
    static fromJSON(source: any): CLTypeResult;
}
