"use client";

import ThemeSync from "@/components/global/themeToggle/ThemeSync";
import { ADMIN_ROUTES, EDITOR_ROUTES, PROTECTED_ROUTES } from "@/_data/sites";
import { AuthGuard } from "@/hooks/authGuard";
import store from "@/redux/store";
// import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "lib/graphql/apolloClient";

import { Provider } from "react-redux";


export default function Providers({ children }: { children: React.ReactNode }) {

    const currentPath = usePathname();

    const isProtectedRoute = PROTECTED_ROUTES.some(route => currentPath.startsWith(route))

    const isAdminRoute = ADMIN_ROUTES.some(route => currentPath.startsWith(route))

    const isEditorRoute = EDITOR_ROUTES.some(route => currentPath.startsWith(route))

    const requireAdmin = isAdminRoute;

    return (
        <Provider store={store}>
            <AuthGuard
                requireAuth={isProtectedRoute || isAdminRoute || isEditorRoute}
                requireAdmin={requireAdmin}
                requireEditor={isEditorRoute}
            >

                <ApolloProvider client={apolloClient}>
                    <ThemeSync>{children}</ThemeSync>
                </ApolloProvider>

            </AuthGuard>
        </Provider>
    );
};
