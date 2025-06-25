import { CLValue } from './clvalue';
/**
 * Represents a named argument with a name and associated `CLValue`, which can be serialized to bytes.
 */
export declare class NamedArg {
    name: string;
    value: CLValue;
    /**
     * Creates an instance of NamedArg.
     * @param name - The name of the argument.
     * @param value - The `CLValue` associated with this argument.
     */
    constructor(name: string, value: CLValue);
    /**
     * Converts the named argument to a byte array representation.
     * @returns A `Uint8Array` containing the serialized argument name and value.
     */
    toBytes(): Uint8Array;
    /**
     * Converts a `NamedArg` object to a `Uint8Array` for serialization.
     *
     * The method encodes the name of the argument as a UTF-8 string, followed by the serialized
     * bytes of its value. The resulting `Uint8Array` can be used for further processing, such as
     * storage or transmission.
     *
     * @param source - The `NamedArg` object to serialize. It contains a name and a value.
     * @returns A `Uint8Array` representing the serialized `NamedArg`.
     *
     * @example
     * ```typescript
     * const namedArg = new NamedArg("arg1", CLValue.u32(42));
     * const serializedBytes = YourClass.toBytesWithNamedArg(namedArg);
     * console.log(serializedBytes); // Logs the serialized bytes.
     * ```
     */
    static toBytesWithNamedArg(source: NamedArg): Uint8Array;
    /**
     * Creates a `NamedArg` instance from a byte array.
     * @param bytes - The byte array to parse.
     * @returns A `NamedArg` instance.
     */
    static fromBytes(bytes: Uint8Array): NamedArg;
}
/**
 * Represents a set of named arguments (`NamedArg`) for a contract call.
 * Provides methods to serialize, deserialize, and manipulate argument entries.
 */
export declare class Args {
    /**
     * The map of argument names to `CLValue` values.
     */
    args: Map<string, CLValue>;
    getByName(argName: string): CLValue | undefined;
    /**
     * Creates an instance of `Args` from a map of arguments.
     * @param args - A map containing argument names as keys and `CLValue` instances as values.
     */
    constructor(args: Map<string, CLValue>);
    /**
     * Creates an `Args` instance from an object.
     * @param args - An object containing argument names as keys and `CLValue` instances as values.
     * @returns A new `Args` instance.
     */
    static fromMap(args: Record<string, CLValue>): Args;
    /**
     * Creates an `Args` instance from an array of `NamedArg` instances.
     * @param namedArgs - An array of `NamedArg` instances.
     * @returns A new `Args` instance.
     */
    static fromNamedArgs(namedArgs: NamedArg[]): Args;
    /**
     * Inserts a new argument into the map.
     * @param key - The argument name.
     * @param value - The `CLValue` for the argument.
     */
    insert(key: string, value: CLValue): void;
    /**
     * Converts the arguments to a byte array.
     * The format includes the number of arguments followed by each argument in bytes.
     * @returns A `Uint8Array` containing the serialized arguments.
     */
    toBytes(): Uint8Array;
    /**
     * Creates an `Args` instance from a byte array.
     * @param bytes - The byte array to parse.
     * @returns An `Args` instance.
     */
    static fromBytes(bytes: Uint8Array): Args;
}
