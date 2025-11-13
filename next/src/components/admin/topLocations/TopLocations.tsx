'use client';

import React from 'react';
import clsx from 'clsx';

export default function TopLocations({
    className = '',
    locations = [
        { country: 'United States', value: 48 },
        { country: 'Germany', value: 12 },
        { country: 'India', value: 9 },
        { country: 'Brazil', value: 7 },
        { country: 'Japan .', value: 6 },
    ],
}: {
    className?: string;
    locations?: { country: string; value: number }[];
}) {
    const max = Math.max(...locations.map(l => l.value), 100);

    return (
        <div className={`rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-4 ${className}`}>
            <div className="flex items-center justify-between mb-3">
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Top locations</div>
                    <div className="text-sm text-gray-600 mt-1">Where your users are from</div>
                </div>
                <div className="text-sm text-gray-400">Last 30 days</div>
            </div>

            <div className="space-y-3">
                {locations.map((loc) => {
                    const pct = loc.value;
                    const widthPct = Math.max(6, (pct / max) * 100);
                    return (
                        <div key={loc.country} className="flex items-center gap-3">
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">{loc.country}</div>
                                    <div className="text-sm font-semibold">{pct}%</div>
                                </div>
                                <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className={clsx('h-full rounded-full')} style={{ width: `${widthPct}%`, background: 'linear-gradient(90deg,#3b82f6,#06b6d4)' }} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
