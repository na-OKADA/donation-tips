import { Hash, AccountHash, URef, TransferHash } from './key';
/**
 * Represents information about a deploy in the blockchain.
 * This class encapsulates details such as the deploy hash, the account making the deploy, gas usage, source URef, and associated transfers.
 */
export declare class DeployInfo {
    /**
     * The unique hash identifying the deploy. This hash is used to verify the integrity and authenticity of the deploy.
     */
    deployHash: Hash;
    /**
     * The account hash of the account initiating the deploy. This is used to identify the account responsible for the deploy.
     */
    from: AccountHash;
    /**
     * The amount of gas used for the deploy. This value is typically in motes, a subunit of CSPR.
     */
    gas: string;
    /**
     * The source URef from which the deploy is triggered. URefs are used to identify a reference to a contract or resource in the blockchain.
     */
    source: URef;
    /**
     * A list of transfer hashes associated with the deploy. These are hashes that identify transfers (e.g., of CSPR or other assets) associated with the deploy.
     */
    transfers: TransferHash[];
}
