import { Hash } from './Hash';
/**
 * Represents a contract package hash within the system, with support for prefixed and JSON representations.
 */
export declare class ContractPackageHash {
    /**
     * The hash object representing the contract package.
     */
    hash: Hash;
    /**
     * The original prefix of the contract package hash string, if any (e.g., "hash-", "contract-package-wasm-", "contract-package-").
     */
    originPrefix: string;
    /**
     * Constructs a new `ContractPackageHash` instance.
     * @param hash - The `Hash` object representing the contract package hash.
     * @param originPrefix - The original prefix of the contract package hash string, if applicable.
     */
    constructor(hash: Hash, originPrefix: string);
    /**
     * Converts the `ContractPackageHash` instance to its JSON representation.
     * @returns A string representation of the `ContractPackageHash`, including the original prefix.
     */
    toJSON(): string;
    /**
     * Returns the contract package hash as a prefixed string.
     * @returns The contract package hash prefixed with `ContractPackage`.
     */
    toPrefixedString(): string;
    /**
     * Creates a `ContractPackageHash` instance from its JSON representation.
     * @param json - The JSON string representation of the `ContractPackageHash`.
     * @returns A new `ContractPackageHash` instance.
     */
    static fromJSON(json: string): ContractPackageHash;
    /**
     * Creates a new `ContractPackageHash` instance from a string representation.
     * @param source - The string representation of the contract package hash, including any prefix.
     * @returns A new `ContractPackageHash` instance.
     */
    static newContractPackage(source: string): ContractPackageHash;
}
