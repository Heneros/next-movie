'use client';

import {
    Line
} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface MonthlyStatsChartProps {
    data: Array<{
        year: number;
        month: number;
        count: number;
        label: string;
    }>;
}

export default function MonthlyStatsChart({ data
}: MonthlyStatsChartProps) {
    const sortedData = [...data
    ].sort((a, b) => {
        if (a.year === b.year) return a.month - b.month;
        return a.year - b.year;
    });

    const chartData = {
        labels: sortedData.map(item => item.label),
        datasets: [
            {
                label: 'Profile Views',
                data: sortedData.map(item => item.count),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,

            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Monthly Profile Views',
                font: {
                    size: 16,
                },
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Views',
                },
                ticks: {
                    stepSize: 1,
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Month',
                },
            },
        },
    };

    return (
        <div className="w-full h-[400px]">
            <Line data={chartData
            } options={options
            } />
        </div>
    );
}