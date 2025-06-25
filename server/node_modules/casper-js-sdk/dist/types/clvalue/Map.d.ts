import { CLTypeMap } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
import { CLValueTuple2 } from './Tuple2';
/**
 * Represents a Map value in the Casper type system.
 * This class manages key-value pairs, providing efficient access and manipulation.
 */
export declare class CLValueMap {
    /**
     * The type of the map.
     */
    private type;
    /**
     * The data stored in the map as an array of CLValueTuple2.
     */
    private data;
    /**
     * An indexed representation of the map data for faster lookups.
     */
    private indexedData;
    /**
     * Initializes a new instance of the CLValueMap class.
     * @param mapType - The CLTypeMap representing the type of the map.
     * @param data - Optional array of CLValueTuple2 representing the map entries.
     * @param indexedData - Optional Map of string keys to CLValues for faster lookups.
     */
    constructor(mapType: CLTypeMap, data?: CLValueTuple2[], indexedData?: Map<string, CLValue>);
    /**
     * Converts the map to its byte representation.
     * @returns A Uint8Array representing the bytes of the map, including its size and key-value pairs.
     */
    bytes(): Uint8Array;
    /**
     * Returns the map as a plain JavaScript object.
     * @returns A Record with string keys and CLValue values.
     */
    getMap(): Record<string, CLValue>;
    /**
     * Returns the map data as an array of CLValueTuple2.
     * @returns An array of CLValueTuple2 representing the map entries.
     */
    getData(): CLValueTuple2[];
    /**
     * Provides a string representation of the map.
     * @returns A string representation of the map entries.
     */
    toString(): string;
    /**
     * Converts the instance to a JSON-compatible map.
     *
     * @returns {any} A Map object representing the instance's key-value pairs.
     *
     * This method iterates over the `data` property, extracting key-value
     * pairs from each tuple and storing them in a new Map.
     */
    toJSON(): any;
    /**
     * Finds a value in the map by key.
     * @param key - The key to search for.
     * @returns A tuple containing the found value (or undefined) and a boolean indicating if the key was found.
     */
    find(key: string): [CLValue | undefined, boolean];
    /**
     * Gets a value from the map by key.
     * @param key - The key to search for.
     * @returns The found CLValue or undefined if the key doesn't exist.
     */
    get(key: string): CLValue | undefined;
    /**
     * Finds any value in the map that matches one of the provided keys.
     * @param keys - An array of keys to search for.
     * @returns A tuple containing the first found value (or undefined) and a boolean indicating if any key was found.
     */
    findAny(keys: string[]): [CLValue | undefined, boolean];
    /**
     * Returns the number of entries in the map.
     * @returns The number of entries in the map.
     */
    length(): number;
    /**
     * Appends a new key-value pair to the map.
     * @param key - The key CLValue to append.
     * @param val - The value CLValue to append.
     * @returns null if successful, or an Error if the types are invalid or the key already exists.
     */
    append(key: CLValue, val: CLValue): Error | null;
    /**
     * Creates a CLValueMap instance from a Uint8Array.
     * Parses the byte array to interpret the size of the map and each key-value pair.
     * @param bytes - The Uint8Array containing the byte representation of the Map value.
     * @param mapType - The CLTypeMap representing the type of the map.
     * @returns An object containing the new CLValueMap instance and any remaining bytes.
     */
    static fromBytes(bytes: Uint8Array, mapType: CLTypeMap): IResultWithBytes<CLValueMap>;
}
