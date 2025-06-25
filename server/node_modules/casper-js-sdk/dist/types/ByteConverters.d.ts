import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
/**
 * Converts a BigNumberish value to bytes with specified bit size and signedness.
 * @param bitSize - The bit size of the integer.
 * @param signed - `true` if the integer is signed; `false` otherwise.
 * @returns A function that converts a BigNumberish value into a `Uint8Array` byte representation.
 */
export declare const toBytesNumber: (bitSize: number, signed: boolean) => (value: BigNumberish) => Uint8Array;
/**
 * Converts an 8-bit unsigned integer (`u8`) to little-endian byte format.
 */
export declare const toBytesU8: (value: BigNumberish) => Uint8Array;
/**
 * Converts an 16-bit unsigned integer (`u16`) to little-endian byte format.
 */
export declare const toBytesU16: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 32-bit signed integer (`i32`) to little-endian byte format.
 */
export declare const toBytesI32: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 32-bit unsigned integer (`u32`) to little-endian byte format.
 */
export declare const toBytesU32: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 64-bit unsigned integer (`u64`) to little-endian byte format.
 */
export declare const toBytesU64: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 64-bit signed integer (`i64`) to little-endian byte format.
 */
export declare const toBytesI64: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 128-bit unsigned integer (`u128`) to little-endian byte format.
 */
export declare const toBytesU128: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 256-bit unsigned integer (`u256`) to little-endian byte format.
 */
export declare const toBytesU256: (value: BigNumberish) => Uint8Array;
/**
 * Converts a 512-bit unsigned integer (`u512`) to little-endian byte format.
 */
export declare const toBytesU512: (value: BigNumberish) => Uint8Array;
/**
 * Serializes a string into a byte array.
 * @param str - The string to be converted.
 * @returns A `Uint8Array` representation of the string, including its length as a `u32` prefix.
 */
export declare function toBytesString(str: string): Uint8Array;
/**
 * Deserializes a byte array into a string.
 * @param byte - `Uint8Array` representing the serialized string.
 * @returns The deserialized string.
 */
export declare const fromBytesString: (byte: Uint8Array) => string;
/**
 * Serializes an array of `u8` values, equivalent to `Vec<u8>` in Rust.
 * @param arr - A `Uint8Array` buffer of `u8` integers.
 * @returns A serialized `Uint8Array` with the array's length as a `u32` prefix.
 */
export declare function toBytesArrayU8(arr: Uint8Array): Uint8Array;
/**
 * Computes the Blake2b hash of a byte array.
 * @param x - A `Uint8Array` byte array to compute the Blake2b hash on.
 * @returns A `Uint8Array` buffer containing the 32-byte Blake2b hash.
 */
export declare function byteHash(x: Uint8Array): Uint8Array;
/**
 * Parses a 16-bit unsigned integer (`u16`) from a little-endian byte array.
 * @param bytes - The byte array containing the `u16` value.
 * @returns The parsed 16-bit unsigned integer.
 */
export declare function parseU16(bytes: Uint8Array): number;
/**
 * Parses a 32-bit unsigned integer (`u32`) from a little-endian byte array.
 * @param bytes - The byte array containing the `u32` value.
 * @returns The parsed 32-bit unsigned integer.
 */
export declare function parseU32(bytes: Uint8Array): number;
/**
 * Parses a 64-bit unsigned integer (`u64`) from a little-endian byte array.
 * @param bytes - A `Uint8Array` containing the serialized 64-bit unsigned integer.
 * @returns A `BigNumber` representing the parsed value.
 */
export declare const fromBytesU64: (bytes: Uint8Array) => BigNumber;
/**
 * Writes a 32-bit signed integer to a `DataView` at the specified offset.
 *
 * The integer is written in little-endian format.
 *
 * @param view - The `DataView` instance where the integer will be written.
 * @param offset - The offset (in bytes) at which to start writing.
 * @param value - The 32-bit signed integer to write.
 * @returns The new offset after writing the integer.
 *
 * @example
 * ```typescript
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * let offset = 0;
 * offset = writeInteger(view, offset, 42);
 * console.log(new Int32Array(buffer)); // Logs: Int32Array [42, 0]
 * ```
 */
export declare const writeInteger: (view: DataView, offset: number, value: number) => number;
/**
 * Writes a 16-bit unsigned integer to a `DataView` at the specified offset.
 *
 * The integer is written in little-endian format.
 *
 * @param view - The `DataView` instance where the integer will be written.
 * @param offset - The offset (in bytes) at which to start writing.
 * @param value - The 16-bit unsigned integer to write.
 * @returns The new offset after writing the integer.
 *
 * @example
 * ```typescript
 * const buffer = new ArrayBuffer(4);
 * const view = new DataView(buffer);
 * let offset = 0;
 * offset = writeUShort(view, offset, 65535);
 * console.log(new Uint16Array(buffer)); // Logs: Uint16Array [65535, 0]
 * ```
 */
export declare const writeUShort: (view: DataView, offset: number, value: number) => number;
/**
 * Writes a sequence of bytes (as a `Uint8Array`) to a `DataView` at the specified offset.
 *
 * Each byte in the array is written in sequence, starting from the given offset.
 *
 * @param view - The `DataView` instance where the bytes will be written.
 * @param offset - The offset (in bytes) at which to start writing.
 * @param value - The `Uint8Array` containing the bytes to write.
 * @returns The new offset after writing the bytes.
 *
 * @example
 * ```typescript
 * const buffer = new ArrayBuffer(10);
 * const view = new DataView(buffer);
 * let offset = 0;
 * offset = writeBytes(view, offset, new Uint8Array([1, 2, 3, 4]));
 * console.log(new Uint8Array(buffer)); // Logs: Uint8Array [1, 2, 3, 4, 0, 0, 0, 0, 0, 0]
 * ```
 */
export declare const writeBytes: (view: DataView, offset: number, value: Uint8Array) => number;
/**
 * Expands the size of an existing ArrayBuffer to accommodate additional data if necessary.
 *
 * This function creates a new `ArrayBuffer` with a size that is at least as large as
 * the required size. The buffer's size grows exponentially (doubles) to minimize
 * reallocations and improve performance for large data handling.
 * The existing data from the old buffer is copied into the new buffer.
 *
 * @param currentBuffer - The current `ArrayBuffer` that needs to be expanded.
 * @param requiredSize - The minimum size required for the buffer.
 * @returns A new `ArrayBuffer` with enough space to accommodate the required size.
 *
 * @example
 * ```typescript
 * let buffer = new ArrayBuffer(1024);
 * const updatedBuffer = expandBuffer(buffer, 2048);
 * console.log(updatedBuffer.byteLength); // 2048 or larger (depending on initial size and required size)
 * ```
 */
export declare const expandBuffer: (currentBuffer: ArrayBuffer, requiredSize: number) => ArrayBuffer;
