import { ReactNode } from 'react';

export interface AuthGuardProps {
    children: ReactNode;
    requireAuth?: boolean;
    requireAdmin?: boolean;
    requireEditor?: boolean;
    fallback?: ReactNode;
}
