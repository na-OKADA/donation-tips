import { TransactionHash } from './Transaction';
import { InitiatorAddr } from './InitiatorAddr';
import { AccountHash, Hash, URef } from './key';
import { CLValueUInt512 } from './clvalue';
/**
 * Represents the details of a version 1 (V1) transfer transaction.
 */
export declare class TransferV1 {
    /**
     * The amount being transferred in a version 1 transaction.
     */
    amount: CLValueUInt512;
    /**
     * The deploy hash associated with the transfer.
     */
    deployHash: Hash;
    /**
     * The account hash representing the sender of the transfer.
     */
    from: AccountHash;
    /**
     * The gas used for the transfer.
     */
    gas: number;
    /**
     * The optional ID of the transfer.
     */
    id?: number;
    /**
     * The source URef (Universal Reference) of the transfer.
     */
    source: URef;
    /**
     * The target URef (Universal Reference) of the transfer.
     */
    target: URef;
    /**
     * The optional account hash representing the recipient of the transfer.
     */
    to?: AccountHash;
}
/**
 * Represents the details of a version 2 (V2) transfer transaction.
 */
export declare class TransferV2 {
    /**
     * The amount being transferred in a version 2 transaction.
     */
    amount: CLValueUInt512;
    /**
     * The transaction hash associated with the transfer.
     */
    transactionHash: TransactionHash;
    /**
     * The initiator address of the transfer, containing details about the sender.
     */
    from: InitiatorAddr;
    /**
     * The gas used for the transfer.
     */
    gas: number;
    /**
     * The optional ID of the transfer.
     */
    id?: number;
    /**
     * The source URef (Universal Reference) of the transfer.
     */
    source: URef;
    /**
     * The target URef (Universal Reference) of the transfer.
     */
    target: URef;
    /**
     * The optional account hash representing the recipient of the transfer.
     */
    to?: AccountHash;
}
/**
 * Represents a transfer transaction, which can be either version 1 (V1) or version 2 (V2).
 */
export declare class Transfer {
    /**
     * The amount being transferred in the transaction.
     */
    amount: CLValueUInt512;
    /**
     * The transaction hash associated with the transfer.
     */
    transactionHash: TransactionHash;
    /**
     * The initiator address of the transfer, containing details about the sender.
     */
    from: InitiatorAddr;
    /**
     * The gas used for the transfer.
     */
    gas: number;
    /**
     * The optional ID of the transfer.
     */
    id?: number;
    /**
     * The source URef (Universal Reference) of the transfer.
     */
    source: URef;
    /**
     * The target URef (Universal Reference) of the transfer.
     */
    target: URef;
    /**
     * The optional account hash representing the recipient of the transfer.
     */
    to?: AccountHash;
    private originTransferV1?;
    private originTransferV2?;
    /**
     * Gets the version 1 transfer details if available.
     *
     * @returns The version 1 transfer details, or `undefined` if not present.
     */
    getTransferV1(): TransferV1 | undefined;
    /**
     * Gets the version 2 transfer details if available.
     *
     * @returns The version 2 transfer details, or `undefined` if not present.
     */
    getTransferV2(): TransferV2 | undefined;
    /**
     * Deserializes a `Transfer` instance from JSON.
     * It can handle both version 1 and version 2 transfer formats.
     *
     * @param data The JSON data representing the transfer.
     * @returns A `Transfer` instance.
     * @throws Error if the transfer format is invalid or unrecognized.
     */
    static fromJSON(data: any): Transfer;
    /**
     * Creates a `Transfer` instance from version 1 transfer data.
     *
     * @param transferV1 The version 1 transfer details.
     * @returns A `Transfer` instance created from the version 1 data.
     */
    private static fromTransferV1;
}
