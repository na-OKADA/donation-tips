import { BigNumber } from '@ethersproject/bignumber';
import { CLValueUInt128, CLValueUInt256, CLValueUInt512 } from './Numeric';
import { IResultWithBytes } from './CLValue';
/**
 * Converts a BigNumber to a Uint8Array with a length prefix.
 *
 * The resulting Uint8Array structure:
 * - The first byte is the length of the BigNumber in bytes.
 * - The remaining bytes represent the BigNumber itself.
 *
 * @param val - The BigNumber to convert.
 * @returns Uint8Array representation of the BigNumber.
 */
export declare const bigToBytes: (val: BigNumber) => Uint8Array;
/**
 * Converts an ArrayBuffer with a length prefix to a BigNumber.
 *
 * Expected input structure:
 * - First byte: length of the BigNumber in bytes.
 * - Remaining bytes: BigNumber value.
 *
 * @param buffer - The ArrayBuffer containing the prefixed byte representation.
 * @returns BigNumber reconstructed from the byte representation.
 */
export declare const bigFromBuffer: (buffer: ArrayBuffer) => BigNumber;
/**
 * Parses a Uint128 CLValue from prefixed bytes.
 * @param rawBytes - Byte array containing the prefixed Uint128 data.
 * @returns The CLValueUInt128 parsed from the byte data.
 */
export declare const fromBytesUInt128: (rawBytes: Uint8Array) => IResultWithBytes<CLValueUInt128>;
/**
 * Parses a Uint256 CLValue from prefixed bytes.
 * @param rawBytes - Byte array containing the prefixed Uint256 data.
 * @returns The CLValueUInt256 parsed from the byte data.
 */
export declare const fromBytesUInt256: (rawBytes: Uint8Array) => IResultWithBytes<CLValueUInt256>;
/**
 * Parses a Uint512 CLValue from prefixed bytes.
 * @param rawBytes - Byte array containing the prefixed Uint512 data.
 * @returns The CLValueUInt512 parsed from the byte data.
 */
export declare const fromBytesUInt512: (rawBytes: Uint8Array) => IResultWithBytes<CLValueUInt512>;
