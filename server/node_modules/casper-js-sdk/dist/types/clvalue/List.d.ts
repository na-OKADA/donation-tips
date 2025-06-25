import { CLTypeList } from './cltype';
import { CLValue, IResultWithBytes } from './CLValue';
/**
 * Represents a List value in the Casper type system.
 * This class provides methods to manage and manipulate lists of CLValues.
 */
export declare class CLValueList {
    /**
     * The type of the list elements.
     */
    type: CLTypeList;
    /**
     * The elements contained in the list.
     */
    elements: CLValue[];
    /**
     * Initializes a new instance of the CLValueList class.
     * @param type - The CLTypeList representing the type of the list.
     * @param elements - Optional array of CLValues to initialize the list with.
     */
    constructor(type: CLTypeList, elements?: CLValue[]);
    /**
     * Converts the list to its byte representation, including the length and each element's bytes.
     * @returns A Uint8Array representing the bytes of the list.
     */
    bytes(): Uint8Array;
    /**
     * Provides a string representation of the list.
     * @returns A string in the format "[elem1, elem2, ...]".
     */
    toString(): string;
    /**
     * Checks if the list is empty.
     * @returns true if the list is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Appends a new element to the list.
     * @param value - The CLValue to append to the list.
     */
    append(value: CLValue): void;
    /**
     * Removes an element from the list at the specified index.
     * @param index - The index of the element to remove.
     */
    remove(index: number): void;
    /**
     * Removes and returns the last element from the list.
     * @returns The last element of the list, or undefined if the list is empty.
     */
    pop(): CLValue | undefined;
    /**
     * Returns the number of elements in the list.
     * @returns The number of elements in the list.
     */
    size(): number;
    /**
     * Sets the element at the specified index.
     * @param index - The index at which to set the element.
     * @param item - The CLValue to set at the specified index.
     * @throws Error if the index is out of bounds.
     */
    set(index: number, item: CLValue): void;
    /**
     * Gets the element at the specified index.
     * @param index - The index of the element to get.
     * @returns The CLValue at the specified index.
     * @throws Error if the index is out of bounds.
     */
    get(index: number): CLValue;
    /**
     * Converts the list to a JSON-compatible representation.
     * @returns An array of string representations of the list elements.
     */
    toJSON(): string[];
    /**
     * Creates a CLValueList instance from a Uint8Array.
     * Parses the byte array to interpret the length of the list and each element in the list.
     * @param source - The Uint8Array containing the byte representation of the List value.
     * @param clType - The CLTypeList representing the type of the list.
     * @returns An object containing the new CLValueList instance and any remaining bytes.
     */
    static fromBytes(source: Uint8Array, clType: CLTypeList): IResultWithBytes<CLValueList>;
}
