import { CLTypeRaw } from './clvalue';
/**
 * Enum representing the type of entry point.
 */
export declare enum EntryPointType {
    Session = "Session",
    Contract = "Contract",
    Caller = "Caller",
    Called = "Called",
    Factory = "Factory"
}
/**
 * Enum representing the payment options for an entry point.
 */
export declare enum EntryPointPayment {
    /**
     * The caller must cover cost.
     */
    Caller = "Caller",
    /**
     * Will cover cost to execute self but not cost of any subsequent invoked contracts.
     */
    DirectInvocationOnly = "DirectInvocationOnly",
    /**
     * Will cover cost to execute self and the cost of any subsequent invoked contracts.
     */
    SelfOnward = "SelfOnward"
}
/**
 * Class representing an argument for an entry point. Each argument has a name and a corresponding `CLTypeRaw`.
 */
export declare class EntryPointArg {
    /**
     * The name of the entry point argument.
     */
    name: string;
    /**
     * The type of the argument, represented by `CLTypeRaw`.
     */
    clType: CLTypeRaw;
    /**
     * Constructs an `EntryPointArg` instance.
     * @param name The name of the argument.
     * @param clType The type of the argument.
     */
    constructor(name: string, clType: CLTypeRaw);
}
/**
 * Class representing version 1 of an entry point in the Casper VM.
 * It contains the entry point's access, arguments, type, payment type, name, and return type.
 */
export declare class EntryPointV1 {
    /**
     * The access control for the entry point.
     */
    access: any;
    /**
     * A list of arguments for the entry point.
     */
    args: EntryPointArg[];
    /**
     * The type of entry point (e.g., session, contract, etc.).
     */
    entryPointType: EntryPointType;
    /**
     * The payment method required to access this entry point.
     */
    entryPointPayment: EntryPointPayment;
    /**
     * The name of the entry point.
     */
    name: string;
    /**
     * The return type of the entry point.
     */
    ret: CLTypeRaw;
    /**
     * Constructs an `EntryPointV1` instance.
     *
     * @param access The access control for this entry point.
     * @param args A list of arguments for the entry point.
     * @param entryPointType The type of entry point.
     * @param entryPointPayment The payment method for the entry point.
     * @param name The name of the entry point.
     * @param ret The return type of the entry point.
     */
    constructor(access: any, args: EntryPointArg[], entryPointType: EntryPointType, entryPointPayment: EntryPointPayment, name: string, ret: CLTypeRaw);
}
/**
 * Class representing version 2 of an entry point in the Casper VM.
 * This version includes flags and a function index.
 */
export declare class EntryPointV2 {
    /**
     * Flags associated with this entry point.
     */
    flags: number;
    /**
     * The function index for the entry point.
     */
    functionIndex: number;
    /**
     * Constructs an `EntryPointV2` instance.
     *
     * @param flags The flags for the entry point.
     * @param functionIndex The function index for the entry point.
     */
    constructor(flags?: number, functionIndex?: number);
}
/**
 * A wrapper class that can hold either version 1 or version 2 of an entry point.
 */
export declare class EntryPointValue {
    /**
     * Version 1 of the entry point, if available.
     */
    v1CasperVm?: EntryPointV1;
    /**
     * Version 2 of the entry point, if available.
     */
    v2CasperVm?: EntryPointV2;
    /**
     * Constructs an `EntryPointValue` instance.
     *
     * @param v1CasperVm Version 1 of the entry point, if available.
     * @param v2CasperVm Version 2 of the entry point, if available.
     */
    constructor(v1CasperVm?: EntryPointV1, v2CasperVm?: EntryPointV2);
}
