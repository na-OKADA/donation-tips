import { Hash } from './Hash';
/**
 * Represents a contract hash within the system, providing various prefixed representations.
 */
export declare class ContractHash {
    /**
     * The hash object representing the contract.
     */
    hash: Hash;
    /**
     * The prefix of the original contract hash string, if any (e.g., "hash-", "contract-wasm-", "contract-").
     */
    originPrefix: string;
    /**
     * Constructs a new `ContractHash` instance.
     * @param hash - The `Hash` object representing the contract hash.
     * @param originPrefix - The original prefix of the contract hash string.
     */
    constructor(hash: Hash, originPrefix: string);
    /**
     * Converts the `ContractHash` instance to its JSON representation.
     * @returns A string representation of the `ContractHash`, including the original prefix.
     */
    toJSON(): string;
    /**
     * Returns the contract hash as a WASM-prefixed string.
     * @returns The contract hash prefixed with `ContractWasm`.
     */
    toPrefixedWasmString(): string;
    /**
     * Returns the contract hash as a general prefixed string.
     * @returns The contract hash prefixed with `Contract`.
     */
    toPrefixedString(): string;
    /**
     * Creates a `ContractHash` instance from its JSON representation.
     * @param json - The JSON string representation of the `ContractHash`.
     * @returns A new `ContractHash` instance.
     */
    static fromJSON(json: string): ContractHash;
    /**
     * Creates a new `ContractHash` instance from a string representation.
     * @param source - The string representation of the contract hash.
     * @returns A new `ContractHash` instance.
     */
    static newContract(source: string): ContractHash;
}
