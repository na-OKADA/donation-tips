import { EntityAddr } from './EntityAddr';
import { IResultWithBytes } from '../clvalue';
/**
 * Represents a named key address, which is identified by a base entity address and a unique name.
 * The name is represented in bytes to allow for efficient encoding and decoding.
 */
export declare class NamedKeyAddr {
    /**
     * The base address of the entity to which this key belongs.
     */
    baseAddr: EntityAddr;
    /**
     * The bytes representing the name associated with the address.
     * Expected to be a 32-byte array for validity.
     */
    nameBytes: Uint8Array;
    /**
     * Creates an instance of NamedKeyAddr.
     * @param baseAddr - The base address of the entity.
     * @param nameBytes - The 32-byte array representing the name associated with the address.
     */
    constructor(baseAddr: EntityAddr, nameBytes: Uint8Array);
    /**
     * Creates a NamedKeyAddr instance from a string representation, parsing the base address and name bytes.
     * The string should follow the expected prefixed format used by the system.
     * @param source - The string representation of the NamedKeyAddr.
     * @returns A new NamedKeyAddr instance.
     * @throws Error if the nameBytes length is not exactly 32 bytes.
     */
    static fromString(source: string): NamedKeyAddr;
    /**
     * Converts the NamedKeyAddr instance to a standardized prefixed string format.
     * This format includes the base address and the name bytes, represented in hexadecimal.
     * @returns A prefixed string representation of the NamedKeyAddr.
     */
    toPrefixedString(): string;
    /**
     * Serializes the NamedKeyAddr to a JSON-compatible string.
     * Primarily used for exchanging data in JSON format.
     * @returns A JSON-compatible string representation of the NamedKeyAddr.
     */
    toJSON(): string;
    /**
     * Constructs a NamedKeyAddr instance from a byte array representation.
     * The byte array should contain the base address followed by the name bytes.
     * @param bytes - The byte array representing the NamedKeyAddr.
     * @returns An `IResultWithBytes` object containing the NamedKeyAddr instance and any remaining bytes.
     * @throws Error if the byte array does not contain at least 32 bytes for the name.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<NamedKeyAddr>;
    /**
     * Converts the NamedKeyAddr to a byte array for efficient storage or transmission.
     * The byte array includes the base address followed by the 32-byte name.
     * @returns A Uint8Array representing the NamedKeyAddr.
     */
    toBytes(): Uint8Array;
}
