import { URef } from './key';
import { PublicKey } from './keypair';
import { CLValueUInt512 } from './clvalue';
/**
 * Represents an unbonding purse, which contains information about the unbonding process of a bonded amount.
 */
export declare class UnbondingPurse {
    /**
     * The amount being unbonded, represented as `CLValueUInt512`.
     */
    amount: CLValueUInt512;
    /**
     * The bonding purse from which the unbonding is taking place, represented as a `URef`.
     */
    bondingPurse: URef;
    /**
     * The era when the unbonding purse was created.
     */
    eraOfCreation: number;
    /**
     * The public key of the unbonder, representing the individual initiating the unbonding process.
     */
    unbonderPublicKey: PublicKey;
    /**
     * The public key of the validator associated with the unbonding.
     */
    validatorPublicKey: PublicKey;
    /**
     * The public key of a new validator, if applicable. This may be used for transferring the bonded amount to a new validator.
     */
    newValidator?: PublicKey;
}
