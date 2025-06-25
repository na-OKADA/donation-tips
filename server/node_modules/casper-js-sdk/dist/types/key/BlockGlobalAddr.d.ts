import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the types of block global addresses.
 */
export declare enum BlockGlobalAddrTag {
    BlockTime = 0,
    MessageCount = 1
}
/**
 * Custom error class for errors related to BlockGlobalAddrTag.
 */
export declare class BlockGlobalAddrTagError extends Error {
    constructor(message: string);
}
/**
 * Validates and returns the BlockGlobalAddrTag for a given tag number.
 * @param tag - The tag number to validate.
 * @returns The corresponding BlockGlobalAddrTag.
 * @throws BlockGlobalAddrTagError if the tag is invalid.
 */
export declare function getBlockGlobalAddrTag(tag: number): BlockGlobalAddrTag;
/**
 * Represents a block global address within the system, supporting both block time and message count addresses.
 */
export declare class BlockGlobalAddr {
    /**
     * The block time object, if this is a block time address.
     */
    blockTime?: object;
    /**
     * The message count object, if this is a message count address.
     */
    messageCount?: object;
    /**
     * Constructs a new BlockGlobalAddr instance.
     * @param blockTime - Optional parameter for the block time object.
     * @param messageCount - Optional parameter for the message count object.
     */
    constructor(blockTime?: object, messageCount?: object);
    /**
     * Creates a BlockGlobalAddr from a string representation.
     * @param source - The string representation of the block global address.
     * @returns A new BlockGlobalAddr instance.
     * @throws Error if the format does not match known block global address types.
     */
    static fromString(source: string): BlockGlobalAddr;
    /**
     * Returns a prefixed string representation of the BlockGlobalAddr.
     * @returns A prefixed string that includes the block global address type and a default hash value.
     */
    toPrefixedString(): string;
    /**
     * Creates a BlockGlobalAddr from a byte array representation.
     * @param bytes - The byte array containing the tag for the block global address type.
     * @returns An instance of BlockGlobalAddr representing the given type.
     * @throws Error if the byte array tag does not match any known BlockGlobalAddr type.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<BlockGlobalAddr>;
    /**
     * Converts the BlockGlobalAddr to a byte array representation.
     * @returns A Uint8Array containing the byte tag representing the block global address type.
     */
    toBytes(): Uint8Array;
    /**
     * Creates a BlockGlobalAddr from a JSON string representation.
     * @param json - The JSON string representation.
     * @returns A new BlockGlobalAddr instance.
     */
    static fromJSON(json: string): BlockGlobalAddr;
    /**
     * Converts the BlockGlobalAddr to its JSON string representation.
     * @returns The JSON string that represents this BlockGlobalAddr.
     */
    toJSON(): string;
}
