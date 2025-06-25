/**
 * Represents a secp256k1 public key, providing methods to retrieve the compressed
 * public key bytes and verify digital signatures.
 */
export declare class PublicKey {
    /** The raw bytes of the public key in compressed format. */
    private key;
    /**
     * Creates an instance of PublicKey.
     * @param key - The public key bytes in compressed format.
     */
    constructor(key: Uint8Array);
    /**
     * Retrieves the byte array of the public key in compressed format.
     * @returns A compressed `Uint8Array` representation of the public key.
     */
    bytes(): Uint8Array;
    /**
     * Convert this instance's public key to PEM format
     * @returns A PEM compliant string containing this instance's public key
     */
    toPem(): string;
    /**
     * Verifies a signature for a given message.
     * Uses the secp256k1 algorithm to validate if the provided signature matches
     * the public key for the given message.
     * @param message - The original message that was signed.
     * @param signature - The signature to verify. Supports both raw (64-byte R || S) and DER formats.
     * @returns A promise that resolves to `true` if the signature is valid, or `false` otherwise.
     */
    verifySignature(message: Uint8Array, signature: Uint8Array): boolean;
    /**
     * Creates a PublicKey instance from a PEM-encoded string.
     * @param content - The PEM string representing the private key.
     * @returns A new PublicKey instance.
     * @throws Error if the content cannot be properly parsed.
     */
    static fromPem(content: string): PublicKey;
    /**
     * Creates a PublicKey instance from a byte array, validating the size and format.
     * @param data - The byte array representing the public key in compressed format.
     * @returns A promise that resolves to a new PublicKey instance.
     * @throws Error if the public key size is incorrect or if the key is invalid.
     */
    static fromBytes(data: Uint8Array): Promise<PublicKey>;
}
