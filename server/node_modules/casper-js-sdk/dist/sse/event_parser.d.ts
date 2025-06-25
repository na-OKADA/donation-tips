import { RawEvent } from './event';
/**
 * A parser for handling and converting raw event data.
 */
export declare class EventParser {
    /**
     * Determines whether the provided JSON data contains the specified event property.
     *
     * @param data - The raw JSON string representing the event data.
     * @param eventName - The name of the event property to look for.
     * @returns True if the parsed data contains the specified event property; otherwise, false.
     */
    shouldHandleEvent(data: string, eventName: string): boolean;
    /**
     * Parses the raw event data and returns a new RawEvent instance.
     *
     * @param data - The raw JSON string representing the event data.
     * @param type - The type of the event.
     * @param lastEventId - The identifier of the last event processed.
     * @returns A new instance of RawEvent containing the event details.
     */
    parseEvent(data: string, type: string, lastEventId: string): RawEvent;
}
