import { PublicKey } from './keypair';
import { ValidatorWeightEraEnd } from './ValidatorWeight';
import { CLValueUInt512 } from './clvalue';
/**
 * Class representing the rewards associated with a validator in a given era.
 */
export declare class EraReward {
    /**
     * The public key of the validator receiving the reward.
     */
    validator: PublicKey;
    /**
     * The amount of reward given to the validator.
     */
    amount: CLValueUInt512;
    /**
     * Constructs an `EraReward` instance.
     *
     * @param validator The public key of the validator.
     * @param amount The reward amount.
     */
    constructor(validator: PublicKey, amount: CLValueUInt512);
}
/**
 * Class representing the era report containing information about equivocators, inactive validators, and rewards.
 */
export declare class EraReport {
    /**
     * List of validators that have been found to equivocate during the era.
     */
    equivocators: PublicKey[];
    /**
     * List of inactive validators during the era.
     */
    inactiveValidators: PublicKey[];
    /**
     * List of rewards distributed to validators during the era.
     */
    rewards: EraReward[];
    /**
     * Constructs an `EraReport` instance.
     *
     * @param equivocators The list of equivocators.
     * @param inactiveValidators The list of inactive validators.
     * @param rewards The list of rewards distributed to validators.
     */
    constructor(equivocators?: PublicKey[], inactiveValidators?: PublicKey[], rewards?: EraReward[]);
}
/**
 * Class representing the details of an era's end, version 2. It includes information like equivocations, inactive validators, and rewards.
 */
export declare class EraEndV2 {
    /**
     * List of validators that have been found to equivocate during the era.
     */
    equivocators: PublicKey[];
    /**
     * List of inactive validators during the era.
     */
    inactiveValidators: PublicKey[];
    /**
     * List of validator weights for the next era.
     */
    nextEraValidatorWeights: ValidatorWeightEraEnd[];
    /**
     * A map of rewards for each validator, identified by their public key, in the next era.
     */
    rewards: Map<string, CLValueUInt512[]>;
    /**
     * The gas price for the next era.
     */
    nextEraGasPrice: number;
    /**
     * Constructs an `EraEndV2` instance.
     *
     * @param equivocators The list of equivocators.
     * @param inactiveValidators The list of inactive validators.
     * @param nextEraValidatorWeights The validator weights for the next era.
     * @param rewards The map of rewards for each validator in the next era.
     * @param nextEraGasPrice The gas price for the next era.
     */
    constructor(equivocators: PublicKey[], inactiveValidators: PublicKey[], nextEraValidatorWeights: ValidatorWeightEraEnd[], rewards: Map<string, CLValueUInt512[]>, nextEraGasPrice: number);
}
/**
 * Class representing the details of an era's end, version 1.
 */
export declare class EraEndV1 {
    /**
     * The era report containing equivocators, inactive validators, and rewards.
     */
    eraReport: EraReport;
    /**
     * The list of validator weights for the next era.
     */
    nextEraValidatorWeights: ValidatorWeightEraEnd[];
    /**
     * Constructs an `EraEndV1` instance.
     *
     * @param eraReport The era report.
     * @param nextEraValidatorWeights The validator weights for the next era.
     */
    constructor(eraReport: EraReport, nextEraValidatorWeights: ValidatorWeightEraEnd[]);
}
/**
 * A class that represents the end of an era with a unified structure.
 */
export declare class EraEnd {
    /**
     * List of validators that have been found to equivocate during the era.
     */
    equivocators: PublicKey[];
    /**
     * List of inactive validators during the era.
     */
    inactiveValidators: PublicKey[];
    /**
     * List of validator weights for the next era.
     */
    nextEraValidatorWeights: ValidatorWeightEraEnd[];
    /**
     * A map of rewards for each validator, identified by their public key.
     */
    rewards: Map<string, CLValueUInt512[]>;
    /**
     * The gas price for the next era.
     */
    nextEraGasPrice: number;
    /**
     * Constructs an `EraEnd` instance.
     *
     * @param equivocators The list of equivocators.
     * @param inactiveValidators The list of inactive validators.
     * @param nextEraValidatorWeights The validator weights for the next era.
     * @param rewards The map of rewards for each validator.
     * @param nextEraGasPrice The gas price for the next era.
     */
    constructor(equivocators?: PublicKey[], inactiveValidators?: PublicKey[], nextEraValidatorWeights?: ValidatorWeightEraEnd[], rewards?: Map<string, CLValueUInt512[]>, nextEraGasPrice?: number);
    /**
     * Converts an `EraEndV2` instance to `EraEnd`.
     *
     * @param eraEnd The `EraEndV2` instance.
     * @returns A new `EraEnd` instance, or `null` if the `EraEndV2` is `null`.
     */
    static fromV2(eraEnd: EraEndV2 | null): EraEnd | null;
    /**
     * Converts an `EraEndV1` instance to `EraEnd`.
     *
     * @param eraEnd The `EraEndV1` instance.
     * @returns A new `EraEnd` instance, or `null` if the `EraEndV1` is `null`.
     */
    static fromV1(eraEnd: EraEndV1 | null): EraEnd | null;
}
