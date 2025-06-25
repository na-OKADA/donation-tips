import { EntityAddr } from './EntityAddr';
import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the types of entry points in the Casper VM.
 */
export declare enum EntryPointTag {
    V1EntryPoint = 0,
    V2EntryPoint = 1
}
/**
 * Custom error class for EntryPoint related errors.
 */
export declare class EntryPointError extends Error {
    constructor(message: string);
}
/**
 * Validates and returns the EntryPointTag for a given tag number.
 * @param tag - The tag number to validate.
 * @returns The corresponding EntryPointTag.
 * @throws EntryPointError if the tag is invalid.
 */
export declare function getEntryPointTag(tag: number): EntryPointTag;
/**
 * Represents a V1 Casper VM entry point with an entity address and name bytes.
 */
declare class VmCasperV1 {
    entityAddr: EntityAddr;
    nameBytes: Uint8Array;
    constructor(entityAddr: EntityAddr, nameBytes: Uint8Array);
}
/**
 * Represents a V2 Casper VM entry point with an entity address and selector.
 */
declare class VmCasperV2 {
    entityAddr: EntityAddr;
    selector: number;
    constructor(entityAddr: EntityAddr, selector: number);
}
/**
 * Represents an entry point address in the system, which may be a V1 or V2 Casper VM entry point.
 */
export declare class EntryPointAddr {
    vmCasperV1?: VmCasperV1;
    vmCasperV2?: VmCasperV2;
    /**
     * Creates a new EntryPointAddr instance.
     * @param vmCasperV1 - The V1 Casper VM entry point, if applicable.
     * @param vmCasperV2 - The V2 Casper VM entry point, if applicable.
     */
    constructor(vmCasperV1?: VmCasperV1, vmCasperV2?: VmCasperV2);
    /**
     * Creates an EntryPointAddr from a string representation.
     * @param source - The string representation of the entry point address.
     * @returns A new EntryPointAddr instance.
     * @throws EntryPointError if the format is invalid.
     */
    static fromString(source: string): EntryPointAddr;
    /**
     * Returns a prefixed string representation of the EntryPointAddr.
     * @returns The prefixed string representation.
     * @throws EntryPointError if the EntryPointAddr type is unexpected.
     */
    toPrefixedString(): string;
    /**
     * Converts the EntryPointAddr to a byte array.
     * @returns The byte array representation of the EntryPointAddr.
     * @throws EntryPointError if the EntryPointAddr type is unexpected.
     */
    toBytes(): Uint8Array;
    /**
     * Creates an EntryPointAddr from a byte array.
     * @param array - The byte array.
     * @returns A new EntryPointAddr instance.
     * @throws EntryPointError if the EntryPointAddr type is unexpected.
     */
    static fromBytes(array: Uint8Array): IResultWithBytes<EntryPointAddr>;
    /**
     * Creates an EntryPointAddr from its JSON representation.
     * @param json - The JSON string representation of the EntryPointAddr.
     * @returns A new EntryPointAddr instance.
     */
    static fromJSON(json: string): EntryPointAddr;
    /**
     * Converts the EntryPointAddr to its JSON representation.
     * @returns The JSON string representation of the EntryPointAddr.
     */
    toJSON(): string;
}
export {};
