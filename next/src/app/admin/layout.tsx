

import RightColumn from '@/components/admin/rightColumn/RightColumn';
import Sidebar from '@/components/admin/sidebar/Sidebar';
import Breadcrumbs from '@/components/global/Breadcrumbs';
import React from 'react';

export const metadata = {
    title: 'Admin — Dashboard',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Breadcrumbs items={[{ label: 'Dashboard', href: '/admin/dashboard' }]} />
            <main className="container-max px-4 py-6">
                <div className="flex flex-col-reverse lg:flex-row gap-6">


                    <div className="lg:sticky lg:top-6 lg:self-start lg:h-auto h-auto">
                        <Sidebar />
                    </div>


                    <section className="flex-1 min-w-0">
                        {children}
                    </section>


                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <div className="sticky top-6">
                            <RightColumn />
                        </div>
                    </aside>
                </div>
            </main>
        </>

    );
}
