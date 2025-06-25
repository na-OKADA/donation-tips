import { ContractHash, URef } from './key';
export interface IDisabledVersion {
    protocol_version_major: number;
    contract_version: number;
}
/**
 * Represents a group of keys associated with a contract, allowing access control and permissions management.
 */
export declare class ContractGroup {
    /**
     * The name of the group.
     */
    groupName: string;
    /**
     * The list of URef keys associated with this group, defining permissions for contract interaction.
     */
    groupUsers: URef[];
    /**
     * Converts a plain JSON object into an instance of `ContractGroup`.
     *
     * @param json The JSON object to parse.
     * @returns An instance of `ContractGroup` or `undefined` if parsing fails.
     */
    static fromJSON(json: any): ContractGroup | undefined;
}
/**
 * Represents a specific version of a contract, identified by a unique hash and protocol compatibility.
 */
export declare class ContractVersion {
    /**
     * The unique hash identifying this version of the contract.
     */
    contractHash: ContractHash;
    /**
     * The version number of the contract.
     */
    contractVersion: number;
    /**
     * Major version of the protocol that this contract version is compatible with.
     */
    protocolVersionMajor: number;
    /**
     * Constructs a new `ContractVersion` instance.
     * @param contractHash - The unique hash for this version of the contract.
     * @param contractVersion - The version number of the contract.
     * @param protocolVersionMajor - The major protocol version compatible with this contract.
     */
    constructor(contractHash: ContractHash, contractVersion: number, protocolVersionMajor: number);
}
/**
 * Represents a package containing different versions and groups of a contract, including access control and lock status.
 */
export declare class ContractPackage {
    /**
     * Access key (URef) for the contract package, controlling permissions.
     */
    accessKey: URef;
    /**
     * Array of disabled contract versions, marking incompatible versions.
     */
    disabledVersions: number[][];
    /**
     * Array of contract groups, managing access control with sets of URef keys.
     */
    groups: ContractGroup[];
    /**
     * Array of contract versions, each compatible with a specific protocol version.
     */
    versions: ContractVersion[];
    /**
     * Lock status of the contract package, indicating whether the package is locked or unlocked.
     */
    lockStatus: string;
    /**
     * Constructs a new `ContractPackage` instance.
     * @param accessKey - The URef access key for controlling the contract package.
     * @param disabledVersions - Array of disabled contract versions.
     * @param groups - Array of contract groups for access management.
     * @param versions - Array of contract versions within this package.
     * @param lockStatus - The lock status of the contract package.
     */
    constructor(accessKey: URef, disabledVersions: number[][], groups: ContractGroup[], versions: ContractVersion[], lockStatus: string);
}
