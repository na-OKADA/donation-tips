export declare function getEnumKeyByValue<T extends object>(enumObj: T, value: T[keyof T]): string | undefined;
/**
 * Compares two `Uint8Array`s
 * @param a The first `Uint8Array`
 * @param b The second `Uint8Array`
 * @returns `true` if the two `Uint8Array`s match, and `false` otherwise
 */
export declare const arrayEquals: (a: Uint8Array, b: Uint8Array) => boolean;
/**
 * Utility function to sleep for a given duration.
 * @param ms - Duration in milliseconds.
 * @returns A promise that resolves after the given duration.
 */
export declare const sleep: (ms: number) => Promise<void>;
