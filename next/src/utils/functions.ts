export const isActive = (pathname: string, href?: string) => {
    if (!href) return false;

    return (
        pathname === href ||
        pathname.startsWith(href + '/') ||
        pathname.startsWith(href)
    );
};

export const linkId = (userId: number, url: any) => {
    return url.replace(':userId', String(userId));
};

export function readLocalStorageItem(key: string): string | null {
    try {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}
export function writeLocalStorageItem(key: string, value: any) {
    try {
        if (typeof window === 'undefined') return;
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        return null;
    }
}

export function removeLocalStorageItem(key: string) {
    try {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(key);
    } catch {
        null;
    }
}
