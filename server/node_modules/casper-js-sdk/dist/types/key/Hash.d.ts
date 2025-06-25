/// <reference types="node" />
import { IResultWithBytes } from '../clvalue';
/**
 * Represents a cryptographic hash.
 * This class provides methods for creating, manipulating, and comparing hash values.
 */
export declare class Hash {
    private hashBytes;
    /** The fixed length of the hash in bytes. */
    static ByteHashLen: number;
    /** The fixed length of the hash string representation in hexadecimal characters. */
    static StringHashLen: number;
    /**
     * Creates a new Hash instance.
     * @param hashBytes - The byte array representing the hash.
     * @throws Error if the byte array length does not match the expected hash length.
     */
    constructor(hashBytes: Uint8Array);
    /**
     * Creates a Hash instance from a hexadecimal string.
     * @param source - The hexadecimal string representation of the hash.
     * @returns A new Hash instance.
     * @throws Error if the string length does not match the expected hash length.
     */
    static fromHex(source: string): Hash;
    /**
     * Converts the Hash instance to a hexadecimal string.
     * @returns The hexadecimal string representation of the hash.
     */
    toHex(): string;
    /**
     * Converts the Hash instance to a byte array.
     * @returns The byte array representation of the hash.
     */
    toBytes(): Uint8Array;
    /**
     * Converts the Hash instance to its JSON representation.
     * @returns The JSON string representation of the hash.
     */
    toJSON(): string;
    /**
     * Creates a Hash instance from its JSON representation.
     * @param json - The JSON string representation of the hash.
     * @returns A new Hash instance.
     */
    static fromJSON(json: string): Hash;
    /**
     * Creates a Hash instance from a byte array.
     * @param source - The byte array representing the hash.
     * @returns A result object containing the new Hash instance and the remaining bytes.
     * @throws Error if the byte array length does not match the expected hash length.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<Hash>;
    /**
     * Creates a Hash instance from a Buffer.
     * @param buffer - The Buffer containing the hash bytes.
     * @returns A new Hash instance.
     * @throws Error if the buffer length is less than the required hash length.
     */
    static fromBuffer(buffer: Buffer): Hash;
    /**
     * Creates an array of Hash instances from a byte array.
     * @param byteArray - The byte array containing multiple hash values.
     * @returns An array of Hash instances created from the byte array.
     * @throws Error if the byte array length is not a multiple of the hash length.
     */
    static createHashArray(byteArray: Uint8Array): Hash[];
    /**
     * Compares this Hash instance with another Hash instance for equality.
     * @param other - The other Hash to compare with.
     * @returns True if the hashes are equal, false otherwise.
     */
    equals(other: Hash): boolean;
}
