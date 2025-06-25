import { TypeID, TypeName, CLType } from './CLType';
import { IResultWithBytes } from '../CLValue';
/**
 * A utility class for parsing various CLTypes from different formats, such as JSON, strings, and bytes.
 * This class includes static methods for handling both simple and complex types, along with error handling for unsupported or unrecognized formats.
 */
export declare class CLTypeParser {
    /**
     * Error thrown when a buffer constructor is not detected.
     */
    static readonly BufferConstructorNotDetectedError: Error;
    /**
     * Error thrown when a complex type format is invalid.
     */
    static readonly ComplexTypeFormatInvalidError: Error;
    /**
     * Error thrown when a complex type format is not detected.
     */
    static readonly ErrComplexTypeFormatNotDetected: Error;
    /**
     * Error thrown when a JSON constructor is not found.
     */
    static readonly ErrJsonConstructorNotFound: Error;
    /**
     * A record of simple CLTypes indexed by their TypeName.
     */
    static readonly simpleTypeByName: Record<TypeName, CLType>;
    /**
     * A record of simple CLTypes indexed by their TypeID.
     */
    static readonly simpleTypeByID: {
        [key in TypeID]?: CLType;
    };
    /**
     * Retrieves a simple CLType by its TypeName.
     * @param typeName - The TypeName of the CLType to retrieve.
     * @returns The corresponding CLType.
     * @throws Error if the type name is not registered.
     */
    static getSimpleTypeByName(typeName: TypeName): CLType;
    /**
     * Parses a CLType from a raw JSON string.
     * @param source - The raw JSON string to parse.
     * @returns The parsed CLType.
     */
    static fromRawJson(source: any): CLType;
    /**
     * Parses a CLType from a Uint8Array.
     * @param bytes - The Uint8Array to parse.
     * @returns An object containing the parsed CLType and the remaining bytes.
     * @throws BufferConstructorNotDetectedError if the type is not recognized.
     */
    static matchBytesToCLType(bytes: Uint8Array): IResultWithBytes<CLType>;
    /**
     * Parses a CLType from an interface (object or string).
     * @param rawData - The data to parse.
     * @returns The parsed CLType.
     */
    static fromInterface(rawData: any): CLType;
    /**
     * Parses a CLType from a complex structure.
     * @param rawData - The complex structure to parse.
     * @returns The parsed CLType.
     * @throws Various errors if the structure is invalid or unrecognized.
     */
    private static fromComplexStruct;
}
