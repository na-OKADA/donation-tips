import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Args } from './Args';
import { CLValue } from './clvalue';
import { ContractHash, URef } from './key';
import { PublicKey } from './keypair';
/**
 * Represents a deploy item containing module bytes and associated arguments.
 */
export declare class ModuleBytes {
    /**
     * The module bytes in hexadecimal format.
     */
    moduleBytes: Uint8Array;
    /**
     * The arguments passed to the module.
     */
    args: Args;
    /**
     * Constructs a `ModuleBytes` instance with module bytes and arguments.
     * @param moduleBytes The module bytes in hexadecimal format.
     * @param args The arguments for the module.
     */
    constructor(moduleBytes: Uint8Array, args: Args);
    /**
     * Serializes the `ModuleBytes` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents a deploy item with a stored contract referenced by its hash.
 */
export declare class StoredContractByHash {
    /**
     * The hash of the stored contract.
     */
    hash: ContractHash;
    /**
     * The entry point of the contract to invoke.
     */
    entryPoint: string;
    /**
     * The arguments for the contract call.
     */
    args: Args;
    /**
     * Constructs a `StoredContractByHash` instance with the contract hash, entry point, and arguments.
     * @param hash The contract hash.
     * @param entryPoint The contract entry point.
     * @param args The arguments for the contract.
     */
    constructor(hash: ContractHash, entryPoint: string, args: Args);
    /**
     * Serializes the `StoredContractByHash` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents a deploy item with a stored contract referenced by its name.
 */
export declare class StoredContractByName {
    /**
     * The name of the stored contract.
     */
    name: string;
    /**
     * The entry point of the contract to invoke.
     */
    entryPoint: string;
    /**
     * The arguments for the contract call.
     */
    args: Args;
    /**
     * Constructs a `StoredContractByName` instance with the contract name, entry point, and arguments.
     * @param name The contract name.
     * @param entryPoint The contract entry point.
     * @param args The arguments for the contract.
     */
    constructor(name: string, entryPoint: string, args: Args);
    /**
     * Serializes the `StoredContractByName` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents a deploy item with a stored versioned contract referenced by its hash.
 */
export declare class StoredVersionedContractByHash {
    /**
     * The hash of the stored contract.
     */
    hash: ContractHash;
    /**
     * The entry point of the contract to invoke.
     */
    entryPoint: string;
    /**
     * The arguments for the contract call.
     */
    args: Args;
    /**
     * The version of the contract.
     */
    version?: number;
    /**
     * Constructs a `StoredVersionedContractByHash` instance with the contract hash, entry point, arguments, and version.
     * @param hash The contract hash.
     * @param entryPoint The contract entry point.
     * @param args The arguments for the contract.
     * @param version The contract version.
     */
    constructor(hash: ContractHash, entryPoint: string, args: Args, version?: number);
    /**
     * Serializes the `StoredVersionedContractByHash` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents a deploy item with a stored versioned contract referenced by its name.
 */
export declare class StoredVersionedContractByName {
    /**
     * The name of the stored contract.
     */
    name: string;
    /**
     * The entry point of the contract to invoke.
     */
    entryPoint: string;
    /**
     * The version of the contract.
     */
    version?: number;
    /**
     * The arguments for the contract call.
     */
    args: Args;
    /**
     * Constructs a `StoredVersionedContractByName` instance with the contract name, entry point, arguments, and version.
     * @param name The contract name.
     * @param entryPoint The contract entry point.
     * @param args The arguments for the contract.
     * @param version The contract version.
     */
    constructor(name: string, entryPoint: string, args: Args, version?: number);
    /**
     * Serializes the `StoredVersionedContractByName` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents a deploy item with a transfer of funds and associated arguments.
 */
export declare class TransferDeployItem {
    /**
     * The arguments for the transfer.
     */
    args: Args;
    /**
     * Constructs a `TransferDeployItem` instance with arguments.
     * @param args The arguments for the transfer.
     */
    constructor(args: Args);
    /**
     * Creates a new transfer deploy item with the specified amount, target, source purse, and transfer ID.
     * @param amount The amount to transfer.
     * @param target The target address (either a URef or a PublicKey).
     * @param sourcePurse The source purse (optional).
     * @param id The transfer ID.
     * @returns A new `TransferDeployItem` instance.
     * @throws Error if the target is not specified or the transfer ID is missing.
     */
    static newTransfer(amount: BigNumber | string, target: URef | PublicKey, sourcePurse?: URef | null, id?: BigNumberish): TransferDeployItem;
    /**
     * Serializes the `TransferDeployItem` instance to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
}
/**
 * Represents an executable deploy item, which can be one of several types such as `ModuleBytes`, `StoredContractByHash`, etc.
 */
export declare class ExecutableDeployItem {
    /**
     * A module bytes deploy item.
     */
    moduleBytes?: ModuleBytes;
    /**
     * A stored contract deploy item referenced by hash.
     */
    storedContractByHash?: StoredContractByHash;
    /**
     * A stored contract deploy item referenced by name.
     */
    storedContractByName?: StoredContractByName;
    /**
     * A stored versioned contract deploy item referenced by hash.
     */
    storedVersionedContractByHash?: StoredVersionedContractByHash;
    /**
     * A stored versioned contract deploy item referenced by name.
     */
    storedVersionedContractByName?: StoredVersionedContractByName;
    /**
     * A transfer deploy item.
     */
    transfer?: TransferDeployItem;
    /**
     * Retrieves an argument by name from the deploy item.
     * @param name The name of the argument.
     * @returns The argument value, or `undefined` if not found.
     */
    getArgByName(name: string): CLValue | undefined;
    /**
     * Sets an argument by name for the deploy item.
     * @param name The name of the argument.
     * @param value The value of the argument.
     */
    setArg(name: string, value: CLValue): void;
    /**
     * Retrieves the arguments for the deploy item.
     * @returns The arguments for the deploy item.
     */
    getArgs(): Args;
    /**
     * Serializes the `ExecutableDeployItem` to a byte array.
     * @returns The serialized byte array.
     */
    bytes(): Uint8Array;
    /**
     * Creates a standard payment `ExecutableDeployItem` with the specified amount.
     * @param amount The amount to be transferred.
     * @returns A new `ExecutableDeployItem` instance with the payment.
     */
    static standardPayment(amount: BigNumber | string): ExecutableDeployItem;
    /**
     * Casts the `ExecutableDeployItem` to `ModuleBytes` if possible.
     * @returns The `ModuleBytes` representation of the `ExecutableDeployItem`, or `undefined` if not possible.
     */
    asModuleBytes(): ModuleBytes | undefined;
    /**
     * Checks if the `ExecutableDeployItem` is of type `Transfer`.
     * @returns `true` if the `ExecutableDeployItem` is a transfer item, `false` otherwise.
     */
    isTransfer(): boolean;
    /**
     * Checks if the `ExecutableDeployItem` is of type `StoredVersionedContractByHash`.
     * @returns `true` if the `ExecutableDeployItem` is a stored versioned contract by hash, `false` otherwise.
     */
    isStoredVersionContractByHash(): boolean;
    /**
     * Checks if the `ExecutableDeployItem` is of type `StoredVersionedContractByName`.
     * @returns `true` if the `ExecutableDeployItem` is a stored versioned contract by name, `false` otherwise.
     */
    isStoredVersionContractByName(): boolean;
    /**
     * Checks if the `ExecutableDeployItem` is of type `StoredContractByName`.
     * @returns `true` if the `ExecutableDeployItem` is a stored contract by name, `false` otherwise.
     */
    isStoredContractByName(): boolean;
    /**
     * Checks if the `ExecutableDeployItem` is of type `StoredContractByHash`.
     * @returns `true` if the `ExecutableDeployItem` is a stored contract by hash, `false` otherwise.
     */
    isStoredContractByHash(): boolean;
    /**
     * Checks if the `ExecutableDeployItem` is of type `ModuleBytes`.
     * @returns `true` if the `ExecutableDeployItem` is of type `ModuleBytes`, `false` otherwise.
     */
    isModuleBytes(): boolean;
    /**
     * Creates a new `ModuleBytes` object from a `Uint8Array` of module bytes and a set of `RuntimeArgs`
     * @param moduleBytes A set of module bytes as a `Uint8Array`
     * @param args The runtime arguments for the new `ModuleBytes` object
     * @returns A new `ExecutableDeployItem` created from a new `ModuleBytes` object built using `moduleBytes` and `args`
     */
    static newModuleBytes(moduleBytes: Uint8Array, args: Args): ExecutableDeployItem;
}
