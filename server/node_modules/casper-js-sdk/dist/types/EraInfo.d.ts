import { PublicKey } from './keypair';
import { CLValueUInt512 } from './clvalue';
import { DelegationKind } from './Bid';
/**
 * Class representing the allocation of seigniorage to a delegator.
 */
export declare class DelegatorAllocation {
    /**
     * Kinds of delegation bids.
     */
    delegatorKind: DelegationKind;
    /**
     * The public key of the validator associated with the delegator's allocation.
     */
    validatorPublicKey: PublicKey;
    /**
     * The amount of seigniorage allocated to the delegator.
     */
    amount: CLValueUInt512;
    /**
     * Constructs a `DelegatorAllocation` instance.
     *
     * @param delegatorKind Kinds of delegation bids.
     * @param validatorPublicKey The public key of the associated validator.
     * @param amount The amount of seigniorage allocated to the delegator.
     */
    constructor(delegatorKind: DelegationKind, validatorPublicKey: PublicKey, amount: CLValueUInt512);
}
/**
 * Class representing the allocation of seigniorage to a validator.
 */
export declare class ValidatorAllocation {
    /**
     * The public key of the validator receiving the allocation.
     */
    validatorPublicKey: PublicKey;
    /**
     * The amount of seigniorage allocated to the validator.
     */
    amount: CLValueUInt512;
    /**
     * Constructs a `ValidatorAllocation` instance.
     *
     * @param validatorPublicKey The public key of the validator.
     * @param amount The amount of seigniorage allocated to the validator.
     */
    constructor(validatorPublicKey: PublicKey, amount: CLValueUInt512);
}
/**
 * Represents the JSON structure when the key "Delegator" is present.
 */
export declare class DelegatorData {
    delegatorPublicKey?: PublicKey;
    validatorPublicKey: PublicKey;
    amount: CLValueUInt512;
}
/**
 * Class representing the seigniorage allocation for a validator and delegator.
 */
export declare class SeigniorageAllocation {
    /**
     * The allocation for a validator.
     */
    validator?: ValidatorAllocation;
    /**
     * The allocation for a delegator.
     */
    delegator?: DelegatorAllocation;
    /**
     * Constructs a `SeigniorageAllocation` instance.
     *
     * @param validator The validator allocation.
     * @param delegator The delegator allocation.
     */
    constructor(validator?: ValidatorAllocation, delegator?: DelegatorAllocation);
    /**
     * Custom deserialization from a JSON.
     *
     * The JSON is expected to have one of the following structures:
     * - A "Delegator" key with an object containing "delegator_public_key", "validator_public_key", and "amount".
     * - A "Validator" key with an object matching ValidatorAllocation.
     * - A "DelegatorKind" key with an object matching DelegatorAllocation.
     *
     * @param json A JSON.
     * @returns A new SeigniorageAllocation instance.
     * @throws Error if the JSON is empty, invalid, or does not match any expected structure.
     */
    static fromJSON(json: any): SeigniorageAllocation;
}
/**
 * Class representing information about an era, including seigniorage allocations.
 */
export declare class EraInfo {
    /**
     * A list of seigniorage allocations for validators and delegators in the era.
     */
    seigniorageAllocations: SeigniorageAllocation[];
    /**
     * Constructs an `EraInfo` instance.
     *
     * @param seigniorageAllocations The list of seigniorage allocations for validators and delegators.
     */
    constructor(seigniorageAllocations?: SeigniorageAllocation[]);
}
