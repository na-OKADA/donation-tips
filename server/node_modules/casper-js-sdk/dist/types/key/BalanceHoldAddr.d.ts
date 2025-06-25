import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the types of balance hold addresses.
 */
export declare enum BalanceHoldAddrTag {
    Gas = 0,
    Processing = 1
}
/**
 * Custom error class for BalanceHoldAddrTag related errors.
 */
export declare class BalanceHoldAddrTagError extends Error {
    constructor(message: string);
}
/**
 * Validates and returns the BalanceHoldAddrTag for a given tag number.
 * @param tag - The tag number to validate.
 * @returns The corresponding BalanceHoldAddrTag.
 * @throws BalanceHoldAddrTagError if the tag is invalid.
 */
export declare function getBalanceHoldAddrTag(tag: number): BalanceHoldAddrTag;
type URefAddr = Uint8Array;
/**
 * Represents a hold on a balance, including the address of the purse and the block time.
 */
export declare class Hold {
    /**
     * The address of the purse on which the hold is placed.
     */
    purseAddr: URefAddr;
    /**
     * The block time at which the hold was created.
     */
    blockTime: Date;
    constructor(purseAddr: URefAddr, blockTime: Date);
}
/**
 * Represents an address holding a balance, categorized by either 'Gas' or 'Processing' type.
 */
export declare class BalanceHoldAddr {
    /**
     * The hold categorized as 'Gas', if any.
     */
    gas?: Hold;
    /**
     * The hold categorized as 'Processing', if any.
     */
    processing?: Hold;
    constructor(gas?: Hold, processing?: Hold);
    /**
     * Parses a string representation of a BalanceHoldAddr and returns a new instance.
     * @param source - The string representation of the BalanceHoldAddr.
     * @returns A new BalanceHoldAddr instance.
     */
    static fromString(source: string): BalanceHoldAddr;
    /**
     * Converts the BalanceHoldAddr to a prefixed string, using 'balance-hold-' as the prefix.
     * @returns The prefixed string representation of the BalanceHoldAddr.
     */
    toPrefixedString(): string;
    /**
     * Serializes the BalanceHoldAddr to its byte representation.
     * Includes a byte for the hold type, the purse address, and an 8-byte block time.
     * @returns The serialized byte representation of the BalanceHoldAddr.
     */
    toBytes(): Uint8Array;
    /**
     * Deserializes a BalanceHoldAddr from a byte array.
     * @param bytes - The byte array containing the BalanceHoldAddr data.
     * @returns A new BalanceHoldAddr instance.
     * @throws Error if the byte format is invalid.
     * @throws BalanceHoldAddrTagError if the hold type is unexpected.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<BalanceHoldAddr>;
    /**
     * Parses a JSON string representation of a BalanceHoldAddr.
     * @param json - The JSON string.
     * @returns A new BalanceHoldAddr instance.
     */
    static fromJSON(json: string): BalanceHoldAddr;
    /**
     * Serializes the BalanceHoldAddr to its JSON string representation.
     * @returns The JSON string representation of the BalanceHoldAddr.
     */
    toJSON(): string;
}
export {};
