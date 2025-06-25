import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 128-bit unsigned integer value in the Casper type system.
 */
export declare class CLValueUInt128 extends CLValueNumeric {
    constructor(value: BigNumberish, originalBytes?: Uint8Array);
    /**
     * Converts the UInt128 value to its byte representation.
     * @returns A Uint8Array representing the bytes of the UInt128 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueUInt128 instance from a Uint8Array.
     * Parses the byte array to retrieve the UInt128 value.
     * @param source - The Uint8Array containing the byte representation of the UInt128 value.
     * @returns An object containing the new CLValueUInt128 instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUInt128>;
}
