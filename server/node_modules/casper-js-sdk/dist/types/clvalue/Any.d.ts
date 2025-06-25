/**
 * Represents an 'Any' value in the Casper type system.
 * This type can store any arbitrary data as a byte array, making it highly flexible.
 */
export declare class CLValueAny {
    private data;
    /**
     * Initializes a new instance of the CLValueAny class.
     * @param data - The Uint8Array to be stored as the 'Any' value.
     */
    constructor(data: Uint8Array);
    /**
     * Retrieves the byte representation of the 'Any' value.
     * @returns A Uint8Array representing the stored data.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the 'Any' value.
     * The byte array is decoded as a UTF-8 string.
     * @returns A string decoded from the stored byte array.
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible byte array.
     *
     * @returns {Uint8Array} The byte representation of the instance.
     */
    toJSON(): Uint8Array;
}
