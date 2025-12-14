'use client';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export type StatCardProps = {
    title: string;
    value: string | number;
    delta?: number;
    deltaText?: string;
    hint?: string;
    className?: string;
};

export default function StatCard({ title, value, delta, deltaText, hint, className }: StatCardProps) {
    const deltaPositive = typeof delta === 'number' && delta > 0;
    const deltaNegative = typeof delta === 'number' && delta < 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className={clsx('rounded-xl p-4 bg-white/80 backdrop-blur-sm border border-white/10 shadow-sm', className)}
            role="group"
            aria-labelledby={`stat-${title}`}
        >
            <div className="flex items-start justify-between">
                <div>
                    <div id={`stat-${title}`} className="text-xs text-gray-500 uppercase tracking-wide">{title}</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
                    {hint && <div className="mt-1 text-xs text-gray-400">{hint}</div>}
                </div>

                {typeof delta === 'number' && (
                    <div className="ml-4 flex flex-col items-end">
                        <div className={clsx('px-2 py-1 rounded-md text-sm font-medium', {
                            'bg-green-100 text-green-700': deltaPositive,
                            'bg-red-100 text-red-700': deltaNegative,
                            'bg-gray-100 text-gray-700': !deltaPositive && !deltaNegative,
                        })}>
                            {deltaPositive ? '▲' : deltaNegative ? '▼' : '–'} {Math.abs(delta).toFixed(1)}%
                        </div>
                        {deltaText && <div className="text-xs text-gray-400 mt-1">{deltaText}</div>}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
