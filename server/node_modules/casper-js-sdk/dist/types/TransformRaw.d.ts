import { UnbondingPurse } from './UnbondingPurse';
import { NamedKeyKind } from './Transform';
import { AddressableEntity } from './AddressableEntity';
import { Package } from './Package';
import { BidKind } from './BidKind';
import { MessageTopicSummary } from './MessageTopic';
import { CLValue, CLValueUInt512 } from './clvalue';
import { DeployInfo } from './DeployInfo';
import { AccountHash, Hash, URef } from './key';
import { Contract } from './Contract';
import { ContractPackage } from './ContractPackage';
/**
 * Represents a transfer operation in a transaction.
 */
export declare class WriteTransfer {
    /**
     * The optional ID of the transfer.
     */
    id?: number;
    /**
     * The recipient of the transfer, represented as an `AccountHash`.
     */
    to?: AccountHash;
    /**
     * The deploy hash associated with the transfer.
     */
    deployHash: Hash;
    /**
     * The sender of the transfer, represented as an `AccountHash`.
     */
    from: AccountHash;
    /**
     * The amount being transferred, represented as a `CLValueUInt512`.
     */
    amount: CLValueUInt512;
    /**
     * The source URef (Universal Reference) of the transfer.
     */
    source: URef;
    /**
     * The target URef (Universal Reference) of the transfer.
     */
    target: URef;
    /**
     * The gas used for the transfer.
     */
    gas: number;
}
/**
 * Represents raw data for a write operation involving withdrawals.
 */
export declare class RawWriteWithdrawals {
    /**
     * The list of unbonding purses in the withdrawal write operation.
     */
    UnbondingPurses?: UnbondingPurse[];
}
/**
 * Represents raw data for a write transfer operation.
 */
export declare class RawWriteTransferTransform {
    /**
     * The write transfer operation.
     */
    WriteTransfer?: WriteTransfer;
}
/**
 * Represents a transform for an addressable entity.
 */
export declare class TranformAddressableEntity {
    /**
     * The addressable entity involved in the transform.
     */
    AddressableEntity?: AddressableEntity;
}
/**
 * Represents raw data for a write operation on an addressable entity.
 */
export declare class TranformAddressableEntityRawData {
    /**
     * The write operation containing an addressable entity transform.
     */
    Write?: TranformAddressableEntity;
}
/**
 * Represents transform data for a package entity.
 */
export declare class TranformPackageData {
    /**
     * The package data in the transform.
     */
    Package?: Package;
}
/**
 * Represents raw data for a write operation involving a package.
 */
export declare class PackageRawData {
    /**
     * The write operation containing package data.
     */
    Write?: TranformPackageData;
}
/**
 * Represents transform data for a bid kind.
 */
export declare class TranformBidKindData {
    /**
     * The bid kind data in the transform.
     */
    BidKind?: BidKind;
}
/**
 * Represents raw data for a write operation on a bid kind.
 */
export declare class BidKindRawData {
    /**
     * The write operation containing bid kind data.
     */
    Write?: TranformBidKindData;
}
/**
 * Represents a write operation involving a named key.
 */
declare class WriteNamedKey {
    /**
     * The named key in the write operation.
     */
    NamedKey?: NamedKeyKind;
}
/**
 * Represents raw data for a write operation on a named key.
 */
export declare class RawDataNamedKey {
    /**
     * The write operation containing the named key data.
     */
    Write?: WriteNamedKey;
}
/**
 * Represents a write operation involving a message.
 */
export declare class WriteMessage {
    /**
     * The message content in the write operation.
     */
    Message?: string;
}
/**
 * Represents raw data for a write operation on a message.
 */
export declare class RawDataMessage {
    /**
     * The write operation containing message data.
     */
    Write?: WriteMessage;
}
/**
 * Represents a write operation involving a message topic.
 */
export declare class WriteMessageTopic {
    /**
     * The message topic in the write operation.
     */
    MessageTopic?: MessageTopicSummary;
}
/**
 * Represents raw data for a write operation on a message topic.
 */
export declare class RawDataMessageTopic {
    /**
     * The write operation containing message topic data.
     */
    Write?: WriteMessageTopic;
}
/**
 * Represents raw write data for unbonding purses.
 */
export declare class RawWriteUnbonding {
    /**
     * The list of unbonding purses in the write operation.
     */
    UnbondingPurses?: UnbondingPurse[];
}
/**
 * Represents raw write data for a UInt512 value.
 */
export declare class RawUInt512 {
    /**
     * The UInt512 value in the write operation.
     */
    UInt512?: CLValueUInt512;
}
/**
 * Represents raw write data for deploying information.
 */
export declare class RawWriteDeployInfo {
    /**
     * The deploy information in the write operation.
     */
    WriteDeployInfo?: DeployInfo;
}
/**
 * Represents raw write data for a CLValue.
 * Used for serializing and deserializing the arguments of a CLValue write operation.
 */
export declare class RawWriteCLValue {
    /**
     * The write operation on a CLValue represented as `Args`.
     */
    WriteCLValue?: CLValue;
}
/**
 * Represents a write operation in a transaction.
 */
export declare class WriteCLValue {
    /**
     * The CLValue write operation represented as `Args`.
     */
    CLValue?: CLValue;
}
/**
 * Represents raw write data for version 2 of a CLValue.
 */
export declare class RawWriteCLValueV2 {
    /**
     * The write operation represented as `Write`.
     */
    Write?: WriteCLValue;
}
export declare class WriteContract {
    Contract?: Contract;
}
export declare class RawWriteContract {
    Write?: WriteContract;
}
export declare class WriteContractPackage {
    ContractPackage?: ContractPackage;
}
export declare class RawWriteContractPackage {
    Write?: WriteContractPackage;
}
/**
 * Represents the inner Account object in a 2.x Write transformation.
 */
export declare class RawWriteAccount2XTransformAccount {
    accountHash: AccountHash;
}
/**
 * Represents the nested Write.Account object in a 2.x Write transformation.
 */
export declare class RawWriteAccount2XTransformWrite {
    Account: RawWriteAccount2XTransformAccount;
}
/**
 * Represents a 2.x Write transformation.
 *
 * Expected JSON shape:
 * {
 *   "Write": {
 *     "Account": {
 *       "account_hash": "..."
 *     }
 *   }
 * }
 */
export declare class RawWriteAccount2XTransform {
    Write: RawWriteAccount2XTransformWrite;
}
/**
 * Represents a 1.x Write transformation.
 *
 * Expected JSON shape:
 * {
 *   "WriteAccount": "..."
 * }
 */
export declare class RawWriteAccount1XTransform {
    WriteAccount: AccountHash;
}
export {};
