import { Result } from 'ts-results';
import { EventName, RawEvent } from './event';
/**
 * Type definition for an event handler function.
 *
 * @param result - A RawEvent instance representing the event.
 */
export type EventHandlerFn = (result: RawEvent) => void;
/**
 * Interface representing an event subscription.
 */
export interface EventSubscription {
    /**
     * The name of the event to subscribe to.
     */
    eventName: EventName;
    /**
     * The event handler function to invoke when the event occurs.
     */
    eventHandlerFn: EventHandlerFn;
}
/**
 * Client for managing Server-Sent Events (SSE) connections.
 */
export declare class SseClient {
    private eventStreamUrl;
    private subscribedTo;
    private eventSource?;
    private parser;
    /**
     * Creates an instance of SseClient.
     *
     * @param eventStreamUrl - The URL of the event stream.
     */
    constructor(eventStreamUrl: string);
    /**
     * Subscribes to a specified event.
     *
     * @param eventName - The name of the event to subscribe to.
     * @param eventHandlerFn - The function to handle the event when it occurs.
     * @returns A Result indicating success (Ok(true)) or failure (Err with an error message).
     */
    subscribe(eventName: EventName, eventHandlerFn: EventHandlerFn): Result<boolean, string>;
    /**
     * Unsubscribes from a specified event.
     *
     * @param eventName - The name of the event to unsubscribe from.
     * @returns A Result indicating success (Ok(true)) or failure (Err with an error message).
     */
    unsubscribe(eventName: EventName): Result<boolean, string>;
    /**
     * Processes incoming messages from the event source and dispatches them to the appropriate handlers.
     *
     * @param event - The message event containing the event data.
     */
    private runEventsLoop;
    /**
     * Starts the SSE connection.
     *
     * @param eventId - (Optional) The event ID to start streaming from.
     */
    start(eventId?: number): void;
    /**
     * Stops the SSE connection.
     */
    stop(): void;
}
