import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 64-bit unsigned integer value in the Casper type system.
 */
export declare class CLValueUInt64 extends CLValueNumeric {
    constructor(value: BigNumberish);
    /**
     * Converts the UInt64 value to its byte representation in little-endian format.
     * @returns A Uint8Array representing the bytes of the UInt64 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueUInt64 instance from a Uint8Array.
     * Parses the byte array to retrieve the UInt64 value.
     * @param source - The Uint8Array containing the byte representation of the UInt64 value.
     * @returns An object containing the new CLValueUInt64 instance and any remaining bytes.
     * @throws Error if the source array is smaller than the required size for a UInt64.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUInt64>;
}
