import { PublicKey } from './keypair';
import { Hash } from './key';
import { Timestamp } from './Time';
/**
 * Represents minimal block information, including metadata such as the creator,
 * era ID, block hash, height, state root hash, and timestamp.
 */
export declare class MinimalBlockInfo {
    /**
     * The public key of the creator of the block.
     * This represents the entity that created the block.
     */
    creator: PublicKey;
    /**
     * The era ID of the block, representing the era in which this block was created.
     */
    eraID: number;
    /**
     * The hash of the block, used to uniquely identify it.
     */
    hash: Hash;
    /**
     * The height of the block, indicating its position in the blockchain.
     */
    height: number;
    /**
     * The state root hash of the block, representing the state of the blockchain
     * after processing the block.
     */
    stateRootHash: Hash;
    /**
     * The timestamp when the block was created.
     * This is typically the time when the block was finalized or validated.
     */
    timestamp: Timestamp;
}
