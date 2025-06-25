import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the access permissions of a URef.
 * These permissions define the allowed actions on the URef, such as read, write, or add.
 */
export declare enum UrefAccess {
    None = 0,
    Read = 1,
    Write = 2,
    Add = 3,
    ReadWrite = 4,
    ReadAdd = 5,
    AddWrite = 6,
    ReadAddWrite = 7
}
/** Error thrown when the URef format is incorrect. */
export declare const ErrIncorrectUrefFormat: Error;
/** Prefix for URef strings. */
export declare const PrefixNameURef = "uref-";
/** Length of a URef hash in bytes. */
export declare const ByteHashLen = 32;
/**
 * Represents an Unforgeable Reference (URef) in the system, identified by a unique hash and associated with specific access permissions.
 * A URef is used to control permissions and securely reference data in smart contracts.
 */
export declare class URef {
    /** The unique data (hash) associated with the URef, represented as a 32-byte array. */
    data: Uint8Array;
    /** The access permissions assigned to this URef, defined by the `UrefAccess` enum. */
    access: UrefAccess;
    /**
     * Creates an instance of URef.
     * @param data - The data (hash) of the URef, expected to be exactly 32 bytes.
     * @param access - The access permissions for the URef, specified by the `UrefAccess` enum.
     * @throws Error if the data length is not equal to `ByteHashLen` or if the access rights are unsupported.
     */
    constructor(data: Uint8Array, access: UrefAccess);
    /**
     * Converts the URef to a byte array representation.
     * This format is useful for serialization or data transfer.
     * @returns A Uint8Array representing the URef, combining its data and access bytes.
     */
    bytes(): Uint8Array;
    /**
     * Converts the URef to a prefixed string representation, following the standard format for URef strings.
     * @returns A string with the URef prefix, data in hex format, and access permissions in hex format.
     */
    toPrefixedString(): string;
    /**
     * Converts the URef to a string, displaying its data as a hexadecimal string along with the access permissions.
     * @returns A string representation of the URef.
     */
    toString(): string;
    /**
     * Sets or updates the access permissions for the URef.
     * @param access - The new access permission to set, defined by the `UrefAccess` enum.
     */
    setAccess(access: UrefAccess): void;
    /**
     * Serializes the URef to a JSON-compatible string format.
     * @returns A JSON string representation of the URef.
     */
    toJSON(): string;
    /**
     * Creates a URef from a JSON-compatible string representation.
     * @param data - The JSON string representing the URef.
     * @returns A new URef instance.
     */
    static fromJSON(data: string): URef;
    /**
     * Parses a URef from a prefixed string format, which includes its data and access permissions.
     * @param source - The string containing the URef data, starting with the URef prefix.
     * @returns A new URef instance.
     * @throws ErrIncorrectUrefFormat if the string format does not match the expected URef format.
     */
    static fromString(source: string): URef;
    /**
     * Creates a URef from a byte array representation, expecting the hash data and access byte.
     * @param bytes - The byte array containing the URef data and access byte.
     * @returns A new URef instance wrapped in an `IResultWithBytes` object.
     * @throws Error if the byte array length does not match the expected URef structure.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<URef>;
    /**
     * Returns the byte array representation of the URef, often used for driving values in other contexts.
     * @returns A Uint8Array representing the URef.
     */
    toDriverValue(): Uint8Array;
    /**
     * Creates a URef instance from an ArrayBuffer, extracting the hash data and access byte.
     * @param arrayBuffer - The ArrayBuffer containing the URef data.
     * @returns A new URef instance.
     * @throws Error if the ArrayBuffer size is smaller than expected.
     */
    static fromBuffer(arrayBuffer: ArrayBuffer): URef;
}
