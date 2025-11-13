'use client';

import DeviceTraffic from '@/components/Admin/DeviceTraffic/DeviceTraffic';
import ProjectsTable from '@/components/Admin/ProjectsTable/ProjectsTable';
import RightColumn from '@/components/Admin/RightColumn/RightColumn';
import TopLocations from '@/components/Admin/TopLocations/TopLocations';
import TopStats from '@/components/Admin/TopStats/TopStats';
import TotalUsersChart from '@/components/Admin/TotalUsersChart/TotalUsersChart';
import React from 'react';


export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* <Breadcrumbs items={[{ label: 'Dashboard', href: '/admin/dashboard' }]} /> */}


            <div className="flex gap-6">
                {/* 
                <aside className="hidden lg:block w-60 flex-shrink-0">
                    <div className="sticky top-6">
                        <Sidebar />
                    </div>
                </aside> */}
                <main className="flex-1 min-w-0 space-y-6">
                    <TopStats />
                    <section className="rounded-xl bg-white p-4 border border-white/10 shadow-sm overflow-hidden">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">Overview</h2>
                                <p className="text-sm text-gray-500">This year vs last year</p>
                            </div>
                            <div className="text-sm text-gray-500">Updated just now</div>
                        </div>
                        <div className="w-full">
                            <TotalUsersChart />
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="lg:col-span-1">
                                <DeviceTraffic />
                            </div>
                            <div className="lg:col-span-2">
                                <TopLocations />
                            </div>
                        </div>
                    </section>
                    <section>
                        <ProjectsTable />
                    </section>
                    <div className="block lg:hidden">
                        <RightColumn />
                    </div>

                </main>


                {/* <aside className="hidden lg:block w-72 flex-shrink-0">
                    <div className="sticky top-6">
                        <RightColumn />
                    </div>
                </aside> */}
            </div>
        </div>
    );
}
