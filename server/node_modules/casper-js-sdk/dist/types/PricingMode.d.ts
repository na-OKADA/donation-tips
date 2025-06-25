import { Hash } from './key';
/**
 * Represents the payment limited ( classic before ) pricing mode, including parameters for gas price tolerance,
 * payment amount, and standard payment.
 */
export declare class PaymentLimitedMode {
    /**
     * The tolerance for gas price fluctuations in classic pricing mode.
     */
    gasPriceTolerance: number;
    /**
     * The payment amount associated with classic pricing mode.
     */
    paymentAmount: number;
    /**
     * Whether the payment is a standard payment.
     */
    standardPayment: boolean;
    toBytes(): Uint8Array;
}
/**
 * Represents the fixed pricing mode, including a parameter for gas price tolerance.
 */
export declare class FixedMode {
    /**
     * The tolerance for gas price fluctuations in fixed pricing mode.
     */
    gasPriceTolerance: number;
    /**
     * User-specified additional computation factor (minimum 0).
     *
     * - If `0` is provided, no additional logic is applied to the computation limit.
     * - Each value above `0` tells the node that it needs to treat the transaction
     *   as if it uses more gas than its serialized size indicates.
     * - Each increment of `1` increases the "wasm lane" size bucket for this transaction by `1`.
     *
     * For example:
     * - If the transaction's size indicates bucket `0` and `additionalComputationFactor = 2`,
     *   the transaction will be treated as if it belongs to bucket `2`.
     */
    additionalComputationFactor: number;
    toBytes(): Uint8Array;
}
/**
 * Represents the prepair ( reserved before ) pricing mode, which includes a receipt hash.
 */
export declare class PrepaidMode {
    /**
     * The receipt associated with the reserved pricing mode.
     */
    receipt: Hash;
    toBytes(): Uint8Array;
}
/**
 * Represents the pricing mode, which can be one of the following: PaymentLimited, Fixed, or Prepaid.
 */
export declare class PricingMode {
    /**
     * The PaymentLimited pricing mode, if applicable.
     */
    paymentLimited?: PaymentLimitedMode;
    /**
     * The fixed pricing mode, if applicable.
     */
    fixed?: FixedMode;
    /**
     * The Prepaid pricing mode, if applicable.
     */
    prepaid?: PrepaidMode;
    /**
     * Converts the pricing mode instance into a byte array representation.
     * This method serializes the current pricing mode into bytes that can be used for transactions.
     *
     * @returns A `Uint8Array` representing the serialized pricing mode.
     */
    toBytes(): Uint8Array;
}
