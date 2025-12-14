// components/global/Loader.tsx
'use client';

import React, { useEffect, useState } from 'react';

type LoaderProps = {
    visible?: boolean;       // контролирует видимость
    overlay?: boolean;       // fullscreen overlay
    message?: string;        // текст под спиннером
    size?: number;           // размер спиннера (px)
    className?: string;
};

export default function Loader({
    visible = true,
    overlay = false,
    message = 'Loading...',
    size = 48,
    className = '',
}: LoaderProps) {
    const TRANSITION_MS = 260;
    const [mounted, setMounted] = useState<boolean>(visible);
    const [show, setShow] = useState<boolean>(visible);

    // синхронизируем видимость + плавный уход
    useEffect(() => {
        if (visible) {
            setMounted(true);          // монтируем в DOM
            // следующий тик — показываем (для корректной анимации)
            requestAnimationFrame(() => setShow(true));
            return;
        }
        // начинаем скрытие
        setShow(false);
        const t = setTimeout(() => setMounted(false), TRANSITION_MS);
        return () => clearTimeout(t);
    }, [visible]);

    if (!mounted) return null;

    const overlayStyle: React.CSSProperties = overlay
        ? {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.45)',
            zIndex: 9999,
            transition: `opacity ${TRANSITION_MS}ms ease`,
            opacity: show ? 1 : 0,
        }
        : {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: `opacity ${TRANSITION_MS}ms ease`,
            opacity: show ? 1 : 0,
        };

    const boxStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    };

    const spinnerStyle: React.CSSProperties = {
        width: size,
        height: size,
        display: 'block',
    };

    return (
        <div style={overlayStyle} className={className} role="status" aria-live="polite">
            <div style={boxStyle}>
                {/* SVG spinner */}
                <svg style={spinnerStyle} viewBox="0 0 50 50" aria-hidden>
                    <defs>
                        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="url(#g)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="31.4 31.4"
                        transform="rotate(-90 25 25)"
                        style={{
                            transformOrigin: '50% 50%',
                            animation: 'loader-rotate 1s linear infinite',
                        }}
                    />
                </svg>

                {/* вспомогательный текст для экрана и визуального отображения */}
                <div style={{ fontSize: 14, color: overlay ? '#fff' : '#111' }}>
                    {message}
                </div>

                <style jsx>{`
          @keyframes loader-rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
            </div>
        </div>
    );
}
