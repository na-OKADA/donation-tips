/**
 * Represents a timestamp as a specific point in time (Date).
 */
export declare class Timestamp {
    /**
     * The Date object representing the timestamp.
     */
    date: Date;
    /**
     * Creates a new instance of `Timestamp` with the specified Date.
     *
     * @param date The `Date` object representing the timestamp.
     */
    constructor(date: Date);
    /**
     * Converts the timestamp to milliseconds (Unix timestamp).
     *
     * @returns The timestamp in milliseconds.
     */
    toMilliseconds(): number;
    /**
     * Converts the timestamp to a JSON string (ISO 8601 format).
     *
     * @returns A JSON string representing the timestamp.
     */
    toJSON(): string;
    /**
     * Creates a `Timestamp` instance from a JSON string.
     *
     * @param data The JSON string representing the timestamp in ISO 8601 format.
     * @returns A `Timestamp` object.
     */
    static fromJSON(data: string): Timestamp;
    /**
     * Returns the underlying `Date` object of the timestamp.
     *
     * @returns The `Date` object representing the timestamp.
     */
    toDate(): Date;
}
/**
 * Represents a duration, typically in milliseconds, with utility methods for parsing and formatting.
 */
export declare class Duration {
    /**
     * The duration in milliseconds.
     */
    duration: number;
    /**
     * Creates a new instance of `Duration` with the specified duration in milliseconds.
     *
     * @param duration The duration in milliseconds.
     */
    constructor(duration: number);
    /**
     * Converts the duration to a human-readable string.
     *
     * @returns A string representing the duration in a human-readable format (e.g., "1d 2h 3m 4s").
     */
    toJSON(): string;
    /**
     * Creates a `Duration` instance from a human-readable string representing the duration.
     *
     * @param data The human-readable string representing the duration (e.g., "1d 2h 3m 4s").
     * @returns A `Duration` object.
     */
    static fromJSON(data: string): Duration;
    /**
     * Converts the duration to a string in the format `hh:mm:ss`.
     *
     * @returns A string representing the duration in `hh:mm:ss` format.
     */
    toDurationString(): string;
    /**
     * Parses a duration string (e.g., "1d 2h 3m") and converts it to milliseconds.
     *
     * @param durationStr The string representing the duration in a human-readable format.
     * @returns The duration in milliseconds.
     * @throws Error if the duration format is invalid.
     */
    static parseDurationString(durationStr: string): number;
    /**
     * Returns the duration in milliseconds.
     *
     * @returns The duration in milliseconds.
     */
    toMilliseconds(): number;
}
