import { PublicKey } from './keypair';
import { CLValueUInt512 } from './clvalue';
/**
 * Represents the weight of a validator at the end of an era.
 */
export declare class ValidatorWeightEraEnd {
    /**
     * The public key of the validator whose weight is being recorded.
     */
    validator: PublicKey;
    /**
     * The weight of the validator at the end of the era, represented as `CLValueUInt512`.
     */
    weight: CLValueUInt512;
}
/**
 * Represents the weight of a validator in the auction.
 */
export declare class ValidatorWeightAuction {
    /**
     * The public key of the validator whose weight is being recorded in the auction.
     */
    validator: PublicKey;
    /**
     * The weight of the validator in the auction, represented as `CLValueUInt512`.
     */
    weight: CLValueUInt512;
}
