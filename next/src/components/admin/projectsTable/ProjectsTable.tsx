'use client';

import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { motion } from 'framer-motion';


type Project = {
    id: string;
    name: string;
    manager: string;
    date: string; // ISO
    amount: number;
    status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
};

const demoProjects: Project[] = [
    { id: 'p1', name: 'Booking App', manager: 'ByeWind', date: '2025-06-24', amount: 942.0, status: 'In Progress' },
    { id: 'p2', name: 'Landing Revamp', manager: 'Natali Craig', date: '2025-03-10', amount: 881.0, status: 'Complete' },
    { id: 'p3', name: 'Search Engine', manager: 'Drew Cano', date: '2025-11-10', amount: 409.0, status: 'Pending' },
    { id: 'p4', name: 'Analytics v2', manager: 'Orlando Diggs', date: '2024-12-20', amount: 953.0, status: 'Approved' },
    { id: 'p5', name: 'Mobile Sync', manager: 'Andi Lane', date: '2025-07-25', amount: 907.0, status: 'Rejected' },
    { id: 'p6', name: 'Dashboard UI', manager: 'ByeWind', date: '2025-02-12', amount: 420.0, status: 'Complete' },
    { id: 'p7', name: 'API Gateway', manager: 'Natali Craig', date: '2025-04-03', amount: 1500.0, status: 'In Progress' },
    { id: 'p8', name: 'Auth Revamp', manager: 'Drew Cano', date: '2024-10-01', amount: 650.0, status: 'Pending' },
    { id: 'p9', name: 'Payments', manager: 'Orlando Diggs', date: '2025-08-14', amount: 1200.0, status: 'Approved' },
    { id: 'p10', name: 'Notifications', manager: 'Andi Lane', date: '2025-01-30', amount: 300.0, status: 'Complete' },
];

function formatCurrency(n: number) {
    return `$${n.toFixed(2)}`;
}
function formatDate(iso: string) {
    try {
        const d = new Date(iso);
        return d.toLocaleDateString();
    } catch {
        return iso;
    }
}

function StatusBadge({ status }: { status: Project['status'] }) {
    const map: Record<Project['status'], string> = {
        'In Progress': 'bg-amber-100 text-amber-700',
        'Complete': 'bg-emerald-100 text-emerald-700',
        'Pending': 'bg-sky-100 text-sky-700',
        'Approved': 'bg-emerald-200 text-emerald-800',
        'Rejected': 'bg-rose-100 text-rose-700',
    };
    return (
        <span className={clsx('text-xs font-medium px-2 py-1 rounded-full', map[status])}>
            {status}
        </span>
    );
}

export default function ProjectsTable({
    data = demoProjects,
    pageSizeOptions = [5, 10, 20],
}: {
    data?: Project[];
    pageSizeOptions?: number[];
}) {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
    const [query, setQuery] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'amount' | null>('date');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return data.filter(p => !q || p.name.toLowerCase().includes(q) || p.manager.toLowerCase().includes(q));
    }, [data, query]);

    const sorted = useMemo(() => {
        if (!sortBy) return filtered;
        const sortedCopy = [...filtered].sort((a, b) => {
            if (sortBy === 'date') {
                const da = new Date(a.date).getTime();
                const db = new Date(b.date).getTime();
                return sortDir === 'asc' ? da - db : db - da;
            } else {
                return sortDir === 'asc' ? a.amount - b.amount : b.amount - a.amount;
            }
        });
        return sortedCopy;
    }, [filtered, sortBy, sortDir]);

    const total = sorted.length;
    const pageCount = Math.max(1, Math.ceil(total / pageSize));
    const pageData = sorted.slice((page - 1) * pageSize, page * pageSize);

    const toggleSort = (col: 'date' | 'amount') => {
        if (sortBy === col) {
            setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortBy(col);
            setSortDir('desc');
        }
    };


    React.useEffect(() => {
        setPage(1);
    }, [query, pageSize, sortBy, sortDir]);

    return (
        <div className="rounded-xl bg-white/80 border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
                <div>
                    <h3 className="text-sm font-semibold">Projects</h3>
                    <div className="text-xs text-gray-400">Recent projects and statuses</div>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="search"
                        placeholder="Search project or manager..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="px-3 py-2 rounded-md bg-white/5 text-sm placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
                        aria-label="Search projects"
                    />
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="px-2 py-1 rounded-md bg-white/5 text-sm"
                        aria-label="Rows per page"
                    >
                        {pageSizeOptions.map(s => <option key={s} value={s}>{s} / page</option>)}
                    </select>
                </div>
            </div>

            <div className="hidden lg:block overflow-auto">
                <table className="w-full table-auto min-w-[640px]">
                    <thead>
                        <tr className="text-xs text-gray-500 border-b border-white/10">
                            <th className="text-left px-3 py-2">Project</th>
                            <th className="text-left px-3 py-2">Manager</th>
                            <th className="text-left px-3 py-2 cursor-pointer" onClick={() => toggleSort('date')}>
                                Date {sortBy === 'date' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
                            </th>
                            <th className="text-right px-3 py-2 cursor-pointer" onClick={() => toggleSort('amount')}>
                                Amount {sortBy === 'amount' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
                            </th>
                            <th className="text-left px-3 py-2">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pageData.map((p) => (
                            <motion.tr key={p.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="border-b border-white/6">
                                <td className="px-3 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-slate-700 text-white flex items-center justify-center font-medium">
                                            {p.manager.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">{p.name}</div>
                                            <div className="text-xs text-gray-400">{p.id}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-3 py-3">
                                    <div className="text-sm">{p.manager}</div>
                                </td>

                                <td className="px-3 py-3">
                                    <div className="text-sm">{formatDate(p.date)}</div>
                                </td>

                                <td className="px-3 py-3 text-right">
                                    <div className="text-sm font-medium">{formatCurrency(p.amount)}</div>
                                </td>

                                <td className="px-3 py-3">
                                    <StatusBadge status={p.status} />
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-2 py-1 rounded-md bg-white/5 disabled:opacity-40"
                        aria-label="Previous page"
                    >
                        Prev
                    </button>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: pageCount }).map((_, i) => {
                            const pNum = i + 1;
                            return (
                                <button
                                    key={pNum}
                                    onClick={() => setPage(pNum)}
                                    className={clsx('px-2 py-1 rounded-md text-sm', pNum === page ? 'bg-white text-slate-900 font-semibold' : 'bg-transparent')}
                                    aria-current={pNum === page ? 'page' : undefined}
                                >
                                    {pNum}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => setPage(p => Math.min(pageCount, p + 1))}
                        disabled={page === pageCount}
                        className="px-2 py-1 rounded-md bg-white/5 disabled:opacity-40"
                        aria-label="Next page"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
