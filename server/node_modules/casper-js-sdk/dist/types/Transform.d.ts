import { AccountHash, Key } from './key';
import { UnbondingPurse } from './UnbondingPurse';
import { AddressableEntity } from './AddressableEntity';
import { Package } from './Package';
import { BidKind } from './BidKind';
import { MessageChecksum, MessageTopicSummary } from './MessageTopic';
import { DeployInfo } from './DeployInfo';
import { CLValue, CLValueUInt512 } from './clvalue';
import { Args } from './Args';
import { WriteTransfer } from './TransformRaw';
import { Contract } from './Contract';
import { ContractPackage } from './ContractPackage';
/**
 * Represents different types of transformation that can be applied.
 * Used for parsing and processing transformation data in a transaction.
 */
export declare class TransformKind {
    private data;
    /**
     * Constructs a new `TransformKind` instance.
     *
     * @param data The transformation data as a string.
     */
    constructor(data: any);
    /**
     * Getter for transformation data.
     *
     * @returns The transformation data.
     */
    get transformationData(): any;
    /**
     * Creates a `TransformKind` instance from a JSON string.
     *
     * @param json The transformation data as a string.
     * @returns The `TransformKind` instance.
     */
    static fromJSON(json: any): TransformKind | undefined;
    /**
     * Converts the transformation data into a JSON string.
     *
     * @returns The transformation data as a string.
     */
    toJSON(): any;
    /**
     * Checks if the transformation is a WriteTransfer.
     *
     * @returns `true` if the transformation is a WriteTransfer, otherwise `false`.
     */
    isWriteTransfer(): boolean;
    /**
     * Checks if the transformation is a WriteAccount.
     *
     * @returns `true` if the transformation is a WriteAccount, otherwise `false`.
     */
    isWriteAccount(): boolean;
    /**
     * Checks if the transformation is a WriteCLValue.
     *
     * @returns `true` if the transformation is a WriteCLValue, otherwise `false`.
     */
    isCLValueWrite(): boolean;
    /**
     * Checks if the transformation is a WriteContract.
     *
     * @returns `true` if the transformation is a WriteContract, otherwise `false`.
     */
    isWriteContract(): boolean;
    /**
     * Checks if the transformation is a WriteWithdraw.
     *
     * @returns `true` if the transformation is a WriteWithdraw, otherwise `false`.
     */
    isWriteWithdraw(): boolean;
    /**
     * Checks if the transformation is a WriteUnbonding.
     *
     * @returns `true` if the transformation is a WriteUnbonding, otherwise `false`.
     */
    isWriteUnbonding(): boolean;
    /**
     * Checks if the transformation is a WriteCLValue.
     *
     * @returns `true` if the transformation is a WriteCLValue, otherwise `false`.
     */
    isWriteCLValue(): boolean;
    /**
     * Checks if the transformation is a WritePackage.
     *
     * @returns `true` if the transformation is a WritePackage, otherwise `false`.
     */
    isWritePackage(): boolean;
    /**
     * Checks if the transformation is a WriteAddressableEntity.
     *
     * @returns `true` if the transformation is a WriteAddressableEntity, otherwise `false`.
     */
    isWriteAddressableEntity(): boolean;
    /**
     * Checks if the transformation is a WriteBidKind.
     *
     * @returns `true` if the transformation is a WriteBidKind, otherwise `false`.
     */
    isWriteBidKind(): boolean;
    /**
     * Checks if the transformation is a WriteNamedKey.
     *
     * @returns `true` if the transformation is a WriteNamedKey, otherwise `false`.
     */
    isWriteNamedKey(): boolean;
    /**
     * Checks if the transformation is a WriteMessage.
     *
     * @returns `true` if the transformation is a WriteMessage, otherwise `false`.
     */
    isWriteMessage(): boolean;
    /**
     * Checks if the transformation is a WriteMessageTopic.
     *
     * @returns `true` if the transformation is a WriteMessageTopic, otherwise `false`.
     */
    isWriteMessageTopic(): boolean;
    /**
     * Checks if the transformation is a WriteBid.
     *
     * @returns `true` if the transformation is a WriteBid, otherwise `false`.
     */
    isWriteBid(): boolean;
    /**
     * Checks if the transformation is an AddUInt512.
     *
     * @returns `true` if the transformation is AddUInt512, otherwise `false`.
     */
    isAddUint512(): boolean;
    /**
     * Checks if the transformation is a WriteDeployInfo.
     *
     * @returns `true` if the transformation is a WriteDeployInfo, otherwise `false`.
     */
    isWriteDeployInfo(): boolean;
    /**
     * Checks if the transformation is a WriteContractPackage.
     *
     * @returns `true` if the transformation is a WriteContractPackage, otherwise `false`.
     */
    isWriteContractPackage(): boolean;
    /**
     * Attempts to parse the transformation as a WriteTransfer.
     *
     * @returns A `WriteTransfer` object if the data matches, otherwise throw an error`.
     */
    parseAsWriteTransfer(): WriteTransfer;
    /**
     * Attempts to parse the transformation as a WriteWithdraw.
     *
     * @returns An array of `UnbondingPurse` objects if the data matches, otherwise `[]`.
     */
    parseAsWriteWithdraws(): UnbondingPurse[];
    /**
     * Attempts to parse the transformation as a WriteAddressableEntity.
     *
     * @returns An `AddressableEntity` object if the data matches, otherwise throw an error`.
     */
    parseAsWriteAddressableEntity(): AddressableEntity;
    /**
     * Attempts to parse the transformation as a WritePackage.
     *
     * @returns A `Package` object if the data matches, otherwise `throw an error`.
     */
    parseAsWritePackage(): Package;
    /**
     * Attempts to parse the transformation as a WriteBidKind.
     *
     * @returns A `BidKind` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteBidKind(): BidKind;
    /**
     * Attempts to parse the transformation as a WriteNamedKey.
     *
     * @returns A `NamedKeyKind` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteNamedKey(): NamedKeyKind | null;
    /**
     * Attempts to parse the transformation as a WriteMessage.
     *
     * @returns A `MessageChecksum` if the data matches, otherwise `throw an error`.
     */
    parseAsWriteMessage(): MessageChecksum;
    /**
     * Attempts to parse the transformation as a WriteMessageTopic.
     *
     * @returns A `MessageTopicSummary` if the data matches, otherwise `throw an error`.
     */
    parseAsWriteMessageTopic(): MessageTopicSummary;
    /**
     * Attempts to parse the transformation as a WriteUnbonding.
     *
     * @returns An array of `UnbondingPurse` objects if the data matches, otherwise `throw an error`.
     */
    parseAsWriteUnbondings(): UnbondingPurse[] | null;
    /**
     * Attempts to parse the transformation as a UInt512.
     *
     * @returns A `CLValueUInt512` object if the data matches, otherwise `throw an error`.
     */
    parseAsUInt512(): CLValueUInt512;
    /**
     * Attempts to parse the transformation data as a WriteAccount transformation.
     *
     * This method supports two JSON formats:
     *
     * - **2.x Format:**
     *   ```json
     *   {
     *     "Write": {
     *       "Account": {
     *         "account_hash": "..."
     *       }
     *     }
     *   }
     *   ```
     *   If the parsed `accountHash` is not equal to the zero account hash, this value is returned.
     *
     * - **1.x Format:**
     *   ```json
     *   {
     *     "WriteAccount": "..."
     *   }
     *   ```
     *   If the 2.x format is not matched or the parsed account hash equals the zero hash,
     *   the method falls back to this format.
     *
     * @returns The parsed `AccountHash`.
     * @throws Error if the transformation data cannot be parsed as a valid WriteAccount.
     */
    parseAsWriteAccount(): AccountHash;
    /**
     * Attempts to parse the transformation as a WriteDeployInfo.
     *
     * @returns A `DeployInfo` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteDeployInfo(): DeployInfo;
    /**
     * Attempts to parse the transformation as a WriteCLValue.
     *
     * @returns The `Args` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteCLValue(): CLValue;
    /**
     * Attempts to parse the transformation as a WriteContract.
     *
     * @returns A `Contract` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteContract(): Contract;
    /**
     * Attempts to parse the transformation as a WriteContractPackage.
     *
     * @returns A `ContractPackage` object if the data matches, otherwise `throw an error`.
     */
    parseAsWriteContractPackage(): ContractPackage;
    /**
     * Recursively checks if any key in the provided object (including nested objects)
     * contains the specified name.
     *
     * @param obj - The object to search through.
     * @param name - The transformation name to search for within the keys.
     * @returns true if a key containing the name is found; otherwise, false.
     */
    private containsKeyRecursive;
    /**
     * Checks if `TransformKind` has the transformation specified by name.
     *
     * @param `name` - transformation name (aka WriteTransfer)
     * @returns `true` if the transformation is a WriteTransfer, otherwise `false`.
     */
    isTransformation(name: string): boolean;
}
/**
 * Represents a transformation, which includes a key and a transformation kind.
 */
export declare class Transform {
    /**
     * The key associated with the transformation.
     */
    key: Key;
    /**
     * The kind of transformation being applied.
     */
    kind: TransformKind;
    /**
     * Constructs a new `Transform` instance.
     *
     * @param key The key associated with the transformation.
     * @param kind The kind of transformation.
     */
    constructor(key: Key, kind: TransformKind);
}
/**
 * Represents a key transformation in a transaction.
 */
export declare class TransformKey {
    /**
     * The key associated with the transformation.
     */
    key: Key;
    /**
     * The transformation kind.
     */
    transform: TransformKind;
}
/**
 * Represents a named key transformation in a transaction.
 */
export declare class NamedKeyKind {
    /**
     * The named key transformation data represented as `Args`.
     */
    namedKey: Args;
    /**
     * The name of the key represented as `Args`.
     */
    name: Args;
}
