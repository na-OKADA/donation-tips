/**
 * Represents an Ed25519 public key, supporting signature verification
 * and loading from byte arrays.
 */
export declare class PublicKey {
    /** The raw bytes of the public key. */
    private key;
    /**
     * Creates an instance of PublicKey.
     * @param key - The public key bytes.
     */
    constructor(key: Uint8Array);
    /**
     * Retrieves the byte array of the public key.
     * @returns A `Uint8Array` representing the public key.
     */
    bytes(): Uint8Array;
    /**
     * Convert this instance's public key to PEM format
     * @returns A PEM compliant string containing this instance's public key
     */
    toPem(): string;
    /**
     * Creates a PublicKey instance from a PEM-encoded string.
     * @param content - The PEM string representing the private key.
     * @returns A new PublicKey instance.
     * @throws Error if the content cannot be properly parsed.
     */
    static fromPem(content: string): PublicKey;
    /**
     * Verifies a signature for a given message.
     * Utilizes the Ed25519 algorithm to check if the signature is valid
     * for the given message and public key.
     * @param message - The original message that was signed.
     * @param signature - The signature to verify.
     * @returns A promise that resolves to `true` if the signature is valid, or `false` otherwise.
     */
    verifySignature(message: Uint8Array, signature: Uint8Array): boolean;
    /**
     * Creates a PublicKey instance from a byte array.
     * Validates the size of the byte array to ensure it matches the expected
     * size of an Ed25519 public key.
     * @param data - The byte array representing the public key.
     * @returns A new PublicKey instance.
     * @throws Error if the byte array length is not equal to `PublicKeySize`.
     */
    static fromBytes(data: Uint8Array): PublicKey;
}
