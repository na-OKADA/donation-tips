import { IResultWithBytes } from './CLValue';
/**
 * Represents a Unit value in the Casper type system.
 * A Unit value is similar to 'null' or 'void' in other languages.
 */
export declare class CLValueUnit {
    private obj;
    /**
     * Constructs a new CLValueUnit instance.
     */
    constructor();
    /**
     * Returns the byte representation of the Unit value.
     * For Unit type, this is always an empty array.
     *
     * @returns An empty Uint8Array.
     */
    bytes(): Uint8Array;
    /**
     * Returns a string representation of the Unit value.
     *
     * @returns The string 'null' to represent the Unit value.
     */
    toString(): string;
    /**
     * Returns the value of the Unit type.
     *
     * @returns Always returns null.
     */
    getValue(): null;
    /**
     * Converts the instance to a JSON-compatible null value.
     *
     * @returns {null} Always returns `null`, representing the absence of a value.
     */
    toJSON(): null;
    /**
     * Creates a CLValueUnit instance from a byte array.
     *
     * @param source - The source Uint8Array.
     * @returns A new CLValueUnit instance.
     * @throws Will throw an error if the source is not empty.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUnit>;
}
