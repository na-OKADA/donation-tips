import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 32-bit signed integer value in the Casper type system.
 * This class provides methods for handling 32-bit integers, including byte conversion and CLValue integration.
 */
export declare class CLValueInt32 extends CLValueNumeric {
    constructor(value: BigNumberish);
    /**
     * Converts the Int32 value to its byte representation in little-endian format.
     * @returns A Uint8Array representing the bytes of the Int32 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueInt32 instance from a Uint8Array.
     * Interprets the first 4 bytes of the array as a 32-bit integer in little-endian format.
     * @param source - The Uint8Array containing the byte representation of the Int32 value.
     * @returns An object containing the new CLValueInt32 instance and any remaining bytes.
     * @throws Will throw an error if the source array is smaller than Int32ByteSize.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueInt32>;
}
