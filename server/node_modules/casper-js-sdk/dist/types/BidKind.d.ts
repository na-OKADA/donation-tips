import { Bid, Bridge, Credit, Delegator, Reservation, Unbond, ValidatorBid } from './Bid';
/**
 * Represents a polymorphic bid kind, which can hold different types of bid-related entities.
 * This class allows for various bid types, such as unified bids, validator bids, delegator bids,
 * bridge transitions, credits, and reservations. It provides flexibility to manage various bidding
 * scenarios in a decentralized system.
 */
export declare class BidKind {
    /**
     * A unified bid that combines multiple bid attributes, serving as a general bid type.
     * This type can hold any bid-related information that doesn't fit into the specific categories
     * below, allowing for a broader range of bidding scenarios.
     */
    unified?: Bid;
    /**
     * A bid specific to a validator, containing information unique to the validator's bid.
     * This may include details such as the validator's identity, bid amount, and other relevant
     * parameters that differentiate it from other types of bids.
     */
    validator?: ValidatorBid;
    /**
     * A bid from a delegator, representing a user delegating their stake to a validator.
     * This field holds information about the delegator's public key, amount of stake delegated,
     * and any other relevant data specific to the delegation process.
     */
    delegator?: Delegator;
    /**
     * Represents a bridge transition between validators, allowing for the transfer of a validator's
     * responsibilities to another validator. This can be useful in the context of network upgrades
     * or validator rotations.
     */
    bridge?: Bridge;
    /**
     * A credit entry for a validator, specifying an amount of credit and the era in which the credit
     * is awarded. This can be used to track validator performance, reputation, or other forms of credit
     * that might be relevant in the ecosystem.
     */
    credit?: Credit;
    /**
     * Represents a reservation made by a validator for a specific delegator, ensuring that a slot
     * is reserved for the delegator to join the validator's pool. This may be used in scenarios where
     * validators want to guarantee space for specific delegators.
     */
    reservation?: Reservation;
    /**
     * Represents an unbonding request, where a delegator or validator requests to unbond previously
     * bonded assets. This could involve the release of staked tokens and their return to the original
     * owner, with associated properties like bonding era and validator information.
     */
    unbond?: Unbond;
    /**
     * Constructs a new instance of BidKind.
     *
     * @param unified - (Optional) A unified bid.
     * @param validator - (Optional) A validator-specific bid.
     * @param delegator - (Optional) A delegator bid.
     * @param bridge - (Optional) A bridge transition bid.
     * @param credit - (Optional) A credit bid.
     * @param reservation - (Optional) A reservation bid.
     * @param unbond - (Optional) An unbonding request bid.
     */
    constructor(unified?: Bid, validator?: ValidatorBid, delegator?: Delegator, bridge?: Bridge, credit?: Credit, reservation?: Reservation, unbond?: Unbond);
}
