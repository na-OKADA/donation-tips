import { Account } from './Account';
import { Transfer } from './Transfer';
import { DeployInfo } from './DeployInfo';
import { EraInfo } from './EraInfo';
import { Bid } from './Bid';
import { UnbondingPurse } from './UnbondingPurse';
import { AddressableEntity } from './AddressableEntity';
import { BidKind } from './BidKind';
import { Package } from './Package';
import { MessageChecksum, MessageTopicSummary } from './MessageTopic';
import { NamedKeyValue } from './NamedKey';
import { EntryPointValue } from './EntryPoint';
import { PrepaymentKind } from './Prepayment';
import { Contract } from './Contract';
import { ContractPackage } from './ContractPackage';
import { CLValue } from './clvalue';
import { SystemByteCode } from './ByteCode';
import { ContractWasm } from './ContractWasm';
/**
 * Represents a stored value in a decentralized system. The value can be of different types
 * like `Account`, `Contract`, `Transfer`, etc. Each field corresponds to a specific type of
 * stored data in the system.
 */
export declare class StoredValue {
    /**
     * The stored `CLValue`, which is a general-purpose value that can represent various types of data.
     */
    clValue?: CLValue;
    /**
     * The stored account information.
     */
    account?: Account;
    /**
     * The stored contract information.
     */
    contract?: Contract;
    /**
     * The WebAssembly (WASM) bytecode for the contract, represented as `AnyT`.
     */
    ContractWasm?: ContractWasm;
    /**
     * The stored contract package information.
     */
    contractPackage?: ContractPackage;
    /**
     * The transfer information, representing a historical transfer.
     */
    transfer?: Transfer;
    /**
     * The information related to a deploy operation.
     */
    deployInfo?: DeployInfo;
    /**
     * The information related to an era.
     */
    eraInfo?: EraInfo;
    /**
     * The stored bid information, typically related to a staking or auction process.
     */
    bid?: Bid;
    /**
     * An array of unbonding purses, which represent assets being unbonded.
     */
    withdraw?: UnbondingPurse[];
    /**
     * The stored unbonding purse, representing assets being unbonded.
     */
    unbonding?: UnbondingPurse;
    /**
     * The stored addressable entity information, which is a reference to a contract or other addressable entity.
     */
    addressableEntity?: AddressableEntity;
    /**
     * The stored bid kind, representing the type or class of a bid.
     */
    bidKind?: BidKind;
    /**
     * The stored package information, typically a contract or executable package.
     */
    package?: Package;
    /**
     * The stored bytecode, representing compiled contract or executable code.
     */
    byteCode?: SystemByteCode;
    /**
     * The stored message topic summary, containing a summary of the message topic.
     */
    messageTopic?: MessageTopicSummary;
    /**
     * A checksum of the stored message, typically used for validation purposes.
     */
    message?: MessageChecksum;
    /**
     * The stored named key value, representing a key-value pair within a contract or other entity.
     */
    namedKey?: NamedKeyValue;
    /**
     * Stores location, type and data for a gas pre-payment.
     */
    prepayment?: PrepaymentKind;
    /**
     * The stored entry point value, typically representing an entry point in a smart contract.
     */
    entryPoint?: EntryPointValue;
    /**
     * Raw bytes. Similar to a [`crate::StoredValue::CLValue`] but does not incur overhead of a [`crate::CLValue`] and [`crate::CLType`].
     */
    rawBytes?: string;
}
