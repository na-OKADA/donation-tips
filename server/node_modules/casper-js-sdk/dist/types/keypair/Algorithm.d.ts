/**
 * Enum representing supported cryptographic key algorithms.
 * Each value corresponds to a specific cryptographic algorithm used in digital signatures.
 */
export declare enum KeyAlgorithm {
    /** ED25519 digital signature algorithm */
    ED25519 = 1,
    /** SECP256K1 elliptic curve digital signature algorithm */
    SECP256K1 = 2
}
/**
 * Settings for each key algorithm, providing additional metadata.
 * Maps `KeyAlgorithm` enum values to their corresponding name.
 */
export declare const KeySettings: Record<KeyAlgorithm, {
    name: string;
}>;
/**
 * Utility class for working with key algorithms, allowing conversion to string and byte formats.
 * Provides convenient methods to retrieve the algorithm name and numeric representation.
 */
export declare class KeyAlgorithmUtils {
    private algorithm;
    /**
     * Creates an instance of KeyAlgorithmUtils.
     * @param algorithm - The key algorithm to manage, specified by the `KeyAlgorithm` enum.
     */
    constructor(algorithm: KeyAlgorithm);
    /**
     * Returns the name of the key algorithm as a string.
     * @returns The name of the key algorithm, as defined in `KeySettings`.
     */
    toString(): string;
    /**
     * Returns the numeric byte representation of the key algorithm.
     * @returns The numeric value of the key algorithm.
     */
    toByte(): number;
}
