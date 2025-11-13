'use client';
import { useGetStatsByProfileMonthQuery } from '@/redux/analytics/analyticsApiSlice';
import { Line } from 'react-chartjs-2';
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
import React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)


export default function ProfileAnalytics({ userId, monthsBack = 12 }: { userId: number, monthsBack: number }) {
    const { data, isLoading, isError, error } = useGetStatsByProfileMonthQuery({
        userId,
        monthsBack,
    });


    if (isLoading) {
        return (
            <div className="w-full p-6 bg-white rounded-lg shadow">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                    <div className="h-96 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }


    if (isError) {
        return (
            <div className="w-full bg-red-50 rounded-lg ">
                <div className='text-red-600'>
                    Error load data {error.toString()}
                </div>
            </div>
        )
    }


    if (!data) return null;

    const chartData = {
        labels: data.data.map((s) => s.monthName),
        datasets: [
            {
                label: 'Watch Profile',
                data: data.data.map((s) => s.views),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true
            }
        ]
    }


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    font: {
                        size: 14,
                        family: 'Inter, sans-serif',
                    },
                    padding: 15
                }
            },
            title: {
                display: true,
                text: 'History watch profile',
                font: {
                    size: 20,
                    weight: 'bold' as const,
                    family: 'Inter, sans-serif',
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                    size: 14,
                },
                bodyFont: {
                    size: 15,
                },
                callbacks: {
                    label: function (context) {
                        return `Watched: ${context.parsed.y}`
                    }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: Math.ceil(data.peak.views / 5),
                    font: {
                        size: 12,
                    },
                },
                title: {
                    display: true,
                    text: 'Numbers watched',
                    font: {
                        size: 14,
                        weight: 'bold' as const,
                    },
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Period',
                    font: {
                        size: 14,
                        weight: 'bold' as const,
                    },
                },
                ticks: {
                    font: {
                        size: 11
                    },
                    maxRotation: 45,
                    minRotation: 45,
                },

            },
        },
        interaction: {
            mode: 'index' as const,
            intersect: false,
        }
    }
    return (<>
        <div className="w-full p-6 bg-white rounded-lg ">


            <div className="h-96 mb-6">
                <Line data={chartData} options={options} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className='p-4 bg-gradient-to-br from-green-50 to-green-100  border-green-400'>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                        Peak watched
                    </p>
                    <p className='text-3xl font-bold text-green-700'>
                        {data.peak.views}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        {data.peak.month.monthName}
                    </p>
                </div>
                <div className='p-4 bg-gradient-to-br from-green-50 to-green-100  border-green-400'>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                        Minimum watched
                    </p>
                    <p className='text-3xl font-bold text-green-700'>
                        {data.minimum.views}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                        {data.peak.month.monthName}
                    </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className='text-sm font-medium text-gray-600 mb-1'>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                            All watched
                        </p>
                        <p className="text-3xl font-bold text-purple-700">{data.total}</p>
                        <p className="text-xs text-gray-600 mt-1">
                            {monthsBack}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}