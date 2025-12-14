'use client';
import React from 'react';
import StatCard from '../StatCard/StatCard';

type TopStatsData = {
    views: { value: number; delta: number };
    visits: { value: number; delta: number };
    newUsers: { value: number; delta: number };
    activeUsers: { value: number; delta: number };
};

export default function TopStats({ data }: { data?: TopStatsData }) {

    const d = data ?? {
        views: { value: 7265, delta: 11.01 },
        visits: { value: 3671, delta: -0.03 },
        newUsers: { value: 156, delta: 15.03 },
        activeUsers: { value: 2318, delta: 6.08 },
    };

    return (
        <section aria-label="Top stats" className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Views" value={d.views.value.toLocaleString()} delta={d.views.delta} deltaText="+ vs last week" />
                <StatCard title="Visits" value={d.visits.value.toLocaleString()} delta={d.visits.delta} deltaText="- vs last week" />
                <StatCard title="New Users" value={d.newUsers.value.toLocaleString()} delta={d.newUsers.delta} deltaText="+ vs last week" />
                <StatCard title="Active Users" value={d.activeUsers.value.toLocaleString()} delta={d.activeUsers.delta} deltaText="+ vs last week" />
            </div>
        </section>
    );
}
