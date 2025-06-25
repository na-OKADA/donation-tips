import { CLType } from './CLType';
/**
 * Represents a raw CLType message that can be parsed into a `CLType` instance.
 * This class utilizes `typedjson` decorators for JSON serialization and deserialization.
 */
export declare class CLTypeRaw {
    /**
     * The raw message string representation of a CLType.
     */
    private rawMessage;
    /**
     * Initializes a new instance of the CLTypeRaw class.
     * @param rawMessage - A string representing the raw CLType message.
     */
    constructor(rawMessage: CLType);
    /**
     * Parses the raw message into a `CLType` object.
     * @returns A `CLType` instance if parsing is successful.
     * @throws Error if parsing fails, with a descriptive error message.
     */
    static parseCLType(json: any): CLType | Error;
    /**
     * Parses the raw message into a `CLType` object.
     * @returns A `CLType` instance if parsing is successful.
     * @throws Error if parsing fails, with a descriptive error message.
     */
    toJSON(): any;
}
