import { Hash } from './Hash';
/**
 * Represents an account hash in the Casper network.
 * This class extends the `Hash` class, adding specific methods and properties for managing account hashes, which include special prefixes.
 */
export declare class AccountHash extends Hash {
    /**
     * Stores the prefix of the original hash string if it had one.
     * Possible prefixes are `"00"` or `"account-hash-"`.
     */
    private originPrefix;
    /**
     * Initializes a new AccountHash instance.
     * @param hash - The underlying Hash object containing the raw bytes of the account hash.
     * @param originPrefix - Optional. The prefix of the original hash string (default is an empty string).
     */
    constructor(hash: Hash, originPrefix?: string);
    /**
     * Parses a string representation of an account hash and creates an AccountHash instance.
     * Recognizes and preserves any prefix, either `"00"` or `"account-hash-"`.
     * @param source - The string representation of the account hash.
     * @returns A new AccountHash instance containing the parsed hash and prefix.
     */
    static fromString(source: string): AccountHash;
    /**
     * Returns the account hash as a string, prefixed with `"account-hash-"`.
     * This is useful for displaying the hash in a format recognized by the Casper network.
     * @returns The account hash as a prefixed string.
     */
    toPrefixedString(): string;
    /**
     * Serializes the AccountHash to its JSON representation.
     * The JSON representation includes the original prefix if present.
     * @returns A string representation of the AccountHash for JSON serialization.
     */
    toJSON(): string;
    /**
     * Deserializes an AccountHash instance from a JSON string representation.
     * @param data - The JSON string representation of the AccountHash.
     * @returns A new AccountHash instance created from the JSON string.
     * @throws {Error} Throws an error if the input is not a valid JSON string.
     */
    static fromJSON(data: string): AccountHash;
}
