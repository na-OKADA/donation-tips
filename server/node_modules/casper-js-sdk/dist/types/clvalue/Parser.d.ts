import { CLValue, IResultWithBytes } from './CLValue';
import { CLType } from './cltype';
/**
 * Error thrown when an unsupported CLType is encountered.
 */
export declare const ErrUnsupportedCLType: Error;
/**
 * A utility class for parsing CLValues from various formats, including JSON and byte arrays.
 */
export declare class CLValueParser {
    /**
     * Parses a CLValue from a JSON representation.
     * @param json - The JSON object representing a CLValue.
     * @returns A CLValue instance parsed from the JSON.
     */
    static fromJSON(json: any): CLValue;
    /**
     * Converts a CLValue to its JSON representation.
     * @param value - The CLValue to convert.
     * @returns An object with 'bytes' and 'cl_type' properties representing the CLValue.
     */
    static toJSON(value: CLValue): {
        bytes: string;
        cl_type: any;
    };
    /**
     * Serializes a CLValue to bytes, including its type information.
     * @param value - The CLValue to serialize.
     * @returns A Uint8Array containing the serialized CLValue with type information.
     */
    static toBytesWithType(value: CLValue): Uint8Array;
    /**
     * Parses a CLValue from a Uint8Array given its type.
     * @param bytes - The Uint8Array containing the serialized CLValue.
     * @param sourceType - The CLType of the value to parse.
     * @returns An object containing the parsed CLValue and any remaining bytes.
     * @throws {ErrUnsupportedCLType} If an unsupported CLType is encountered.
     */
    static fromBytesByType(bytes: Uint8Array, sourceType: CLType): IResultWithBytes<CLValue>;
    /**
     * Parses a `Uint8Array` to extract a `CLValue` with its corresponding type.
     *
     * This method takes a byte array and interprets it as a `CLValue` by first extracting
     * the length of the value, then splitting the bytes into the value's data and its type.
     *
     * @param bytes - The byte array to be parsed.
     * @returns An `IResultWithBytes<CLValue>` containing the parsed `CLValue` and its remaining bytes.
     * @throws Error - If the length of the value extracted from the bytes is invalid.
     *
     * ### Example
     * ```typescript
     * const bytes = new Uint8Array([...]); // Provide valid CLValue bytes
     * const result = CLValueParser.fromBytesWithType(bytes);
     * console.log(result.result); // Parsed CLValue
     * ```
     */
    static fromBytesWithType(bytes: Uint8Array): IResultWithBytes<CLValue>;
}
