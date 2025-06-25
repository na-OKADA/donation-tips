import { AssociatedKey } from './Account';
import { EntryPointV1 } from './EntryPoint';
import { AccountHash, URef } from './key';
import { TransactionRuntime } from './TransactionTarget';
/**
 * Defines different kinds of entities within the system, such as system entities,
 * accounts, and smart contracts. Provides details on each entity type.
 */
export declare class EntityKind {
    /**
     * Represents a system entity type, allowing flexible naming of system-specific entities.
     */
    system?: string;
    /**
     * Represents an account entity, identified by an `AccountHash`.
     */
    account?: AccountHash;
    /**
     * Represents a smart contract entity, specified by its transaction runtime version.
     */
    smartContract?: TransactionRuntime;
}
/**
 * Defines thresholds for various actions that an entity can perform,
 * with each threshold represented as a weight.
 */
export declare class EntityActionThresholds {
    /**
     * The weight required to authorize deployment actions.
     */
    deployment: number;
    /**
     * The weight required to authorize upgrade management actions.
     */
    upgradeManagement: number;
    /**
     * The weight required to authorize key management actions.
     */
    keyManagement: number;
}
/**
 * Represents an addressable entity, which can be a smart contract, account, or system entity.
 * Each entity contains various properties such as action thresholds, associated keys,
 * and message topics.
 */
export declare class AddressableEntity {
    /**
     * Specifies the kind of the entity, such as system entity, account, or smart contract.
     */
    entityKind: EntityKind;
    /**
     * The unique package hash associated with this entity.
     */
    packageHash: string;
    /**
     * The bytecode hash associated with this entity, representing its executable code.
     */
    byteCodeHash: string;
    /**
     * The associated keys for this entity, each with an `AccountHash` and a weight.
     */
    associatedKeys: AssociatedKey[];
    /**
     * The action thresholds required for different operations, such as deployment or key management.
     */
    actionThresholds: EntityActionThresholds;
    /**
     * The main purse associated with this entity, used for managing funds.
     */
    mainPurse: URef;
    /**
     * The protocol version in use by this entity.
     */
    protocolVersion: string;
}
/**
 * Represents an entry point in a smart contract, with a specific name and configuration.
 */
export declare class NamedEntryPoint {
    /**
     * The entry point configuration, specifying the method and parameters.
     */
    entryPoint: EntryPointV1;
    /**
     * Creates a new NamedEntryPoint instance from JSON.
     *
     * This method supports both JSON variants:
     *  - 1.x: { name, args, ret, access, entry_point_type, ... }
     *  - 2.x: { entry_point: { name, args, ret, access, entry_point_type, ... } }
     *
     * @param json The raw JSON to parse.
     * @returns A new instance of NamedEntryPoint.
     */
    static fromJSON(json: any): NamedEntryPoint;
}
