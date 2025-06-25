export declare class RpcError extends Error {
    code: number;
    data?: any;
    constructor(code?: number, message?: string, data?: any);
    toString(): string;
}
export declare class HttpError<T extends Error = Error> extends Error {
    sourceErr: T;
    statusCode: number;
    constructor(statusCode: number | undefined, sourceErr: T);
    unwrap(): T;
    isNotFound(): boolean;
    static isHttpError<E extends Error = Error>(err: any | HttpError<E>): err is HttpError<E>;
}
