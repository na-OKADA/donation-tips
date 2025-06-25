import { TypeID, TypeName, CLType } from './CLType';
/**
 * Represents a dynamic CLType in the Casper type system.
 * This class allows for runtime determination of types, enabling dynamic manipulation of CLTypes.
 */
export declare class CLTypeDynamic implements CLType {
    typeID: TypeID;
    inner: CLType;
    /**
     * Initializes a new instance of the CLTypeDynamic class.
     * @param typeID - The TypeID representing the dynamic type.
     * @param inner - The inner CLType that this dynamic type represents.
     */
    constructor(typeID: TypeID, inner: CLType);
    /**
     * Converts the CLTypeDynamic instance to its byte representation.
     * @returns A Uint8Array representing the bytes of the inner CLType.
     */
    toBytes(): Uint8Array;
    /**
     * Provides a string representation of the CLTypeDynamic.
     * @returns A string representing the inner CLType.
     */
    toString(): string;
    /**
     * Retrieves the type ID of the CLTypeDynamic.
     * @returns The TypeID associated with this dynamic type.
     */
    getTypeID(): TypeID;
    /**
     * Retrieves the name of the CLTypeDynamic.
     * @returns The TypeName of the inner CLType.
     */
    getName(): TypeName;
    /**
     * Converts the CLTypeDynamic instance to a JSON-compatible representation.
     * @returns A JSON representation of the inner CLType.
     */
    toJSON(): any;
}
