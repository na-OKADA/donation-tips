import { BigNumberish } from '@ethersproject/bignumber';
import { CLType } from './cltype';
import { URef, Key } from '../key';
import { PublicKey } from '../keypair';
import { CLValueUInt8, CLValueInt64, CLValueInt32, CLValueUInt32, CLValueUInt64, CLValueUInt128, CLValueUInt256, CLValueUInt512 } from './Numeric';
import { CLValueBool } from './Bool';
import { CLValueUnit } from './Unit';
import { CLValueOption } from './Option';
import { CLValueList } from './List';
import { CLValueByteArray } from './ByteArray';
import { CLValueResult } from './Result';
import { CLValueString } from './String';
import { CLValueMap } from './Map';
import { CLValueTuple1 } from './Tuple1';
import { CLValueTuple2 } from './Tuple2';
import { CLValueTuple3 } from './Tuple3';
import { CLValueAny } from './Any';
export interface IResultWithBytes<T> {
    result: T;
    bytes: Uint8Array;
    originalBytes?: Uint8Array;
}
/**
 * Represents a CLValue in the Casper type system.
 * CLValue is a container for various types of values used in smart contracts.
 */
export declare class CLValue {
    type: CLType;
    bool?: CLValueBool;
    i32?: CLValueInt32;
    i64?: CLValueInt64;
    ui8?: CLValueUInt8;
    ui32?: CLValueUInt32;
    ui64?: CLValueUInt64;
    ui128?: CLValueUInt128;
    ui256?: CLValueUInt256;
    ui512?: CLValueUInt512;
    unit?: CLValueUnit;
    uref?: URef;
    key?: Key;
    option?: CLValueOption;
    list?: CLValueList;
    byteArray?: CLValueByteArray;
    result?: CLValueResult;
    stringVal?: CLValueString;
    map?: CLValueMap;
    tuple1?: CLValueTuple1;
    tuple2?: CLValueTuple2;
    tuple3?: CLValueTuple3;
    any?: CLValueAny;
    publicKey?: PublicKey;
    /**
     * Initializes a new CLValue instance.
     * @param type - The CLType of the value.
     */
    constructor(type: CLType);
    /**
     * Gets the actual type of the CLValue, resolving dynamic types if necessary.
     * @returns The CLType of the value.
     */
    getType(): CLType;
    /**
     * Returns a string representation of the CLValue.
     * @returns A string representation of the value.
     */
    toString(): string;
    toJSON(): any;
    /**
     * Converts the CLValue to its byte representation.
     * @returns A Uint8Array representing the bytes of the value.
     */
    bytes(): Uint8Array;
    /**
     * Retrieves the value associated with the CLValue's type.
     * @returns An IValue representing the actual value stored in the CLValue.
     * @throws Error if the type is not implemented.
     */
    private getValueByType;
    /**
     * Retrieves the Key value from the CLValue.
     * @returns The Key stored in the CLValue.
     * @throws Error if the Key property is empty.
     */
    getKey(): Key;
    /**
     * Creates a new CLValue instance containing a Key value.
     * @param data - The Key to be stored in the CLValue.
     * @returns A new CLValue instance encapsulating the Key.
     */
    static newCLKey(data: Key): CLValue;
    /**
     * Creates a new CLValue instance containing a URef value.
     * @param data - The URef to be stored in the CLValue.
     * @returns A new CLValue instance encapsulating the URef.
     */
    static newCLUref(data: URef): CLValue;
    /**
     * Creates a new CLValue instance containing a PublicKey value.
     * @param data - The PublicKey to be stored in the CLValue.
     * @returns A new CLValue instance encapsulating the PublicKey.
     */
    static newCLPublicKey(data: PublicKey): CLValue;
    /**
     * Creates a new CLValue instance containing an 'Any' value.
     * @param data - The Uint8Array to be stored within the CLValue.
     * @returns A new CLValue instance encapsulating the 'Any' value.
     */
    static newCLAny(data: Uint8Array): CLValue;
    /**
     * Creates a new CLValue instance containing a boolean value.
     * @param val - The boolean value to be stored in the CLValue.
     * @returns A new CLValue instance encapsulating the boolean value.
     */
    static newCLValueBool(val: boolean): CLValue;
    /**
     * Creates a new CLValue instance containing a ByteArray value.
     * @param val - The Uint8Array to be stored within the CLValue.
     * @returns A new CLValue instance encapsulating the ByteArray.
     */
    static newCLByteArray(val: Uint8Array): CLValue;
    /**
     * Creates a new CLValue instance with a List value.
     * @param elementType - The CLType for the elements of the list.
     * @param elements - Optional array of CLValues to initialize the list with.
     * @returns A new CLValue instance containing CLTypeList and a CLValueList.
     */
    static newCLList(elementType: CLType, elements?: CLValue[]): CLValue;
    /**
     * Creates a new CLValue instance with a Map value.
     * @param keyType - The CLType for the map keys.
     * @param valType - The CLType for the map values.
     * @returns A new CLValue instance with CLTypeMap and a CLValueMap.
     */
    static newCLMap(keyType: CLType, valType: CLType): CLValue;
    /**
     * Creates a new `CLValue` instance that represents an optional value.
     *
     * This method allows you to wrap a given `CLValue` as an optional type (`Option`),
     * which can either contain a value or be `null`. This is useful for scenarios where
     * a value may or may not be present.
     *
     * If `inner` is `null`, the method will use the provided `clType` as the type of the option.
     * If `clType` is not provided, it defaults to `CLTypeAny`. If `inner` is not `null`,
     * its type is used instead of `clType`.
     *
     * @param inner - The `CLValue` to be wrapped in the option. Pass `null` if no value is present.
     * @param clType - (Optional) The `CLType` representing the type of the value contained in the option.
     *                 This is required if `inner` is `null` to properly define the option type.
     *
     * @returns A new `CLValue` instance containing:
     * - A `CLTypeOption` representing the type of the optional value.
     * - A `CLValueOption` that holds the inner value or `null`.
     *
     * @example
     * ```typescript
     * // Example of an option containing a value
     * const innerValue = CLValue.fromU32(42);
     * const optionValue = CLValue.newCLOption(innerValue);
     *
     * // Example of an empty option with an explicitly defined type
     * const emptyOptionValue = CLValue.newCLOption(null, CLType.U32);
     *
     * // Example of an empty option with no type provided (defaults to CLTypeAny)
     * const emptyOptionValueDefault = CLValue.newCLOption(null);
     * ```
     */
    static newCLOption(inner: CLValue | null, clType?: CLType): CLValue;
    /**
     * Creates a new CLValue instance with a Result value.
     * @param innerOk - The CLType for the success case.
     * @param innerErr - The CLType for the error case.
     * @param value - The CLValue to be contained in the Result.
     * @param isSuccess - A boolean indicating whether the Result is a success (true) or an error (false).
     * @returns A new CLValue instance containing CLTypeResult and a CLValueResult.
     */
    static newCLResult(innerOk: CLType, innerErr: CLType, value: CLValue, isSuccess: boolean): CLValue;
    /**
     * Creates a new CLValue instance with a string value.
     * @param val - The string value to be represented.
     * @returns A new CLValue instance containing CLTypeString and a CLValueString.
     */
    static newCLString(val: string): CLValue;
    /**
     * Creates a new CLValue instance with a Tuple1 value.
     * @param val - The CLValue to be contained in the tuple.
     * @returns A new CLValue instance containing CLTypeTuple1 and a CLValueTuple1.
     */
    static newCLTuple1(val: CLValue): CLValue;
    /**
     * Creates a new CLValue instance with a Tuple2 value.
     * @param val1 - The first CLValue in the tuple.
     * @param val2 - The second CLValue in the tuple.
     * @returns A new CLValue instance containing CLTypeTuple2 and a CLValueTuple2.
     */
    static newCLTuple2(val1: CLValue, val2: CLValue): CLValue;
    /**
     * Creates a new CLValue instance with a Tuple3 value.
     * @param val1 - The first CLValue in the tuple.
     * @param val2 - The second CLValue in the tuple.
     * @param val3 - The third CLValue in the tuple.
     * @returns A new CLValue instance containing CLTypeTuple3 and a CLValueTuple3.
     */
    static newCLTuple3(val1: CLValue, val2: CLValue, val3: CLValue): CLValue;
    /**
     * Creates a new CLValue instance with a Unit value.
     *
     * @returns A new CLValue instance with CLTypeUnit and a CLValueUnit.
     */
    static newCLUnit(): CLValue;
    /**
     * Creates a new CLValue instance with an Int32 value.
     * @param val - The 32-bit integer to be encapsulated in a CLValue.
     * @returns A new CLValue instance containing CLTypeInt32 and a CLValueInt32.
     */
    static newCLInt32(val: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with an Int64 value.
     * @param val - The value to be stored in the Int64. Accepts any BigNumberish type.
     * @returns A new CLValue instance containing CLTypeInt64 and a CLValueInt64.
     */
    static newCLInt64(val: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt8 value.
     * @param value - The value to initialize the UInt8 with. Must be an integer between 0 and 255.
     * @returns A new CLValue instance containing CLTypeUInt8 and a CLValueUInt8.
     */
    static newCLUint8(value: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt32 value.
     * @param value - The value to initialize the UInt32 with.
     * @returns A new CLValue instance containing CLTypeUInt32 and a CLValueUInt32.
     */
    static newCLUInt32(value: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt64 value.
     * @param val - The value to initialize the UInt64 with. Can be any BigNumberish type.
     * @returns A new CLValue instance containing CLTypeUInt64 and a CLValueUInt64.
     */
    static newCLUint64(val: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt128 value.
     * @param value - The value to initialize the UInt128 with.
     * @returns A new CLValue instance containing CLTypeUInt128 and a CLValueUInt128.
     */
    static newCLUInt128(value: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt256 value.
     * @param value - The value to initialize the UInt256 with.
     * @returns A new CLValue instance containing CLTypeUInt256 and a CLValueUInt256.
     */
    static newCLUInt256(value: BigNumberish): CLValue;
    /**
     * Creates a new CLValue instance with a UInt512 value.
     * @param value - The value to initialize the UInt512 with.
     * @returns A new CLValue instance containing CLTypeUInt512 and a CLValueUInt512.
     */
    static newCLUInt512(value: BigNumberish): CLValue;
}
