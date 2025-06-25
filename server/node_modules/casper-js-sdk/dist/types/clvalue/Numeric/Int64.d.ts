import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 64-bit signed integer value in the Casper type system.
 * This class provides methods for handling 64-bit integers, including byte conversion and CLValue integration.
 */
export declare class CLValueInt64 extends CLValueNumeric {
    constructor(value: BigNumberish);
    /**
     * Converts the Int64 value to its byte representation in little-endian format.
     * @returns A Uint8Array representing the bytes of the Int64 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueInt64 instance from a Uint8Array.
     * Interprets the first 8 bytes of the array as a 64-bit integer in little-endian format.
     * @param source - The Uint8Array containing the byte representation of the Int64 value.
     * @returns An object containing the new CLValueInt64 instance and any remaining bytes.
     * @throws Will throw an error if the source array is smaller than Int64ByteSize.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueInt64>;
}
