import { RpcRequest } from './request';
import { RpcResponse } from './response';
import { IHandler } from './client';
export declare const ErrParamsJsonStringifyHandler: Error;
export declare const ErrProcessHttpRequest: Error;
export declare const ErrReadHttpResponseBody: Error;
export declare const ErrRpcResponseUnmarshal: Error;
export declare class HttpHandler implements IHandler {
    private endpoint;
    private client;
    private httpClient?;
    private referrer?;
    private customHeaders;
    constructor(endpoint: string, client?: 'axios' | 'fetch');
    setCustomHeaders(headers: Record<string, string>): void;
    setReferrer(url: string): void;
    /** @throws {HttpError, Error} */
    processCall(params: RpcRequest): Promise<RpcResponse>;
    private processAxiosRequest;
    private processFetchRequest;
}
