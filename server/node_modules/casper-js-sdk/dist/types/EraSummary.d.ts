import { Hash } from './key';
import { StoredValue } from './StoredValue';
/**
 * Class representing a summary of an era, including the block hash, era ID,
 * stored value, state root hash, and the associated Merkle proof.
 */
export declare class EraSummary {
    /**
     * The hash of the block for this era.
     */
    blockHash: Hash;
    /**
     * The unique identifier for the era.
     */
    eraID: number;
    /**
     * The stored value for this era, representing data related to the state at the end of the era.
     */
    storedValue: StoredValue;
    /**
     * The hash of the state root, which represents the state at the end of the era.
     */
    stateRootHash: Hash;
    /**
     * The Merkle proof associated with the block in this era, used to verify the integrity
     * of the data stored in the block.
     */
    merkleProof: string;
    /**
     * Constructs an `EraSummary` instance.
     *
     * @param blockHash The hash of the block for this era.
     * @param eraID The unique identifier for the era.
     * @param storedValue The stored value representing data associated with the era.
     * @param stateRootHash The hash of the state root at the end of the era.
     * @param merkleProof The Merkle proof for the block in the era.
     */
    constructor(blockHash: Hash, eraID: number, storedValue: StoredValue, stateRootHash: Hash, merkleProof: string);
}
