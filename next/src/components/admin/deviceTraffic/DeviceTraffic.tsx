'use client';

import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DeviceTraffic({
    className = '',
    data = [
        { label: 'Desktop', value: 62, color: '#3b82f6' },
        { label: 'Mobile', value: 30, color: '#06b6d4' },
        { label: 'Tablet', value: 8, color: '#f97316' },
    ],
}: {
    className?: string;
    data?: { label: string; value: number; color: string }[];
}) {
    const labels = data.map((d) => d.label);
    const values = data.map((d) => d.value);
    const colors = data.map((d) => d.color);

    const chartData = useMemo(() => ({
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: colors,
                borderWidth: 0,
            },
        ],
    }), [labels, values, colors]);

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { padding: 8 },
        },
        cutout: '68%',
    };

    return (
        <div className={`rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-4 ${className}`}>
            <div className="flex items-center justify-between mb-3">
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Traffic by device</div>
                    <div className="text-sm text-gray-600 mt-1">Share of sessions by device</div>
                </div>
                <div className="text-right">
                    <div className="text-lg font-semibold">100%</div>
                    <div className="text-xs text-gray-400">Total sessions</div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-36 h-36">
                    <div style={{ height: 144 }}>
                        <Doughnut data={chartData} options={options} />
                    </div>
                </div>

                <div className="flex-1">
                    <ul className="space-y-2">
                        {data.map((d) => (
                            <li key={d.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span style={{ background: d.color }} className="w-3 h-3 rounded-full inline-block" />
                                    <div>
                                        <div className="text-sm font-medium">{d.label}</div>
                                        <div className="text-xs text-gray-400">sessions</div>
                                    </div>
                                </div>
                                <div className="text-sm font-semibold">{d.value}%</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
