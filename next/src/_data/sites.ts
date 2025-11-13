import {
    faChartBar,
    faChartSimple,
    faFilm,
    faPencil,
    faUser,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const PROTECTED_ROUTES = ['/profile/:id', '/order/:id'] as const;

export const ADMIN_ROUTES = ['/all-users'] as const;

export const EDITOR_ROUTES = [
    '/analytics',
    '/admin',
    '/all-users',
    '/create-movie',
    '/edit-movie',
] as const;

type MenuItem = {
    label: string;
    href?: string;
    icon?: IconDefinition;
};
export const DASHBOARD_ROUTES: MenuItem[] = [
    {
        label: 'Dashboard ',
        href: '/admin/dashboard',
        icon: faUser,
    },
    {
        label: 'All Users',
        href: '/admin/all-users',
        icon: faChartSimple,
    },
    {
        label: 'Create Movie',
        href: '/admin/create-movie',
    },
    {
        label: 'All Movies',
        href: '/admin/all-movies',
        icon: faFilm,
    },
    {
        label: 'All Comments',
        href: '/admin/all-comments',
    },
];

export const ANALYTICS_ROUTES: MenuItem[] = [
    {
        label: 'Analytics Country',
        href: '/analytics/country',
    },
    {
        label: 'Analytics Movies',
        href: '/analytics/movies',
    },
    {
        label: 'Analytics Users',
        href: '/analytics/users',
    },
];

export const PROFILE_ROUTES: MenuItem[] = [
    {
        label: 'My Profile',
        href: '/profile/:userId',
        icon: faUser,
    },
    {
        label: 'Bookmarks',
        href: '/profile/:userId/bookmarks',
        icon: faPencil,
    },
    {
        label: 'My Analytics',
        href: '/profile/:userId/analytics',
        icon: faChartSimple,
    },
    {
        label: 'Drafts',
        href: '/profile/:userId/drafts',
        icon: faPencil,
    },
];


