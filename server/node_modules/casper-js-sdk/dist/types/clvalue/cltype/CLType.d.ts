/**
 * The byte size of a 32-bit integer.
 */
export declare const Int32ByteSize = 4;
/**
 * The byte size of a 64-bit integer.
 */
export declare const Int64ByteSize = 8;
/**
 * Enumeration of type identifiers used within the Casper type system.
 * Each TypeID uniquely identifies a specific data type.
 */
export declare enum TypeID {
    Bool = 0,
    I32 = 1,
    I64 = 2,
    U8 = 3,
    U32 = 4,
    U64 = 5,
    U128 = 6,
    U256 = 7,
    U512 = 8,
    Unit = 9,
    String = 10,
    Key = 11,
    URef = 12,
    Option = 13,
    List = 14,
    ByteArray = 15,
    Result = 16,
    Map = 17,
    Tuple1 = 18,
    Tuple2 = 19,
    Tuple3 = 20,
    Any = 21,
    PublicKey = 22
}
/**
 * Type alias for the string representation of a type name.
 */
export type TypeName = string;
/**
 * Object containing string constants for each type name in the Casper type system.
 */
export declare const TypeName: {
    Bool: string;
    I32: string;
    I64: string;
    U8: string;
    U32: string;
    U64: string;
    U128: string;
    U256: string;
    U512: string;
    Unit: string;
    String: string;
    Key: string;
    URef: string;
    Option: string;
    List: string;
    ByteArray: string;
    Result: string;
    Map: string;
    Tuple1: string;
    Tuple2: string;
    Tuple3: string;
    Any: string;
    PublicKey: string;
};
/**
 * Interface representing a CLType in the Casper type system.
 */
export interface CLType {
    /**
     * Converts the CLType instance to its byte representation.
     * @returns A Uint8Array representing the CLType.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLType.
     * @returns A string representation of the CLType.
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLType.
     * @returns The TypeID associated with the CLType.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLType.
     * @returns The TypeName associated with the CLType.
     */
    getName(): TypeName;
    /**
     * Converts the CLType instance to a JSON representation.
     * @returns A JSON-compatible representation of the CLType.
     */
    toJSON(): any;
}
/**
 * Represents a simple data type in the Casper type system.
 */
export declare class SimpleType implements CLType {
    private readonly typeID;
    private readonly typeName;
    /**
     * Constructs a new instance of the SimpleType class.
     * @param typeID - The TypeID for the simple type.
     * @param name - The TypeName for the simple type.
     */
    constructor(typeID: TypeID, name: TypeName);
    /**
     * Converts the SimpleType to its byte representation.
     * @returns A Uint8Array containing a single byte representing the type ID.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the SimpleType.
     * @returns The name of the SimpleType.
     */
    toString(): string;
    /**
     * Retrieves the type ID of the SimpleType.
     * @returns The TypeID for the SimpleType.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the SimpleType.
     * @returns The TypeName for the SimpleType.
     */
    getName(): TypeName;
    /**
     * Converts the SimpleType instance to a JSON representation.
     * @returns The name of the SimpleType as a string.
     */
    toJSON(): string;
}
/**
 * Represents a Boolean type in the Casper type system.
 */
export declare const CLTypeBool: SimpleType;
/**
 * Represents a 32-bit signed integer type in the Casper type system.
 */
export declare const CLTypeInt32: SimpleType;
/**
 * Represents a 64-bit signed integer type in the Casper type system.
 */
export declare const CLTypeInt64: SimpleType;
/**
 * Represents an 8-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt8: SimpleType;
/**
 * Represents a 32-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt32: SimpleType;
/**
 * Represents a 64-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt64: SimpleType;
/**
 * Represents a 128-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt128: SimpleType;
/**
 * Represents a 256-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt256: SimpleType;
/**
 * Represents a 512-bit unsigned integer type in the Casper type system.
 */
export declare const CLTypeUInt512: SimpleType;
/**
 * Represents a Unit type (similar to void) in the Casper type system.
 */
export declare const CLTypeUnit: SimpleType;
/**
 * Represents a String type in the Casper type system.
 */
export declare const CLTypeString: SimpleType;
/**
 * Represents a Key type in the Casper type system.
 */
export declare const CLTypeKey: SimpleType;
/**
 * Represents a URef (Unforgeable Reference) type in the Casper type system.
 */
export declare const CLTypeUref: SimpleType;
/**
 * Represents an Any type in the Casper type system.
 */
export declare const CLTypeAny: SimpleType;
/**
 * Represents a PublicKey type in the Casper type system.
 */
export declare const CLTypePublicKey: SimpleType;
