import { ReactNode, useEffect } from 'react';
import { useAuthGuard } from './useAuthGuard';
import { AuthGuardProps } from '@/interfaces';
import Loader from '@/components/global/Loader';
import { usePathname, useRouter } from 'next/navigation';
import { ADMIN_ROUTES, EDITOR_ROUTES } from '@/_data/sites';

export const AuthGuard = ({
    children,
    requireAuth = false,
    requireAdmin = false,
    requireEditor = false,
    fallback = <Loader />
}: AuthGuardProps) => {
    const { user, isLoading, isAuthenticated, isAdmin, isEditor } = useAuthGuard();
    const router = useRouter();
    const pathname = usePathname();



    useEffect(() => {
        if (isLoading) return;

        if (requireAuth && !isAuthenticated) {
            router.replace('/');
            return;
        }

        if (requireAdmin && !isAdmin) {
            router.replace('/');
            return;
        }
        if (requireEditor && !(isEditor || isAdmin)) {
            router.replace('/');
            return;
        }
    }, [
        isLoading,
        requireAuth,
        isAuthenticated,
        requireAdmin,
        isAdmin,
        requireEditor,
        isEditor,
        router,
        pathname,
    ]);


    if (requireAuth && !isAuthenticated) return null;
    if (requireAdmin && !isAdmin) return null;
    // if (requireEditor && !isEditor) return null;
    if (requireEditor && !(isEditor || isAdmin)) return null;

    return <>{children}</>;
};
