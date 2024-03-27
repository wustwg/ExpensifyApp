import type {OnyxUpdate} from 'react-native-onyx';
import type {RequireAllOrNone, Spread} from 'type-fest';
import type Response from './Response';

type OnyxData = {
    successData?: OnyxUpdate[];
    failureData?: OnyxUpdate[];
    finallyData?: OnyxUpdate[];
    optimisticData?: OnyxUpdate[];
};

type RequestConflictResolver = {
    getConflictingRequests: (persistedRequests: Request[]) => Request[];
    handleConflictingRequest: (persistedRequest: Request) => unknown;
};

type RequestType = 'get' | 'post';

type RequestData = RequireAllOrNone<
    Spread<
        {
            command: string;
            commandName?: string;
            data?: Record<string, unknown>;
            type?: RequestType;
            shouldUseSecure?: boolean;
            successData?: OnyxUpdate[];
            failureData?: OnyxUpdate[];
            finallyData?: OnyxUpdate[];
            idempotencyKey?: string;

            resolve?: (value: Response) => void;
            reject?: (value?: unknown) => void;
        },
        RequestConflictResolver
    >,
    keyof RequestConflictResolver
>;

type Request = RequestData & OnyxData;

export default Request;
export type {OnyxData, RequestType, RequestConflictResolver};
