import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
/**
 * A utility class for various data conversions used in the Casper ecosystem.
 * Provides methods to convert between different encodings (Base64, Base16) and to perform conversions between CSPR and motes.
 */
export declare class Conversions {
    /**
     * Encodes a `Uint8Array` into a string using Base-64 encoding.
     *
     * @param bytes - The `Uint8Array` to be encoded.
     * @returns A Base-64 encoded string representation of the input bytes.
     *
     * @example
     * const bytes = new Uint8Array([72, 101, 108, 108, 111]);
     * const base64 = Conversions.encodeBase64(bytes);
     * console.log(base64); // Outputs: "SGVsbG8="
     */
    static encodeBase64(bytes: Uint8Array): string;
    /**
     * Decodes a Base-64 encoded string and returns a `Uint8Array` of bytes.
     *
     * @param base64String - The Base-64 encoded string to be decoded.
     * @returns A `Uint8Array` containing the decoded bytes.
     *
     * @example
     * const base64 = "SGVsbG8=";
     * const bytes = Conversions.decodeBase64(base64);
     * console.log(bytes); // Outputs: Uint8Array(5) [72, 101, 108, 108, 111]
     */
    static decodeBase64(base64String: string): Uint8Array;
    /**
     * Converts a Base-64 encoded string to a Base-16 (hexadecimal) encoded string.
     *
     * @param base64 - The Base-64 encoded string to be converted.
     * @returns A Base-16 encoded string.
     *
     * @example
     * const base64 = "SGVsbG8=";
     * const base16 = Conversions.base64to16(base64);
     * console.log(base16); // Outputs: "48656c6c6f"
     */
    static base64to16(base64: string): string;
    /**
     * Encodes a `Uint8Array` into a string using Base-16 (hexadecimal) encoding.
     *
     * @param bytes - The `Uint8Array` to be encoded.
     * @returns A Base-16 encoded string representation of the input bytes.
     *
     * @example
     * const bytes = new Uint8Array([72, 101, 108, 108, 111]);
     * const base16 = Conversions.encodeBase16(bytes);
     * console.log(base16); // Outputs: "48656c6c6f"
     */
    static encodeBase16(bytes: Uint8Array): string;
    /**
     * Decodes a Base-16 (hexadecimal) encoded string and returns a `Uint8Array` of bytes.
     *
     * @param base16String - The Base-16 encoded string to be decoded.
     * @returns A `Uint8Array` containing the decoded bytes.
     *
     * @example
     * const base16 = "48656c6c6f";
     * const bytes = Conversions.decodeBase16(base16);
     * console.log(bytes); // Outputs: Uint8Array(5) [72, 101, 108, 108, 111]
     */
    static decodeBase16(base16String: string): Uint8Array;
    /**
     * Converts a CSPR amount to its mote equivalent.
     *
     * @param cspr - A `string` amount of CSPR to convert to motes.
     * @returns A `BigNumber` containing the equivalent amount in motes.
     *
     * @remarks
     * 1 CSPR = 10^9 motes
     *
     * @example
     * const cspr = 1;
     * const motes = Conversions.csprToMotes(cspr);
     * console.log(motes.toString()); // Outputs: "1000000000"
     */
    static csprToMotes(cspr: string | number): BigNumber;
    /**
     * Converts an amount in motes to its CSPR equivalent.
     *
     * @param motes - A `BigNumberish` amount of motes to convert to CSPR.
     * @returns A `BigNumber` containing the equivalent amount in CSPR.
     *
     * @remarks
     * This function will round to the nearest whole integer.
     * 1 mote = 10^-9 CSPR
     *
     * @example
     * const motes = BigNumber.from('1000000000');
     * const cspr = Conversions.motesToCSPR(motes);
     * console.log(cspr.toString()); // Outputs: "1"
     */
    static motesToCSPR(motes: BigNumberish): string;
}
