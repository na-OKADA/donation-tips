import { Hash } from './Hash';
import { IResultWithBytes } from '../clvalue';
/**
 * Enum representing the different types of bid addresses.
 * Each type corresponds to a specific tag value that uniquely identifies the bid address type.
 */
export declare enum BidAddrTag {
    UnifiedTag = 0,
    ValidatorTag = 1,
    DelegatedAccountTag = 2,
    DelegatedPurseTag = 3,
    CreditTag = 4,
    ReservedDelegationAccountTag = 5,
    ReservedDelegationPurseTag = 6,
    UnbondAccountTag = 7,
    UnbondPurseTag = 8
}
/** Error indicating an invalid BidAddrTag was encountered. */
export declare const ErrInvalidBidAddrTag: Error;
/** Error indicating an unexpected BidAddrTag was found in a BidAddr. */
export declare const ErrUnexpectedBidAddrTagInBidAddr: Error;
/** Error indicating the BidAddr format is invalid. */
export declare const ErrInvalidBidAddrFormat: Error;
/**
 * Represents a bid address, which stores information such as unified, validator, delegator, or credit data types.
 */
export declare class BidAddr {
    /** Unified hash for UnifiedTag addresses. */
    unified?: Hash;
    /** Validator hash for ValidatorTag addresses. */
    validator?: Hash;
    /** Delegator account hash for DelegatedAccountTag addresses. */
    delegatorAccount?: Hash;
    /** Delegator purse address for DelegatedPurseTag addresses. */
    delegatorPurseAddress?: string;
    /** Era ID for CreditTag addresses. */
    eraId?: number;
    /** Private field indicating the tag type of the BidAddr. */
    private tag;
    /**
     * Validates and returns the BidAddrTag from a numeric value.
     * @param tag - The numeric tag value to validate.
     * @returns The corresponding BidAddrTag.
     * @throws {ErrInvalidBidAddrTag} If the tag value is invalid.
     */
    static bidAddrTag(tag: number): BidAddrTag;
    /**
     * Returns the tag associated with the bid address.
     * @returns The BidAddrTag of the bid address.
     */
    getTag(): BidAddrTag;
    /**
     * Creates a BidAddr from a hexadecimal string.
     * @param source - The hexadecimal string representation of the BidAddr.
     * @returns A new BidAddr instance.
     * @throws {ErrInvalidBidAddrFormat} If the format is invalid.
     * @throws {ErrUnexpectedBidAddrTagInBidAddr} If an unexpected tag is encountered.
     */
    static fromHex(source: string): BidAddr;
    /**
     * Creates a BidAddr from a byte array.
     * @param bytes - The byte array.
     * @returns A new BidAddr instance.
     * @throws {ErrInvalidBidAddrFormat} If the format is invalid.
     */
    static fromBytes(bytes: Uint8Array): IResultWithBytes<BidAddr>;
    /**
     * Returns a prefixed string representation of the BidAddr.
     * @returns The prefixed string representation.
     */
    toPrefixedString(): string;
    /**
     * Converts the BidAddr to its hexadecimal string representation, ensuring proper formatting.
     * @returns The hexadecimal string representation of the BidAddr.
     * @throws {Error} If the BidAddr type is unexpected or required fields are missing.
     */
    toHex(): string;
    /**
     * Converts the BidAddr to a byte array.
     * @returns The byte array representation of the BidAddr.
     * @throws {Error} If the BidAddr type is unexpected.
     */
    toBytes(): Uint8Array;
    /**
     * Creates a BidAddr from its JSON representation.
     * @param json - The JSON string.
     * @returns A new BidAddr instance.
     */
    static fromJSON(json: string): BidAddr;
    /**
     * Converts the BidAddr to its JSON representation.
     * @returns The JSON string representation.
     */
    toJSON(): string;
}
