import { PublicKey } from './PublicKey';
import { KeyAlgorithm } from './Algorithm';
/**
 * Interface representing the structure and methods of a private key, including
 * functions to retrieve public key bytes, sign messages, and export to PEM format.
 */
export interface PrivateKeyInternal {
    /** Retrieves the public key bytes. */
    publicKeyBytes(): Uint8Array;
    toBytes(): Uint8Array;
    /**
     * Signs a message using the private key.
     * @param message - The message to sign.
     * @returns A promise resolving to the signature bytes.
     */
    sign(message: Uint8Array): Uint8Array;
    /** Converts the private key to PEM format. */
    toPem(): string;
}
/**
 * Represents a private key with associated public key and cryptographic algorithm.
 * Provides methods for signing messages, exporting to PEM, and generating public keys.
 */
export declare class PrivateKey {
    /** The cryptographic algorithm used for the key. */
    private alg;
    /** The public key associated with this private key. */
    private pub;
    /** The internal private key implementation. */
    private priv;
    /**
     * Creates an instance of PrivateKey.
     * @param alg - The cryptographic algorithm.
     * @param pub - The associated public key.
     * @param priv - The private key implementation.
     */
    constructor(alg: KeyAlgorithm, pub: PublicKey, priv: PrivateKeyInternal);
    toBytes(): Uint8Array;
    /**
     * Gets the public key associated with this private key.
     * @returns The associated PublicKey instance.
     */
    get publicKey(): PublicKey;
    /**
     * Exports the private key to PEM format.
     * @returns A PEM-encoded string of the private key.
     */
    toPem(): string;
    /**
     * Signs a message using the private key.
     * @param msg - The message to sign.
     * @returns A promise resolving to the signature bytes.
     */
    sign(msg: Uint8Array): Uint8Array;
    /**
     * Signs a message using the private key and includes the algorithm byte in the signature.
     * @param msg - The message to sign.
     * @returns A promise resolving to the signature bytes with the algorithm byte.
     */
    signAndAddAlgorithmBytes(msg: Uint8Array): Uint8Array;
    /**
     * Signs a message without including the algorithm byte.
     * @param msg - The message to sign.
     * @returns A promise resolving to the raw signature bytes.
     */
    rawSign(msg: Uint8Array): Promise<Uint8Array>;
    /**
     * Generates a new private key with the specified algorithm.
     * @param algorithm - The cryptographic algorithm to use.
     * @returns A promise resolving to a new PrivateKey instance.
     */
    static generate(algorithm: KeyAlgorithm): PrivateKey;
    /**
     * Creates a private key from a PEM-encoded string.
     * @param content - The PEM-encoded string.
     * @param algorithm - The cryptographic algorithm to use.
     * @returns A promise resolving to a PrivateKey instance.
     */
    static fromPem(content: string, algorithm: KeyAlgorithm): PrivateKey;
    /**
     * Creates a private key from a hexadecimal string.
     * @param key - The hexadecimal string of the private key.
     * @param algorithm - The cryptographic algorithm to use.
     * @returns A promise resolving to a PrivateKey instance.
     */
    static fromHex(key: string, algorithm: KeyAlgorithm): PrivateKey;
}
