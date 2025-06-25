import { EntityAddr, URef } from './key';
/**
 * Represents a key that uniquely identifies the version of an entity, including both the entity version and the protocol version.
 */
export declare class EntityVersionKey {
    /**
     * The version of the entity.
     */
    entityVersion: number;
    /**
     * The major version of the protocol used by the entity.
     */
    protocolVersionMajor: number;
    /**
     * Creates a new instance of `EntityVersionKey` with an entity version and protocol version major.
     *
     * @param entityVersion The version of the entity.
     * @param protocolVersionMajor The major version of the protocol used by the entity.
     */
    constructor(entityVersion: number, protocolVersionMajor: number);
}
/**
 * Represents an entity version and its associated addressable entity hash.
 */
export declare class EntityVersionAndHash {
    /**
     * The addressable entity hash associated with the entity.
     * This is used to uniquely identify an entity in a decentralized environment.
     */
    addressableEntity: EntityAddr;
    /**
     * The key representing the version of the entity.
     */
    entityVersionKey: EntityVersionKey;
    /**
     * Creates a new instance of `EntityVersionAndHash` with an addressable entity hash and an entity version key.
     *
     * @param addressableEntity The addressable entity hash for the entity.
     * @param entityVersionKey The version key of the entity.
     */
    constructor(addressableEntity: EntityAddr, entityVersionKey: EntityVersionKey);
}
/**
 * Represents a package with its versions and disabled versions, along with its lock status and associated groups.
 */
export declare class Package {
    /**
     * A list of versions associated with this package.
     */
    versions: EntityVersionAndHash[];
    /**
     * A list of disabled versions of this package.
     */
    disabledVersions: EntityVersionAndHash[];
    /**
     * The lock status of the package (e.g., whether it's locked or unlocked).
     */
    lockStatus: string;
    /**
     * The groups associated with the package.
     */
    groups: string[];
}
/**
 * Represents a user group with its associated name and users (identified by their URefs).
 */
export declare class NamedUserGroup {
    /**
     * The name of the user group.
     */
    groupName: string;
    /**
     * A list of users in the group, represented by their URefs (Universal References).
     */
    groupUsers: URef[];
    /**
     * Creates a new `NamedUserGroup` instance with a group name and a list of group users (URefs).
     *
     * @param groupName The name of the user group.
     * @param groupUsers The list of users in the group, identified by their URefs.
     */
    constructor(groupName: string, groupUsers: URef[]);
}
