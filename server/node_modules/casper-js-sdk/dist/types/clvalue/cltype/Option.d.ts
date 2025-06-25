import { TypeID, TypeName, CLType } from './CLType';
/**
 * Represents an Option type in the Casper type system.
 * This class implements the CLType interface, allowing for optional values with specified inner types.
 */
export declare class CLTypeOption implements CLType {
    /**
     * The inner CLType that this Option may contain.
     */
    inner: CLType;
    /**
     * Initializes a new instance of the CLTypeOption class.
     * @param inner - The CLType of the value that this Option can contain.
     */
    constructor(inner: CLType);
    /**
     * Converts the CLTypeOption instance to its byte representation.
     * This includes the type ID for Option followed by the byte representation of the inner type.
     * @returns A Uint8Array representing the CLTypeOption.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeOption.
     * @returns A string in the format "(Option: innerType)".
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeOption.
     * @returns The TypeID associated with Option.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeOption.
     * @returns The TypeName for Option.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeOption instance to a JSON-compatible representation.
     * The JSON object includes a single key-value pair, where the key is "Option" and the value is the JSON representation of the inner type.
     * @returns A JSON object representing the option type and its inner type.
     */
    toJSON(): {
        [key: string]: CLType;
    };
    /**
     * Creates a CLTypeOption instance from a JSON representation.
     * Parses JSON input to determine the inner type of the option.
     * @param source - The JSON representation of the CLTypeOption.
     * @returns A new CLTypeOption instance with the parsed inner type.
     */
    static fromJSON(source: any): CLTypeOption;
}
