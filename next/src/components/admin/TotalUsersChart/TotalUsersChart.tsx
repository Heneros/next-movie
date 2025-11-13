
'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

type Props = {
    className?: string;

    labels?: string[];
    values?: number[];
};

export default function TotalUsersChart({
    className = '',
    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    values = [8000, 10000, 12000, 18000, 24000, 21000, 26000],
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

  
    const gradient = useMemo(() => {
        const canvas = canvasRef.current;
        if (!canvas) return (ctx: CanvasRenderingContext2D | null) => null;
        const ctx = canvas.getContext('2d');
        if (!ctx) return (ctx: CanvasRenderingContext2D | null) => null;

        const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
        g.addColorStop(0, 'rgba(59,130,246,0.28)'); 
        g.addColorStop(0.6, 'rgba(59,130,246,0.08)');
        g.addColorStop(1, 'rgba(59,130,246,0.02)');
        return g;
    }, [canvasRef.current]);


    const data = {
        labels,
        datasets: [
            {
                label: 'This year',
                data: values,
                fill: true,
                backgroundColor: (ctx: any) => {
               
                    try {
                        const canvas = ctx.chart.canvas;
                        const g = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height);
                        g.addColorStop(0, 'rgba(59,130,246,0.28)');
                        g.addColorStop(0.6, 'rgba(59,130,246,0.08)');
                        g.addColorStop(1, 'rgba(59,130,246,0.02)');
                        return g;
                    } catch {
                        return 'rgba(59,130,246,0.08)';
                    }
                },
                borderColor: '#3b82f6',
                tension: 0.35,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#3b82f6',
            },
 
            {
                label: 'Last year',
                data: values.map((v) => Math.round(v * 0.78)),
                fill: false,
                borderColor: '#94a3b8', 
                borderDash: [6, 6],
                tension: 0.35,
                pointRadius: 0,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
                padding: 8,
                titleFont: { size: 12 },
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#64748b' },
            },
            y: {
                grid: {
                    color: 'rgba(15,23,42,0.04)',
                    // tickBorderDash: false,
                    drawTicks: false,
                    drawOnChartArea: false
                    // drawBorder: false,
                },
                ticks: {
                    color: '#64748b',
                    callback: function (value) {
             
                        if (typeof value === 'number') {
                            if (value >= 1000) return (value / 1000) + 'k';
                            return value;
                        }
                        return value;
                    },
                },
            },
        },
    };

    return (
        <div className={`rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-6 ${className}`}>
            <div className="flex items-start justify-between mb-3">
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Total Users</div>
                    <div className="mt-1 text-sm text-gray-600">This year vs last year</div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-semibold">26,021</div>
                    <div className="text-xs text-green-600">+5.5% vs last month</div>
                </div>
            </div>

            <div style={{ height: 300 }} className="w-full">
   
                <Line ref={(el: any) => { if (el && el.canvas) canvasRef.current = el.canvas; }} data={data} options={options} />
            </div>
        </div>
    );
}
