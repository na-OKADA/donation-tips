import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { InitiatorAddr } from './InitiatorAddr';
import { PricingMode } from './PricingMode';
import { TransactionTarget } from './TransactionTarget';
import { TransactionEntryPoint } from './TransactionEntryPoint';
import { TransactionScheduling } from './TransactionScheduling';
import { Args } from './Args';
import { PublicKey } from './keypair';
import { AccountHash } from './key';
import { Transaction } from './Transaction';
import { Duration, Timestamp } from './Time';
import { ExecutableDeployItem } from './ExecutableDeployItem';
import { DeployHeader } from './Deploy';
/**
 * Abstract base class for building Transaction V1 instances.
 */
declare abstract class TransactionBuilder<T extends TransactionBuilder<T>> {
    protected _initiatorAddr: InitiatorAddr;
    protected _chainName: string;
    protected _timestamp: Timestamp;
    protected _ttl: Duration;
    protected _pricingMode: PricingMode;
    protected _invocationTarget: TransactionTarget;
    protected _entryPoint: TransactionEntryPoint;
    protected _scheduling: TransactionScheduling;
    protected _runtimeArgs: Args;
    protected _contractHash: string;
    /**
     * Sets the initiator address using a public key.
     */
    from(publicKey: PublicKey): T;
    /**
     * Sets the initiator address using an account hash.
     */
    fromAccountHash(accountHashKey: AccountHash): T;
    /**
     * Sets the chain name for the transaction.
     */
    chainName(chainName: string): T;
    /**
     * Sets the contract hash for the transaction.
     */
    contractHash(contractHash: string): T;
    /**
     * Sets the timestamp for the transaction.
     */
    timestamp(timestamp: Timestamp): T;
    /**
     * Sets the time-to-live for the transaction.
     */
    ttl(ttl: number): T;
    /**
     * Sets the payment amount for the transaction.
     */
    payment(paymentAmount: number, gasPriceTolerance?: number): T;
    protected _getDefaultDeployHeader(): DeployHeader;
    protected _getStandardPayment(): ExecutableDeployItem;
    /**
     * Builds and returns the Transaction instance.
     */
    build(): Transaction;
}
/**
 * Builder for creating Native Transfer transactions.
 */
export declare class NativeTransferBuilder extends TransactionBuilder<NativeTransferBuilder> {
    private _target;
    private _publicKey;
    private _amount;
    private _amountRow;
    private _idTransfer?;
    constructor();
    /**
     * Sets the target public key for the transfer.
     */
    target(publicKey: PublicKey): NativeTransferBuilder;
    /**
     * Sets the target account hash for the transfer.
     */
    targetAccountHash(accountHashKey: AccountHash): NativeTransferBuilder;
    /**
     * Sets the amount to transfer.
     */
    amount(amount: BigNumber | string): NativeTransferBuilder;
    /**
     * Sets the transfer ID.
     */
    id(id: number): NativeTransferBuilder;
    /**
     * Builds and returns the Native Transfer transaction.
     */
    build(): Transaction;
    /**
     * Builds and returns the Native Transfer transaction.
     */
    buildFor1_5(): Transaction;
}
export declare class NativeAddBidBuilder extends TransactionBuilder<NativeAddBidBuilder> {
    private _validator;
    private _amount;
    private _delegationRate;
    private _minimumDelegationAmount?;
    private _maximumDelegationAmount?;
    private _reservedSlots?;
    constructor();
    validator(publicKey: PublicKey): NativeAddBidBuilder;
    amount(amount: BigNumber | string): NativeAddBidBuilder;
    delegationRate(delegationRate: number): NativeAddBidBuilder;
    minimumDelegationAmount(minimumDelegationAmount: BigNumberish): NativeAddBidBuilder;
    maximumDelegationAmount(maximumDelegationAmount: BigNumberish): NativeAddBidBuilder;
    reservedSlots(reservedSlots: BigNumber): NativeAddBidBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeWithdrawBidBuilder extends TransactionBuilder<NativeWithdrawBidBuilder> {
    private _validator;
    private _amount;
    constructor();
    validator(publicKey: PublicKey): NativeWithdrawBidBuilder;
    amount(amount: BigNumber | string): NativeWithdrawBidBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeDelegateBuilder extends TransactionBuilder<NativeDelegateBuilder> {
    private _validator;
    private _amount;
    constructor();
    validator(publicKey: PublicKey): NativeDelegateBuilder;
    amount(amount: BigNumber | string): NativeDelegateBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeUndelegateBuilder extends TransactionBuilder<NativeUndelegateBuilder> {
    private _validator;
    private _amount;
    constructor();
    validator(publicKey: PublicKey): NativeUndelegateBuilder;
    amount(amount: BigNumber | string): NativeUndelegateBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeRedelegateBuilder extends TransactionBuilder<NativeRedelegateBuilder> {
    private _validator;
    private _newValidator;
    private _amount;
    constructor();
    validator(publicKey: PublicKey): NativeRedelegateBuilder;
    newValidator(publicKey: PublicKey): NativeRedelegateBuilder;
    amount(amount: BigNumber | string): NativeRedelegateBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeActivateBidBuilder extends TransactionBuilder<NativeActivateBidBuilder> {
    private _validator;
    constructor();
    validator(publicKey: PublicKey): NativeActivateBidBuilder;
    build(): Transaction;
    buildFor1_5(): Transaction;
}
export declare class NativeChangeBidPublicKeyBuilder extends TransactionBuilder<NativeChangeBidPublicKeyBuilder> {
    private _public_key;
    private _new_public_key;
    constructor();
    previousPublicKey(publicKey: PublicKey): NativeChangeBidPublicKeyBuilder;
    newPublicKey(publicKey: PublicKey): NativeChangeBidPublicKeyBuilder;
    build(): Transaction;
}
export declare class ContractCallBuilder extends TransactionBuilder<ContractCallBuilder> {
    constructor();
    private _transactionInvocationTarget;
    byHash(contractHash: string): ContractCallBuilder;
    byName(name: string): ContractCallBuilder;
    byPackageHash(contractHash: string, version?: number): ContractCallBuilder;
    byPackageName(name: string, version?: number): ContractCallBuilder;
    entryPoint(name: string): ContractCallBuilder;
    runtimeArgs(args: Args): ContractCallBuilder;
    buildFor1_5(): Transaction;
}
export declare class SessionBuilder extends TransactionBuilder<SessionBuilder> {
    private _isInstallOrUpgrade;
    constructor();
    wasm(wasmBytes: Uint8Array): SessionBuilder;
    installOrUpgrade(): SessionBuilder;
    runtimeArgs(args: Args): SessionBuilder;
    buildFor1_5(): Transaction;
}
export {};
