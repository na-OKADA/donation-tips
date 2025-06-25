import { AccountHash } from '../key';
import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the supported cryptographic algorithms for public keys.
 */
declare enum KeyAlgorithm {
    ED25519 = 1,
    SECP256K1 = 2
}
/**
 * Interface representing the internal structure of a public key, which includes
 * methods for obtaining bytes and verifying signatures.
 */
interface PublicKeyInternal {
    /** Returns the bytes of the public key. */
    bytes(): Uint8Array;
    /**
     * Verifies a signature for a given message.
     * @param message - The message to verify.
     * @param sig - The signature to verify.
     * @returns A promise that resolves to a boolean indicating the validity of the signature.
     */
    verifySignature(message: Uint8Array, sig: Uint8Array): boolean;
    /**
     * Convert this instance's public key to PEM format
     * @returns A PEM compliant string containing this instance's public key
     */
    toPem(): string;
}
/**
 * Represents a public key with a cryptographic algorithm and key data.
 * Provides utilities for serialization, verification, and obtaining an associated account hash.
 */
export declare class PublicKey {
    /** The cryptographic algorithm used for the key. */
    cryptoAlg: KeyAlgorithm;
    /** The key data associated with the public key. */
    key: PublicKeyInternal | null;
    /**
     * Creates an instance of PublicKey.
     * @param cryptoAlg - The cryptographic algorithm used by the key.
     * @param key - The actual key data.
     */
    constructor(cryptoAlg: KeyAlgorithm, key: PublicKeyInternal);
    /**
     * Returns the byte representation of the public key.
     * @returns A Uint8Array of the public key bytes.
     */
    bytes(): Uint8Array;
    /**
     * Converts the public key to a hexadecimal string representation.
     *
     * @param checksummed - A boolean indicating whether to return a checksummed version of the hex string.
     *   - `true`: Includes a checksum in the output.
     *   - `false` (default): Returns the raw hexadecimal string without a checksum.
     * @returns The hexadecimal string representation of the public key.
     *   - If `checksummed` is `true`, the result includes a checksum.
     *   - If `checksummed` is `false`, the raw hex string is returned.
     * @throws {Error} If the public key is not initialized properly (i.e., `this.key` is missing).
     */
    toHex(checksummed?: boolean): string;
    /**
     * Serializes the public key to a JSON-compatible string.
     * @returns A JSON string representation of the public key.
     */
    toJSON(): string;
    /**
     * Converts the public key to a string representation.
     * @returns A string representation of the public key in hexadecimal.
     */
    toString(): string;
    /**
     * Creates a PublicKey instance from a JSON string.
     * @param json - The JSON string.
     * @returns A new PublicKey instance.
     */
    static fromJSON(json: string): PublicKey;
    /**
     * Creates a PublicKey instance from a hexadecimal string.
     * @param source - The hexadecimal string.
     * @returns A new PublicKey instance.
     */
    /**
     * Tries to decode PublicKey from its hex-representation.
     * The hex format should be as produced by PublicKey.toHex
     * @param publicKeyHex public key hex string contains key tag
     * @param checksummed throws an Error if true and given string is not checksummed
     */
    static fromHex(publicKeyHex: string, checksummed?: boolean): PublicKey;
    /**
     * Creates a PublicKey instance from an ArrayBuffer.
     * @param buffer - The ArrayBuffer.
     * @returns A new PublicKey instance.
     * @throws Error if the public key algorithm is invalid.
     */
    static fromBuffer(buffer: ArrayBuffer): PublicKey;
    /**
     * Generates an account hash for the public key, used to uniquely identify an account.
     * @returns An AccountHash representing the account associated with this public key.
     */
    accountHash(): AccountHash;
    /**
     * Verifies a signature for a given message.
     * @param message - The message to verify.
     * @param sig - The signature to verify.
     * @returns A promise that resolves to a boolean indicating the validity of the signature.
     * @throws Error if the signature or public key is empty, or if the signature is invalid.
     */
    verifySignature(message: Uint8Array, sig: Uint8Array): boolean;
    toPem(): string;
    /**
     * Creates a PublicKey instance from a PEM-encoded string.
     * @param content - The PEM string representing the private key.
     * @param algorithm - The KeyAlgorithm of PEM
     * @returns A new PublicKey instance.
     * @throws Error if the content cannot be properly parsed.
     */
    static fromPem(content: string, algorithm: KeyAlgorithm): PublicKey;
    /**
     * Checks equality between two PublicKey instances.
     * @param other - The other PublicKey instance to compare.
     * @returns True if the two PublicKey instances are equal; otherwise, false.
     */
    equals(other: PublicKey): boolean;
    /**
     * Creates a new PublicKey instance from a hex string.
     * @param source - The hex string.
     * @returns A new PublicKey instance.
     */
    static newPublicKey(source: string): PublicKey;
    /**
     * Creates a PublicKey instance from a byte array.
     * @param source - The byte array.
     * @returns A new PublicKey instance.
     * @throws Error if the public key algorithm is invalid.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<PublicKey>;
    /**
     * Verify a mixed-case hexadecimal string that it conforms to the checksum scheme
     * similar to scheme in [EIP-55](https://eips.ethereum.org/EIPS/eip-55).
     * Key differences:
     * - Works on any length of (decoded) data up to `SMALL_BYTES_COUNT`, not just 20-byte addresses
     * - Uses Blake2b hashes rather than Keccak
     * - Uses hash bits rather than nibbles
     * For backward compatibility: if the hex string is all uppercase or all lowercase, the check is
     * skipped.
     * @param input string to check if it is checksummed
     * @returns true if input is checksummed
     */
    static isChecksummed: (input: string) => boolean;
    /**
     * Returns the bytes encoded as hexadecimal with mixed-case based checksums following a scheme
     * similar to [EIP-55](https://eips.ethereum.org/EIPS/eip-55).
     * Key differences:
     * - Works on any length of data, not just 20-byte addresses
     * - Uses Blake2b hashes rather than Keccak
     * - Uses hash bits rather than nibbles
     * @param input Uint8Array to generate checksummed hex string
     * @returns checksummed hex presentation string of input
     */
    static encode: (input: Uint8Array) => string;
}
/**
 * Represents a list of public keys, with utility methods for checking membership and managing keys.
 */
export declare class PublicKeyList {
    private keys;
    /**
     * Creates an instance of PublicKeyList.
     * @param keys - An optional array of PublicKey instances.
     */
    constructor(keys?: PublicKey[]);
    /**
     * Checks if a given PublicKey is present in the list.
     * @param target - The PublicKey to check for.
     * @returns True if the target PublicKey is in the list; otherwise, false.
     */
    contains(target: PublicKey): boolean;
}
export declare function isSameCase(value: string): boolean;
export declare function isValidPublicKey(key: string): boolean;
export {};
