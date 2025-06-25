import { Hash } from './key';
import { ModuleBytes } from './ExecutableDeployItem';
/**
 * Represents a summary of a message topic, including the number of messages and block time.
 */
export declare class MessageTopicSummary {
    /**
     * The total number of messages in this topic.
     */
    messageCount: number;
    /**
     * The block time associated with the topic.
     */
    blockTime: number;
}
/**
 * Represents a checksum for a message, stored as a string.
 */
export type MessageChecksum = string;
/**
 * Represents a message topic, including the topic name and its hash.
 */
export declare class MessageTopic {
    /**
     * The name of the message topic.
     */
    topicName: string;
    /**
     * The hash of the message topic name.
     */
    topicNameHash: Hash;
}
/**
 * Represents the payload of a message, which can either be a string or bytes.
 */
export declare class MessagePayload {
    /**
     * The string payload of the message, if available.
     */
    string?: string;
    /**
     * The bytes payload of the message, if available.
     */
    bytes?: ModuleBytes;
}
/**
 * Represents a message with a payload, topic, and related metadata.
 */
export declare class Message {
    /**
     * The payload of the message, which can either be a string or bytes.
     */
    message: MessagePayload;
    /**
     * The name of the topic associated with this message.
     */
    topicName: string;
    /**
     * The hash of the topic name, which is used to identify the topic.
     */
    topicNameHash: Hash;
    /**
     * The entity address associated with the message, often the sender or origin.
     */
    hashAddr: Hash;
    /**
     * The index of the block where the message was included.
     */
    blockIndex: number;
    /**
     * The index of the topic within the block.
     */
    topicIndex: number;
}
