import { Hash } from './Hash';
import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the types of entities within the system.
 */
export declare enum EntityKindType {
    SystemKind = 0,
    AccountKind = 1,
    SmartContractKind = 2
}
/** Error thrown when the EntityAddr format is invalid. */
export declare const ErrInvalidEntityAddrFormat: Error;
/** Error thrown when the EntityKind is invalid. */
export declare const ErrInvalidEntityKind: Error;
/**
 * Represents an entity address in the system. This class supports addresses for three types of entities:
 * system, account, and smart contract. The address type is indicated by either the system, account, or smartContract property being set.
 */
export declare class EntityAddr {
    /** The system hash, if this is a system entity. */
    system?: Hash;
    /** The account hash, if this is an account entity. */
    account?: Hash;
    /** The smart contract hash, if this is a smart contract entity. */
    smartContract?: Hash;
    /**
     * Creates a new EntityAddr instance.
     * @param system - The hash representing a system entity.
     * @param account - The hash representing an account entity.
     * @param smartContract - The hash representing a smart contract entity.
     */
    constructor(system?: Hash, account?: Hash, smartContract?: Hash);
    /**
     * Returns a prefixed string representation of the EntityAddr, with different prefixes for each entity type.
     * @returns The prefixed string representation, with "entity-system-", "entity-account-", or "entity-contract-" based on entity type.
     */
    toPrefixedString(): string;
    /**
     * Creates an EntityAddr from a prefixed string representation.
     * @param source - The prefixed string representation of the EntityAddr.
     * @returns A new EntityAddr instance.
     * @throws {ErrInvalidEntityAddrFormat} If the format is invalid.
     */
    static fromPrefixedString(source: string): EntityAddr;
    /**
     * Converts the EntityAddr to a byte array.
     * The first byte represents the entity type, followed by the bytes of the associated hash.
     * @returns The byte array representation of the EntityAddr.
     * @throws {Error} If the EntityAddr type is unexpected.
     */
    toBytes(): Uint8Array;
    /**
     * Creates an EntityAddr from a byte array. The first byte indicates the entity type,
     * and the remaining bytes represent the hash.
     * @param bytes - The byte array.
     * @returns A new EntityAddr instance.
     * @throws {Error} If the buffer is empty or the format is invalid.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<EntityAddr>;
    /**
     * Converts a byte to an EntityKind.
     * @param tag - The byte to convert.
     * @returns The corresponding EntityKind.
     * @throws {Error} If the byte doesn't correspond to a valid EntityKind.
     */
    private static getEntityKindFromByte;
    /**
     * Creates an EntityAddr from its JSON representation.
     * @param json - The JSON string representation of the EntityAddr.
     * @returns A new EntityAddr instance.
     */
    static fromJSON(json: string): EntityAddr;
    /**
     * Converts the EntityAddr to its JSON representation.
     * @returns The JSON string representation of the EntityAddr.
     */
    toJSON(): string;
}
