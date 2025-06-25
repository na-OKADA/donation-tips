import { Hash } from './Hash';
import { IResultWithBytes } from '../clvalue';
import { EntityAddr } from './EntityAddr';
/**
 * Represents an addressable message within the system. The address is composed of an associated entity address,
 * a hashed topic name, and an optional message index. It offers various utilities for serialization, deserialization,
 * and converting the address into prefixed string and byte representations.
 */
export declare class MessageAddr {
    /** The address of the associated entity. */
    entityAddr: EntityAddr;
    /** The hash of the topic name associated with this message. */
    topicNameHash: Hash;
    /** The optional index of the message within the topic. */
    messageIndex?: number;
    /**
     * Creates an instance of MessageAddr.
     * @param entityAddr - The address of the associated entity.
     * @param topicNameHash - The hash of the topic name.
     * @param messageIndex - Optional index of the message.
     */
    constructor(entityAddr: EntityAddr, topicNameHash: Hash, messageIndex?: number);
    /**
     * Instantiates a `MessageAddr` from its string representation.
     * The string should follow the prefixed format used in the system.
     * @param source - The string representation of the MessageAddr.
     * @returns A new MessageAddr instance.
     * @throws Error if the provided string does not match the expected format.
     */
    static fromString(source: string): MessageAddr;
    /**
     * Converts the `MessageAddr` into a standardized prefixed string format.
     * Useful for displaying or storing the address in text format.
     * @returns A prefixed string representation of the `MessageAddr`.
     */
    toPrefixedString(): string;
    /**
     * Serializes the `MessageAddr` into a JSON-compatible string format.
     * Primarily used for JSON-based data exchange.
     * @returns A JSON string representation of the `MessageAddr`.
     */
    toJSON(): string;
    /**
     * Constructs a `MessageAddr` instance from a byte array.
     * Interprets the byte array in a structured format to extract
     * the entity address, topic name hash, and optionally, the message index.
     * @param bytes - The byte array representing the MessageAddr.
     * @returns A new `MessageAddr` instance wrapped in an `IResultWithBytes`.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<MessageAddr>;
    /**
     * Converts the `MessageAddr` to a byte array, enabling binary data storage.
     * Useful for transmission or storage where a compact format is needed.
     * @returns A `Uint8Array` representing the `MessageAddr`.
     */
    toBytes(): Uint8Array;
}
