import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents an 8-bit unsigned integer value in the Casper type system.
 */
export declare class CLValueUInt8 extends CLValueNumeric {
    constructor(value: BigNumberish);
    /**
     * Converts the UInt8 value to its byte representation.
     * @returns A Uint8Array containing a single byte representing the UInt8 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueUInt8 instance from a Uint8Array.
     * Parses the first byte to retrieve the UInt8 value.
     * @param source - The Uint8Array containing the byte representation of the UInt8 value.
     * @returns An object containing the new CLValueUInt8 instance and any remaining bytes.
     * @throws Error if the source array is empty.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUInt8>;
}
