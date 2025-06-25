import { PublicKey } from './keypair';
import { CLValueUInt512 } from './clvalue';
import { URef } from './key';
/**
 * Represents the details of an era where an unbonding request was initiated.
 */
export declare class UnbondEra {
    /**
     * The amount of tokens to be unbonded during this era.
     */
    amount: CLValueUInt512;
    /**
     * The era in which the unbonding request was created.
     */
    eraOfCreation: number;
    /**
     * The bonding purse associated with the unbonding request.
     */
    bondingPurse: URef;
    /**
     * The validator public key to re-delegate to.
     */
    newValidator: PublicKey;
}
/**
 * Represents the kind of unbonding request, including information about the validator,
 * delegated public key, and delegated purse.
 */
export declare class UnbondKind {
    /**
     * The public key of the validator who the tokens are being unbonded from.
     */
    validator: PublicKey;
    /**
     * The public key of the delegated account involved in the unbonding.
     */
    delegatedPublicKey: PublicKey;
    /**
     * The purse associated with the delegation from which tokens will be unbonded.
     */
    delegatedPurse: string;
}
/**
 * Represents a request to unbond tokens, specifying the validator, unbond kind, and eras.
 */
export declare class Unbond {
    /**
     * The public key of the validator from which tokens are being unbonded.
     */
    validatorPublicKey: PublicKey;
    /**
     * The kind of unbonding request, detailing whether it's from a validator, delegated public key, or delegated purse.
     */
    unbondKind: UnbondKind;
    /**
     * A list of eras during which unbonding occurred.
     */
    eras: UnbondEra[];
}
/**
 * Represents a delegation bid, which can be made from either a public key or a purse.
 */
export declare class DelegationKind {
    /**
     * A delegation bid made using a public key.
     */
    publicKey?: PublicKey;
    /**
     * A delegation bid made using a purse.
     */
    purse?: URef;
    /**
     * Converts the DelegationKind into a hexadecimal string.
     *
     * The method ensures that exactly one of the fields is set. If both or neither
     * are provided, it throws an error.
     *
     *
     * @returns The hexadecimal string representation of the delegation.
     * @throws {Error} If neither or both delegation fields are set.
     */
    toHex(): string;
    /**
     * Deserializes a JSON object into a DelegationKind instance.
     *
     * This method examines the input JSON. If it contains a `PublicKey` field,
     * it will use that to populate the `publicKey` property. Otherwise, if it
     * contains a `Purse` field, it will decode the hex string, append the default
     * access byte (`7`), and create a URef instance.
     *
     * @param json - The JSON object to deserialize.
     * @returns A new DelegationKind instance reflecting the given JSON.
     * @throws {Error} If the input JSON is null or undefined, or if it does not
     *                 conform to the expected format.
     */
    static fromJSON(json: any): DelegationKind;
}
/**
 * Represents a vesting schedule for staked amounts, including an initial release timestamp and locked amounts.
 */
export declare class VestingSchedule {
    /**
     * The initial release timestamp in milliseconds.
     */
    initialReleaseTimestampMillis: number;
    /**
     * The list of locked amounts associated with this vesting schedule.
     */
    lockedAmounts: CLValueUInt512[];
}
/**
 * Represents a bid by a validator, including details about the bonding purse, delegation rate, stake, and vesting schedule.
 */
export declare class ValidatorBid {
    /**
     * The public key associated with the validator.
     */
    validatorPublicKey: PublicKey;
    /**
     * The bonding purse associated with the validator.
     */
    bondingPurse: URef;
    /**
     * The rate at which delegations to this validator are taxed.
     */
    delegationRate: number;
    /**
     * Indicates whether the validator is currently inactive.
     */
    inactive: boolean;
    /**
     * The total amount staked by this validator.
     */
    stakedAmount: CLValueUInt512;
    /**
     * Minimum and maximum amounts that can be delegated to this validator.
     */
    minimumDelegationAmount: bigint;
    maximumDelegationAmount: bigint;
    /**
     * Number of slots reserved for specific delegators
     */
    reservedSlots: number;
    /**
     * The vesting schedule for this validator’s stake.
     */
    vestingSchedule?: VestingSchedule;
}
/**
 * Represents a delegator who delegates their stake to a validator.
 */
export declare class Delegator {
    bondingPurse: URef;
    stakedAmount: CLValueUInt512;
    delegatorKind: DelegationKind;
    validatorPublicKey: PublicKey;
    vestingSchedule?: VestingSchedule;
    constructor(bondingPurse: URef, stakedAmount: CLValueUInt512, delegatorKind: DelegationKind, validatorPublicKey: PublicKey, vestingSchedule?: VestingSchedule);
    /**
     * Creates a `Delegator` instance from a `DelegatorV1` instance.
     * @param v1 - The `DelegatorV1` instance to convert.
     * @returns A new `Delegator` instance.
     */
    static newDelegatorFromDelegatorV1(v1: DelegatorV1): Delegator;
    /**
     * Deserializes a `Delegator` instance from JSON.
     * @param json
     */
    static fromJSON(json: any): Delegator[];
}
/**
 * Represents a bid entry, including the bonding purse, delegation rate, inactive status, and vesting schedule.
 */
export declare class Bid {
    bondingPurse: URef;
    delegationRate: number;
    inactive: boolean;
    stakedAmount: CLValueUInt512;
    validatorPublicKey: PublicKey;
    delegators: Delegator[];
    vestingSchedule?: VestingSchedule;
}
/**
 * Represents a version 1 delegator with basic properties such as bonding purse and stake amount.
 */
export declare class DelegatorV1 {
    bondingPurse: URef;
    stakedAmount: CLValueUInt512;
    delegatee: PublicKey;
    publicKey: PublicKey;
    vestingSchedule?: VestingSchedule;
}
/**
 * Represents a credit in a staking system, tied to a specific era and validator.
 */
export declare class Credit {
    /**
     * The era ID associated with this credit.
     */
    eraID: number;
    /**
     * The public key of the validator for this credit.
     */
    validatorPublicKey: PublicKey;
    /**
     * The amount of the credit.
     */
    amount: CLValueUInt512;
}
/**
 * Represents a bridge between validators, including their public keys and the associated era.
 */
export declare class Bridge {
    /**
     * The era ID during which this bridge was established.
     */
    eraID: number;
    /**
     * The public key of the old validator.
     */
    oldValidatorPublicKey: PublicKey;
    /**
     * The public key of the new validator.
     */
    newValidatorPublicKey: PublicKey;
}
export declare class Reservation {
    /**
     * The delegation rate, representing the percentage of rewards allocated to the delegator.
     */
    delegationRate: number;
    /**
     * The public key of the validator associated with this reservation.
     *
     * This key is used to identify the validator in the blockchain system.
     */
    validatorPublicKey: PublicKey;
    /**
     * Kinds of delegation bids.
     */
    delegatorKind: DelegationKind;
}
