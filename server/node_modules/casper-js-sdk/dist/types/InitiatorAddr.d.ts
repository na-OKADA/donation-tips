import { PublicKey } from './keypair';
import { AccountHash } from './key';
/**
 * Represents an address for an initiator, which can either be a public key or an account hash.
 */
export declare class InitiatorAddr {
    /**
     * The public key of the initiator, if available.
     */
    publicKey?: PublicKey;
    /**
     * The account hash of the initiator, if available.
     */
    accountHash?: AccountHash;
    /**
     * Creates an instance of `InitiatorAddr` with an optional public key and account hash.
     *
     * @param publicKey The public key of the initiator.
     * @param accountHash The account hash of the initiator.
     */
    constructor(publicKey?: PublicKey, accountHash?: AccountHash);
    /**
     * Converts the `InitiatorAddr` instance to a byte array representation.
     * The result depends on whether the address is a public key or an account hash.
     *
     * @returns A `Uint8Array` representing the initiator address.
     */
    toBytes(): Uint8Array;
    /**
     * Creates an `InitiatorAddr` instance from a JSON object.
     * The JSON object can contain either a `publicKey` or an `accountHash` string.
     *
     * @param json The JSON object containing the address data.
     * @returns A new `InitiatorAddr` instance.
     */
    static fromJSON(json: any): InitiatorAddr;
    /**
     * Converts the `InitiatorAddr` instance to a JSON object.
     * The JSON object will contain either a `publicKey` or an `accountHash` depending on which is available.
     *
     * @returns A JSON object representing the initiator address.
     */
    toJSON(): unknown;
}
