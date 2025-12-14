'use client';

import { motion } from 'framer-motion';

export default function SmallLoader({
    size = 24,
    color = '#0ea5e9',
    speed = 0.8,
}: {
    size?: number;
    color?: string;
    speed?: number;
}) {
    const dotSize = size * 0.25;

    return (
        <div
            className="flex items-center justify-center"
            style={{ height: size, width: size * 2 }}
        >
            <motion.span
                className="rounded-full"
                style={{ backgroundColor: color, width: dotSize, height: dotSize }}
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0,
                }}
            />
            <motion.span
                className="rounded-full ml-1.5"
                style={{ backgroundColor: color, width: dotSize, height: dotSize }}
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: speed / 3,
                }}
            />
            <motion.span
                className="rounded-full ml-1.5"
                style={{ backgroundColor: color, width: dotSize, height: dotSize }}
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (speed / 3) * 2,
                }}
            />
        </div>
    );
}
