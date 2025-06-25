import { Args } from './Args';
import { CLValueUInt512 } from './clvalue';
import { IDisabledVersion } from './ContractPackage';
/**
 * Serializes a `Uint8Array` into a hexadecimal string.
 *
 * @param bytes The `Uint8Array` to be serialized.
 * @returns A base-16 encoded string of the provided byte array.
 */
export declare const byteArrayJsonSerializer: (bytes: Uint8Array) => string;
/**
 * Serializes a `Uint8Array` into a hexadecimal string, but only if the value is not `undefined`.
 *
 * @param bytes The `Uint8Array` to be serialized (or `undefined`).
 * @returns A base-16 encoded string of the provided byte array, or `undefined` if input is `undefined`.
 *
 * @note It's suggested to swap the names of this function with `byteArrayJsonSerializer` for better clarity. This function handles `undefined` inputs, while `byteArrayJsonSerializer` should handle only `Uint8Array` directly.
 */
export declare const undefinedSafeByteArrayJsonSerializer: (bytes: Uint8Array | undefined) => string | undefined;
/**
 * Deserializes a hexadecimal string into a `Uint8Array`.
 *
 * @param str The base-16 encoded string to be deserialized.
 * @returns The decoded `Uint8Array` corresponding to the hexadecimal string.
 */
export declare const byteArrayJsonDeserializer: (str: string) => Uint8Array;
/**
 * Deserializes a hexadecimal string into a `Uint8Array`, but only if the value is not `undefined`.
 *
 * @param str The base-16 encoded string to be deserialized (or `undefined`).
 * @returns The decoded `Uint8Array` corresponding to the hexadecimal string, or `undefined` if input is `undefined`.
 */
export declare const undefinedSafeByteArrayJsonDeserializer: (str: string | undefined) => Uint8Array | undefined;
/**
 * Returns a human-readable time duration for a given time-to-live (TTL) in milliseconds.
 *
 * @param ttl The TTL in milliseconds.
 * @returns A human-readable string representation of the TTL, such as "1d 2h 3m 4s".
 */
export declare const humanizerTTL: (ttl: number) => string;
/**
 * Converts a human-readable time duration (e.g., "1d 2h 3m 4s") back to a time-to-live (TTL) in milliseconds.
 *
 * @param ttl The human-readable string representing the time duration.
 * @returns The TTL in milliseconds.
 * @throws Error if an unsupported TTL unit is encountered.
 */
export declare const dehumanizerTTL: (ttl: string) => number;
/**
 * Deserializes an array of runtime arguments to a `RuntimeArgs` object.
 *
 * @param arr The array of serialized runtime arguments or a Named wrapper.
 * @returns A `RuntimeArgs` object containing the deserialized arguments.
 * @throws Error if the input format is invalid.
 */
export declare const deserializeArgs: (arr: any) => Args | undefined;
/**
 * Serializes a `RuntimeArgs` object to a byte array or an object representation.
 *
 * This function converts the `RuntimeArgs` (or `Args`) object into a serialized format.
 * If `asNamed` is set to `true`, the serialized arguments are wrapped in a `Named` property
 * for more structured output. Otherwise, the plain array of serialized arguments is returned.
 *
 * @param ra - The `Args` object to be serialized. It contains the runtime arguments.
 * @param asNamed - A boolean flag indicating whether to wrap the serialized output in a `Named` property. Defaults to `false`.
 * @returns A serialized representation of the runtime arguments.
 * If `asNamed` is `true`, the output is an object with a `Named` property. Otherwise, it is a plain array.
 *
 */
export declare const serializeArgs: (ra: Args, asNamed?: boolean) => unknown;
/**
 * Deserializes an array of rewards into a Map.
 * @param arr - The array to be deserialized, where each element is a tuple containing a key and an array of rewards.
 * @returns A Map where each key corresponds to an array of CLValueUInt512 rewards.
 * @throws Will throw an error if duplicate keys are detected.
 */
export declare const deserializeRewards: (arr: any) => Map<any, any>;
/**
 * Serializes a Map of rewards into an array format suitable for JSON storage.
 * @param map - A Map where each key corresponds to an array of CLValueUInt512 rewards.
 * @returns An array where each element is a tuple containing a key and an array of rewards in JSON format.
 */
export declare const serializeRewards: (map: Map<string, CLValueUInt512[]>) => (string | string[])[][];
/**
 * Parses disabled versions into a standardized array of tuples.
 *
 * @param disabledVersions - The input array, which can be:
 *   - An array of tuples (`[number, number][]`), or
 *   - An array of objects with `protocol_version_major` and `contract_version` properties.
 * @returns An array of tuples (`[number, number][]`) representing `[protocol_version_major, contract_version]`.
 */
export declare const deserializeDisabledVersions: (disabledVersions: [
    number,
    number
][] | IDisabledVersion[]) => [
    number,
    number
][];
