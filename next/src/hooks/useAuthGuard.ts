'use client';

import { useEffect, useMemo } from 'react';
import { useAuthMeQuery } from '@/redux/auth/authApiSlice';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

export const useAuthGuard = () => {
    const { userToken } = useAppSelector((s: RootState) => s.auth);
    // const test = useAppSelector((s: RootState) => s.auth);
    const {
        data: authData,
        isLoading,
        isFetching,
        error,
    } = useAuthMeQuery(undefined, {
        refetchOnMountOrArgChange: true,
        skip: !userToken,
    });

    // console.log('authData', authData);
    const user = authData?.user ?? null;

    const isAuthenticated = useMemo(() => !!user, [user]);

    const isAdmin = useMemo(() => !!user && user.role === 'ADMIN', [user]);
    const isEditor = useMemo(() => !!user && user.role === 'EDITOR', [user]);

    // console.log(isEditor);
    return {
        user,
        isLoading: isLoading || isFetching,
        isAuthenticated,
        isAdmin,
        isEditor,
    };
};
