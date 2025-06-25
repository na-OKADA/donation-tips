import { HexBytes } from './HexBytes';
/**
 * Represents the system's bytecode with its type and raw bytes.
 */
export declare class SystemByteCode {
    /**
     * The type of the bytecode, represented as a string.
     */
    kind: string;
    /**
     * The raw bytecode data in hexadecimal format.
     */
    bytes: HexBytes;
    /**
     * Creates an instance of SystemByteCode.
     * @param kind - The type of the bytecode.
     * @param bytes - The bytecode data in hexadecimal format.
     */
    constructor(kind: string, bytes: HexBytes);
    /**
     * Checks if the bytecode kind is empty or undefined.
     * @returns `true` if the kind is "Empty" or not set; otherwise, `false`.
     */
    isEmpty(): boolean;
    /**
     * Checks if the bytecode kind is of type "V1CasperWasm".
     * @returns `true` if the kind is "V1CasperWasm"; otherwise, `false`.
     */
    isV1CasperWasm(): boolean;
    /**
     * Returns a string representation of the bytecode kind.
     * @returns The kind of the bytecode as a string.
     */
    toString(): string;
}
