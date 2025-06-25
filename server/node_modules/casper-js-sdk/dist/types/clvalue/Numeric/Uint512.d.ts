import { BigNumberish } from '@ethersproject/bignumber';
import { IResultWithBytes } from '../CLValue';
import { CLValueNumeric } from './Abstract';
/**
 * Represents a 512-bit unsigned integer value in the Casper type system.
 */
export declare class CLValueUInt512 extends CLValueNumeric {
    constructor(value: BigNumberish, originalBytes?: Uint8Array);
    /**
     * Converts the UInt512 value to its byte representation.
     * @returns A Uint8Array representing the bytes of the UInt512 value.
     */
    bytes(): Uint8Array;
    /**
     * Creates a CLValueUInt512 instance from a JSON representation.
     * @param json - The JSON representation of the UInt512 value. Can be a string or a number.
     * @returns A new CLValueUInt512 instance.
     * @throws Will throw an error if the input is not a valid integer or is negative.
     */
    static fromJSON(json: string | number): CLValueUInt512;
    /**
     * Creates a CLValueUInt512 instance from a Uint8Array.
     * Parses the byte array to retrieve the UInt512 value.
     * @param source - The Uint8Array containing the byte representation of the UInt512 value.
     * @returns An object containing the new CLValueUInt512 instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array): IResultWithBytes<CLValueUInt512>;
}
