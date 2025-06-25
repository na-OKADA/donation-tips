import { Hash } from './Hash';
/**
 * Represents an addressable entity hash in the Casper network.
 * This class extends the `Hash` class to include a prefix indicating it is an addressable entity, adding specific methods and properties for managing such hashes.
 */
export declare class AddressableEntityHash extends Hash {
    /**
     * Stores the prefix of the original hash string if it had one.
     * Defaults to `addressable-entity-` if not provided.
     */
    originPrefix: string;
    /**
     * Initializes a new AddressableEntityHash instance.
     * @param hashBytes - The byte array representing the hash value.
     * @param originPrefix - Optional. The prefix of the original hash string. Defaults to `addressable-entity-`.
     */
    constructor(hashBytes: Uint8Array, originPrefix?: string);
    /**
     * Parses a hexadecimal string to create an AddressableEntityHash instance.
     * Checks if the input string starts with the `addressable-entity-` prefix, removing it if present.
     * @param source - The hexadecimal string representation of the hash, with or without the prefix.
     * @returns A new AddressableEntityHash instance.
     */
    static fromHex(source: string): AddressableEntityHash;
    /**
     * Returns the addressable entity hash as a prefixed string.
     * Always includes the `addressable-entity-` prefix.
     * @returns The prefixed hexadecimal string representation of the hash.
     */
    toPrefixedString(): string;
    /**
     * Serializes the AddressableEntityHash to its JSON representation.
     * The JSON representation includes the original prefix if it was specified.
     * @returns A string combining the prefix (if present) and the hexadecimal representation of the hash.
     */
    toJSON(): string;
    /**
     * Deserializes an AddressableEntityHash instance from a JSON string representation.
     * @param json - The JSON string representation of the AddressableEntityHash, with or without the prefix.
     * @returns A new AddressableEntityHash instance created from the JSON string.
     */
    static fromJSON(json: string): AddressableEntityHash;
}
