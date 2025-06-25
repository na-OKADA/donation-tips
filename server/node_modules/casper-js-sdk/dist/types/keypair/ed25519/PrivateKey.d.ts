import { PrivateKeyInternal } from '../PrivateKey';
/**
 * Represents an Ed25519 private key, supporting key generation, signing, and PEM encoding.
 * Provides methods for creating instances from byte arrays, hexadecimal strings, and PEM format.
 */
export declare class PrivateKey implements PrivateKeyInternal {
    /** Size of the PEM prefix for Ed25519 private keys. */
    static PemFramePrivateKeyPrefixSize: number;
    /** The raw bytes of the private key. */
    private key;
    /**
     * Creates an instance of PrivateKey.
     * @param key - The private key bytes.
     */
    constructor(key: Uint8Array);
    /**
     * Generates a new random Ed25519 private key.
     * @returns A promise that resolves to a new PrivateKey instance.
     */
    static generate(): PrivateKey;
    /**
     * Retrieves the byte array of the associated public key.
     * @returns A promise that resolves to the public key bytes.
     */
    publicKeyBytes(): Uint8Array;
    toBytes(): Uint8Array;
    /**
     * Signs a message using the private key.
     * @param message - The message to sign.
     * @returns A promise that resolves to the signature bytes.
     */
    sign(message: Uint8Array): Uint8Array;
    /**
     * Creates a PrivateKey instance from a byte array.
     * Validates that the byte array matches the expected length for an Ed25519 private key.
     * @param key - The byte array representing the private key.
     * @returns A new PrivateKey instance.
     * @throws Error if the byte array length is not 64.
     */
    static fromBytes(key: Uint8Array): PrivateKey;
    /**
     * Creates a PrivateKey instance from a hexadecimal string.
     * Converts the hexadecimal string to bytes and validates the length.
     * @param keyHex - The hexadecimal string representing the private key.
     * @returns A new PrivateKey instance.
     * @throws Error if the hex string length is not 128 characters.
     */
    static fromHex(keyHex: string): PrivateKey;
    /**
     * Exports the private key to PEM format, with a standardized prefix and suffix.
     * @returns A PEM-encoded string of the private key.
     */
    toPem(): string;
    /**
     * Creates a PrivateKey instance from a PEM-encoded string.
     * Parses the PEM content to extract the private key bytes.
     * @param content - The PEM string representing the private key.
     * @returns A new PrivateKey instance.
     * @throws Error if the content cannot be properly parsed.
     */
    static fromPem(content: string): PrivateKey;
}
