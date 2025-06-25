import { Hash } from './Hash';
import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing types of byte code within the system.
 */
declare enum ByteCodeKind {
    /** Represents an empty byte code type. */
    EmptyKind = 0,
    /** Represents a V1 Casper WASM byte code type. */
    V1CasperWasmKind = 1
}
/**
 * Represents a byte code in the system, providing support for V1 Casper WASM or an empty byte code.
 */
export declare class ByteCode {
    private V1CasperWasm?;
    private isEmpty;
    /**
     * Constructs a new ByteCode instance.
     * @param V1CasperWasm - The hash representing V1 Casper WASM byte code.
     * @param isEmpty - Whether the byte code is empty. Default is `false`.
     */
    constructor(V1CasperWasm?: Hash, isEmpty?: boolean);
    /**
     * Creates a ByteCode from a JSON string representation.
     * @param data - The JSON string representation of the ByteCode.
     * @returns A new ByteCode instance.
     * @throws ByteCodeError.ErrInvalidByteCodeFormat if the format is invalid.
     */
    static fromJSON(data: string): ByteCode;
    /**
     * Converts the ByteCode instance to its JSON string representation.
     * @returns The JSON string representation of the ByteCode.
     */
    toJSON(): string;
    /**
     * Determines if the ByteCode instance represents an empty byte code.
     * @returns True if the byte code is empty; otherwise, false.
     */
    isEmptyCode(): boolean;
    /**
     * Returns a prefixed string representation of the ByteCode.
     * @returns A prefixed string based on the byte code type.
     * @throws Error if the ByteCode type is unexpected.
     */
    toPrefixedString(): string;
    /**
     * Creates a ByteCode instance from a byte array representation.
     * @param bytes - The byte array.
     * @returns An object with the new ByteCode instance and remaining bytes.
     * @throws ByteCodeError.ErrInvalidByteCodeFormat if the format is invalid.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<ByteCode>;
    /**
     * Converts a byte to its corresponding ByteCodeKind.
     * @param tag - The byte to convert.
     * @returns The corresponding ByteCodeKind.
     * @throws ByteCodeError.ErrInvalidByteCodeKind if the byte doesn't match a valid ByteCodeKind.
     */
    static newByteCodeKindFromByte(tag: number): ByteCodeKind;
    /**
     * Converts the ByteCode instance to a byte array representation.
     * @returns The byte array representation of the ByteCode.
     * @throws Error if the ByteCode type is unexpected.
     */
    toBytes(): Uint8Array;
}
export {};
