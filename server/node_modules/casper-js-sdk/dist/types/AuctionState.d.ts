import { Bid } from './Bid';
import { ValidatorWeightAuction } from './ValidatorWeight';
import { PublicKey } from './keypair';
import { BidKind } from './BidKind';
/**
 * Represents a public key and its corresponding bid in the auction state.
 */
export declare class PublicKeyAndBid {
    /**
     * The public key associated with this bid.
     */
    publicKey: PublicKey;
    /**
     * The bid associated with the public key.
     */
    bid: Bid;
}
/**
 * Represents validators for a specific era, including the era ID and validator weights.
 */
export declare class EraValidators {
    /**
     * The unique identifier for the era.
     */
    eraID: number;
    /**
     * The weights of the validators for this era.
     */
    validatorWeights: ValidatorWeightAuction[];
}
export declare class BidKindWrapper {
    publicKey: PublicKey;
    bid: BidKind;
    constructor(publicKey?: PublicKey, bid?: BidKind);
}
export declare class AuctionStateV1 {
    bids: PublicKeyAndBid[];
    blockHeight: number;
    eraValidators: EraValidators[];
    stateRootHash: string;
}
export declare class AuctionStateV2 {
    bids: BidKindWrapper[];
    blockHeight: number;
    eraValidators: EraValidators[];
    stateRootHash: string;
}
/**
 * Represents the current auction state, including bids, era validators, and other state information.
 */
export declare class AuctionState {
    /**
     * The list of bids in the auction.
     */
    bids: BidKindWrapper[];
    /**
     * The block height at which this auction state was recorded.
     */
    blockHeight: number;
    /**
     * The validators and their weights for each era in the auction state.
     */
    eraValidators: EraValidators[];
    /**
     * The root hash of the state at the time of this auction state.
     */
    stateRootHash: string;
    /**
     * Creates an AuctionState from an AuctionStateV1.
     * For each bid, a BidKindWrapper is created for the validator bid,
     * and additional wrappers are created for each delegator bid.
     *
     * @param v1 An instance of AuctionStateV1.
     * @returns An AuctionState instance.
     */
    static fromV1(v1: AuctionStateV1): AuctionState;
    /**
     * Creates an AuctionState from an AuctionStateV2.
     *
     * @param v2 An instance of AuctionStateV2.
     * @returns An AuctionState instance.
     */
    static fromV2(v2: AuctionStateV2): AuctionState;
}
