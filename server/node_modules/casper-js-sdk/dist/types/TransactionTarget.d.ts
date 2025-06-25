import { Hash } from './key';
import { ExecutableDeployItem } from './ExecutableDeployItem';
/**
 * Represents a runtime environment for Casper transactions.
 * This class distinguishes between different versions of the Casper Virtual Machine (VM).
 */
export declare class TransactionRuntime {
    /**
     * Internal tag representing Casper VM Version 1.
     */
    private static readonly VM_CASPER_V1_TAG;
    /**
     * Internal tag representing Casper VM Version 2.
     */
    private static readonly VM_CASPER_V2_TAG;
    /**
     * The tag used to identify the current VM version.
     */
    private _tag;
    /**
     * The index of the field used for tag serialization.
     */
    private static readonly TAG_FIELD_INDEX;
    /**
     * Creates an instance of `TransactionRuntime` from a JSON string.
     *
     * @param json - The JSON string representing the type of the transaction runtime.
     * @returns A `TransactionRuntime` instance matching the specified type.
     * @throws Will throw an error if the provided JSON does not match known VM versions.
     */
    static fromJSON(json: string): TransactionRuntime;
    /**
     * Serializes the current `TransactionRuntime` to a JSON string.
     *
     * @returns A JSON string representing the type of the transaction runtime.
     * @throws Will throw an error if the tag does not match known VM versions.
     */
    toJSON(): string;
    /**
     * Creates a new instance representing the Casper Version 1 Virtual Machine.
     *
     * @returns A `TransactionRuntime` instance configured for VM Version 1.
     */
    static vmCasperV1(): TransactionRuntime;
    /**
     * Creates a new instance representing the Casper Version 2 Virtual Machine.
     *
     * @returns A `TransactionRuntime` instance configured for VM Version 2.
     */
    static vmCasperV2(): TransactionRuntime;
    /**
     * Serializes the current `TransactionRuntime` to a byte array.
     *
     * @returns A `Uint8Array` containing the serialized transaction runtime data.
     */
    toBytes(): Uint8Array;
}
/**
 * Represents the invocation target for a transaction identified by a package hash.
 */
export declare class ByPackageHashInvocationTarget {
    /**
     * The address of the package in the form of a hash.
     */
    addr: Hash;
    /**
     * The version of the package, if specified.
     */
    version?: number;
    toBytes(): Uint8Array;
}
/**
 * Represents the invocation target for a transaction identified by a package name.
 */
export declare class ByPackageNameInvocationTarget {
    /**
     * The name of the package.
     */
    name: string;
    /**
     * The version of the package, if specified.
     */
    version?: number;
    toBytes(): Uint8Array;
}
/**
 * Represents a transaction invocation target, which can be one of the following:
 * - By hash
 * - By name
 * - By package hash
 * - By package name
 */
export declare class TransactionInvocationTarget {
    /**
     * Invocation target by hash, if specified.
     */
    byHash?: Hash;
    /**
     * Invocation target by name, if specified.
     */
    byName?: string;
    /**
     * Invocation target by package hash, if specified.
     */
    byPackageHash?: ByPackageHashInvocationTarget;
    /**
     * Invocation target by package name, if specified.
     */
    byPackageName?: ByPackageNameInvocationTarget;
    toBytes(): Uint8Array;
    /**
     * Deserializes a `Uint8Array` into a `TransactionInvocationTarget` instance.
     *
     * This method reconstructs a `TransactionInvocationTarget` object from its serialized byte array representation.
     * The type of invocation target is determined by the tag extracted from the serialized data.
     *
     * @param bytes - The serialized byte array representing a `TransactionInvocationTarget`.
     * @returns A deserialized `TransactionInvocationTarget` instance.
     * @throws Error - If the byte array is invalid, missing required fields, or contains an unrecognized tag.
     *
     * ### Tags and Their Associated Targets:
     * - `0`: Represents an invocation target identified by a hash (`ByHash`).
     * - `1`: Represents an invocation target identified by a name (`ByName`).
     * - `2`: Represents an invocation target identified by a package hash and an optional version (`ByPackageHash`).
     * - `3`: Represents an invocation target identified by a package name and an optional version (`ByPackageName`).
     *
     * ### Example
     * ```typescript
     * const bytes = new Uint8Array([...]); // Provide valid TransactionInvocationTarget bytes
     * const invocationTarget = TransactionInvocationTarget.fromBytes(bytes);
     * console.log(invocationTarget); // Parsed TransactionInvocationTarget instance
     * ```
     */
    static fromBytes(bytes: Uint8Array): TransactionInvocationTarget;
}
/**
 * Represents a stored target, which includes both the invocation target and runtime.
 */
export declare class StoredTarget {
    /**
     * The invocation target for the stored transaction.
     */
    id: TransactionInvocationTarget;
    /**
     * The runtime associated with the stored transaction.
     */
    runtime: TransactionRuntime;
    toBytes(): Uint8Array;
}
/**
 * Represents a session target, which includes both the module bytes and runtime.
 */
export declare class SessionTarget {
    /**
     * The module bytes associated with the session target.
     */
    moduleBytes: Uint8Array;
    /**
     * The runtime associated with the session target.
     */
    runtime: TransactionRuntime;
    /**
     * The runtime associated with the session target.
     */
    isInstallUpgrade: boolean;
    toBytes(): Uint8Array;
}
/**
 * Represents a transaction target, which could be one of the following types:
 * - Native (no specific target)
 * - Stored (contract or stored item target)
 * - Session (session-based target)
 */
export declare class TransactionTarget {
    /**
     * Native transaction target, representing a transaction with no specific target.
     */
    native?: object;
    /**
     * Stored transaction target, representing a transaction that targets a stored contract or item.
     */
    stored?: StoredTarget;
    /**
     * Session transaction target, representing a session-based transaction.
     */
    session?: SessionTarget;
    /**
     * Constructs a `TransactionTarget` instance with the specified values for native, stored, or session targets.
     *
     * @param native The native transaction target, if applicable.
     * @param stored The stored transaction target, if applicable.
     * @param session The session transaction target, if applicable.
     */
    constructor(native?: object, stored?: StoredTarget, session?: SessionTarget);
    /**
     * Serializes the `TransactionTarget` into a byte array.
     *
     * @returns A `Uint8Array` representing the serialized transaction target.
     */
    toBytes(): Uint8Array;
    /**
     * Deserializes a `TransactionTarget` from a JSON object.
     *
     * @param json The JSON object to deserialize.
     * @returns A `TransactionTarget` instance.
     * @throws Error if the JSON object format is invalid.
     */
    static fromJSON(json: any): TransactionTarget;
    /**
     * Converts the `TransactionTarget` into a JSON-compatible format.
     *
     * @returns The JSON representation of the `TransactionTarget`.
     * @throws Error if the target type is unknown.
     */
    toJSON(): any;
    /**
     * Creates a new `TransactionTarget` from a session-based transaction.
     *
     * @param session The `ExecutableDeployItem` that defines the session-based transaction.
     * @returns A new `TransactionTarget` instance derived from the session.
     */
    static newTransactionTargetFromSession(session: ExecutableDeployItem): TransactionTarget;
}
