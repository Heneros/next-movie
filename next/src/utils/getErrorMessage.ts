import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function getErrorMessage(
    err?: FetchBaseQueryError | SerializedError | any,
): string {
    if (!err) return 'Unknown error';

    if (err && typeof err === 'object' && 'status' in err) {
        const e = err as FetchBaseQueryError;
        if (typeof e.data === 'string') return e.data;
        if (e.data && typeof e.data === 'object') {
            return (e.data as any).message || JSON.stringify(e.data);
        }
        return String(e.status);
    }
    return err.message || String(err);
}
export default getErrorMessage;
