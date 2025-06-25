import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 32-bit unsigned integer value in the Casper type system.
 */
export declare class CLValueUInt32 extends CLValueNumeric {
    constructor(value: BigNumberish);
    /**
     * Converts the UInt32 value to its byte representation in little-endian format.
     * @returns A Uint8Array representing the bytes of the UInt32 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueUInt32 instance from a Uint8Array.
     * Parses the byte array to retrieve the UInt32 value.
     * @param source - The Uint8Array containing the byte representation of the UInt32 value.
     * @returns An object containing the new CLValueUInt32 instance and any remaining bytes.
     * @throws Error if the source array is too short for a UInt32 value.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUInt32>;
}
