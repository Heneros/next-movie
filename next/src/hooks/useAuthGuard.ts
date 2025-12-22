'use client';

import { useEffect, useMemo } from 'react';
import { useAuthMeQuery } from '@/redux/auth/authApiSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { logIn } from '@/redux/auth/authSlice';

export const useAuthGuard = () => {
    const dispatch = useAppDispatch();

    const { data, isLoading, isFetching, error } = useAuthMeQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const user = data?.user ?? null;
    useEffect(() => {
        if (!user) return;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');

        dispatch(
            logIn({
                user,
                userToken: null!,
            }),
        );
    }, [user, dispatch]);

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
