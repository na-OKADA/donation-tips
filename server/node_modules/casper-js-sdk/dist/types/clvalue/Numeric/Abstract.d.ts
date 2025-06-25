import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
/**
 * Abstract class representing a numeric value in the Casper type system.
 * Provides common methods and properties for numeric types.
 */
export declare abstract class CLValueNumeric {
    protected value: BigNumber;
    protected originalBytes?: Uint8Array;
    /**
     * The constructor is protected to ensure this class cannot be instantiated directly.
     * Subclasses can call this constructor using `super`.
     */
    protected constructor(value: BigNumberish, originalBytes?: Uint8Array);
    /**
     * Converts the numeric value to its byte representation.
     * Must be implemented by subclasses.
     */
    abstract bytes(): Uint8Array;
    /**
     * Provides a string representation of the numeric value.
     * @returns The string representation of the value.
     */
    toString(): string;
    /**
     * Converts the numeric value to a JavaScript number.
     * @returns The numeric value as a JavaScript number.
     */
    toNumber(): number;
    /**
     * Converts the instance to a JSON-compatible string.
     * @returns {string} The string representation of the instance.
     */
    toJSON(): string;
    /**
     * Retrieves the numeric value.
     * @returns The numeric representation of the value.
     */
    getValue(): BigNumber;
}
