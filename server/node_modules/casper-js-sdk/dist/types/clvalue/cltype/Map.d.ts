import { TypeID, TypeName, CLType } from './CLType';
/**
 * Error thrown when there's an issue parsing the Map type from JSON.
 */
export declare const MapJsonParsingError: Error;
/**
 * Represents a Map type in the Casper type system.
 * This class implements the CLType interface, allowing the use of key-value pairs with specified types.
 */
export declare class CLTypeMap implements CLType {
    /**
     * The CLType of the map's keys.
     */
    key: CLType;
    /**
     * The CLType of the map's values.
     */
    val: CLType;
    /**
     * Initializes a new instance of the CLTypeMap class.
     * @param keyType - The CLType of the map's keys.
     * @param valType - The CLType of the map's values.
     */
    constructor(keyType: CLType, valType: CLType);
    /**
     * Converts the CLTypeMap instance to its byte representation.
     * This includes the type ID for Map followed by the byte representations of the key and value types.
     * @returns A Uint8Array representing the CLTypeMap.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeMap.
     * @returns A string in the format "Map (keyType: valueType)".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeMap.
     * @returns The TypeID associated with Map.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeMap.
     * @returns The TypeName for Map.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeMap instance to a JSON-compatible representation.
     * The JSON object includes a "Map" key containing the JSON representations of the key and value types.
     * @returns A JSON object representing the map type and its key and value types.
     */
    toJSON(): {
        Map: {
            key: CLType;
            value: CLType;
        };
    };
    /**
     * Creates a CLTypeMap instance from a JSON representation.
     * Parses JSON input to determine the key and value types of the map.
     * @param source - The JSON representation of the CLTypeMap.
     * @returns A new CLTypeMap instance with parsed key and value types.
     * @throws {MapJsonParsingError} If the JSON structure is invalid.
     */
    static fromJSON(source: any): CLTypeMap;
}
