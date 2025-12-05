'use client';

import React, { useMemo } from 'react';
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
    type ChartOptions,
} from 'chart.js';
import { useGetStatsByProfileMonthlyQuery } from '@/redux/analytics/analyticsApiSlice';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

interface Props {
    userId?: number | null;
    monthsBack?: number;
}

interface MonthlyDataItem {
    year: number;
    month: number;
    count: number;
    label: string;
}

export default function ProfileAnalytics({ userId, monthsBack = 12 }: Props) {
    const { data, isLoading, isError, error } = useGetStatsByProfileMonthlyQuery(
        { userId: Number(userId ?? 0), monthsBack },
        { skip: !userId },
    );

    console.log('Raw data:', data);

    const normalizedData = useMemo(() => {
        if (!data) return [];

        if (Array.isArray(data)) {
            return data as MonthlyDataItem[];
        }

        // Если data.data существует и это массив
        if (data.data && Array.isArray(data.data)) {
            return data.data as MonthlyDataItem[];
        }

        return [];
    }, [data]);

    console.log('Normalized data:', normalizedData);


    const series = useMemo(() => {
        return normalizedData.map((item) => ({
            monthName: item.label,
            views: item.count,
        }));
    }, [normalizedData]);


    const stats = useMemo(() => {
        if (series.length === 0) {
            return {
                peakViews: 0,
                peakMonth: '-',
                minViews: 0,
                minMonth: '-',
                total: 0,
            };
        }

        const peakIndex = series.reduce(
            (maxIdx, curr, idx, arr) => (curr.views > arr[maxIdx].views ? idx : maxIdx),
            0,
        );

        const minIndex = series.reduce(
            (minIdx, curr, idx, arr) => (curr.views < arr[minIdx].views ? idx : minIdx),
            0,
        );

        const total = series.reduce((sum, item) => sum + item.views, 0);

        return {
            peakViews: series[peakIndex].views,
            peakMonth: series[peakIndex].monthName,
            minViews: series[minIndex].views,
            minMonth: series[minIndex].monthName,
            total,
        };
    }, [series]);

    const labels = useMemo(() => series.map((s) => s.monthName), [series]);
    const values = useMemo(() => series.map((s) => s.views), [series]);

    const maxForScale = Math.max(1, ...values);
    const stepSize = Math.max(1, Math.ceil(maxForScale / 5));

    const chartData = useMemo(
        () => ({
            labels,
            datasets: [
                {
                    label: 'Просмотры профиля',
                    data: values,
                    tension: 0.35,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    borderWidth: 2,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                },
            ],
        }),
        [labels, values],
    );

    const options: ChartOptions<'line'> = useMemo(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'История просмотров профиля' },
                tooltip: {
                    callbacks: {
                        label(ctx) {
                            const y = ctx.parsed.y ?? 0;
                            return `Просмотров: ${y}`;
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize },
                    title: { display: true, text: 'Количество просмотров' },
                },
                x: {
                    ticks: { maxRotation: 45, minRotation: 45 },
                    title: { display: true, text: 'Период' },
                },
            },
            interaction: { mode: 'index', intersect: false },
        }),
        [stepSize],
    );

    // UI States
    if (!userId) {
        return (
            <div role="status" className="p-6 bg-yellow-50 rounded">
                <p className="text-yellow-700">User id отсутствует</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full p-6 bg-white rounded-lg shadow">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />
                    <div className="h-96 bg-gray-200 rounded" />
                </div>
            </div>
        );
    }

    if (isError) {
        const msg = (error as any)?.data?.message || (error as any)?.message || JSON.stringify(error);
        return (
            <div role="alert" aria-live="assertive" className="w-full p-4 bg-red-50 rounded border border-red-200">
                <p className="text-red-700">Ошибка загрузки статистики: {msg}</p>
            </div>
        );
    }

    if (series.length === 0) {
        return (
            <div className="w-full p-6 bg-white rounded-lg shadow">
                <p className="text-gray-600">Нет данных за выбранный период.</p>
            </div>
        );
    }


    const allZero = values.every((v) => v === 0);

    return (
        <section className="w-full p-6 bg-white rounded-lg shadow" aria-label="Profile view statistics">
            <div className="h-96 mb-6">
                <Line data={chartData} options={options} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-sm text-gray-600 mb-1">🔥 Пик просмотров</p>
                    <p className="text-3xl font-bold text-green-700">{stats.peakViews}</p>
                    <p className="text-xs text-gray-600 mt-1">{stats.peakMonth}</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">📉 Минимум</p>
                    <p className="text-3xl font-bold text-blue-700">{stats.minViews}</p>
                    <p className="text-xs text-gray-600 mt-1">{stats.minMonth}</p>
                </div>

                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <p className="text-sm text-gray-600 mb-1">📊 Всего</p>
                    <p className="text-3xl font-bold text-purple-700">{stats.total}</p>
                    <p className="text-xs text-gray-600 mt-1">
                        {allZero ? 'Пока нет просмотров' : `За ${monthsBack} мес.`}
                    </p>
                </div>
            </div>

            {allZero && (
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                    <p className="text-sm text-blue-700">
                        📊 График готов к отображению данных. Просмотры профиля будут отображаться здесь.
                    </p>
                </div>
            )}
        </section>
    );
}