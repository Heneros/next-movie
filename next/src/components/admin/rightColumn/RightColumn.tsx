'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';

type Notification = { id: string; title: string; subtitle?: string; time: string; read?: boolean };
type Activity = { id: string; text: string; time: string; avatar?: string };
type Contact = { id: string; name: string; role?: string; avatar?: string };

const demoNotifications: Notification[] = [
    { id: 'n1', title: 'You fixed a bug.', subtitle: 'Ticket #123', time: 'Just now', read: false },
    { id: 'n2', title: 'New user registered.', subtitle: 'rustamq1@gmail.com', time: '59 minutes ago', read: true },
    { id: 'n3', title: 'Server restarted.', subtitle: 'Infra', time: '12 hours ago', read: true },
];

const demoActivities: Activity[] = [
    { id: 'a1', text: 'Changed the style of Button component', time: 'Just now', avatar: undefined },
    { id: 'a2', text: 'Released a new version', time: '59 minutes ago' },
    { id: 'a3', text: 'Submitted a bug report', time: '12 hours ago' },
];

const demoContacts: Contact[] = [
    { id: 'c1', name: 'Natali Craig', role: 'Product' },
    { id: 'c2', name: 'Drew Cano', role: 'Designer' },
    { id: 'c3', name: 'Andi Lane', role: 'Developer' },
    { id: 'c4', name: 'Koray Okumus', role: 'Marketing' },
];

function Avatar({ name, size = 36 }: { name: string | undefined; size?: number }) {
    const initials = (name ?? 'U').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
    const bg = '#' + (Math.abs(hashCode(name ?? 'anon')) % 0xFFFFFF).toString(16).padStart(6, '0');
    return (
        <div
            style={{ backgroundColor: bg }}
            className="flex items-center justify-center rounded-full text-white font-medium"
            aria-hidden
            title={name}
        >
            <div style={{ width: size, height: size, lineHeight: `${size}px` }}>{initials}</div>
        </div>
    );
}
function hashCode(str: string) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
    return h;
}

export default function RightColumn() {
    return (
        <aside className="w-72">
            <div className="sticky top-6 space-y-4">
                <NotificationsPanel items={demoNotifications} />
                <ActivitiesPanel items={demoActivities} />
                <ContactsPanel items={demoContacts} />
            </div>
        </aside>
    );
}

function NotificationsPanel({ items }: { items: Notification[] }) {
    return (
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Notifications</h3>
                <Link href="/notifications" className="text-xs text-gray-400">See all</Link>
            </div>

            <ul className="space-y-2">
                {items.map(it => (
                    <motion.li key={it.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className={clsx('flex items-start gap-3 p-2 rounded-md', it.read ? 'hover:bg-white/5' : 'bg-white/6')}>
                        <div className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-slate-700 text-white text-sm">
                  
                            🔔
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{it.title}</div>
                            {it.subtitle && <div className="text-xs text-gray-400 truncate">{it.subtitle}</div>}
                        </div>
                        <div className="text-xs text-gray-400 ml-2 whitespace-nowrap">{it.time}</div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}


function ActivitiesPanel({ items }: { items: Activity[] }) {
    return (
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Activities</h3>
                <span className="text-xs text-gray-400">Today</span>
            </div>

            <ul className="space-y-3">
                {items.map(it => (
                    <motion.li key={it.id} initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                        <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden">
                            <Avatar name={it.avatar ?? it.text.split(' ').slice(0, 2).join(' ')} size={36} />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm">{it.text}</div>
                            <div className="text-xs text-gray-400 mt-1">{it.time}</div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}


function ContactsPanel({ items }: { items: Contact[] }) {
    return (
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">Contacts</h3>
                <Link href="/contacts" className="text-xs text-gray-400">Manage</Link>
            </div>

            <ul className="space-y-2">
                {items.map(c => (
                    <li key={c.id} className="flex items-center gap-3">
                        <div className="w-9 h-9">
                            <Avatar name={c.name} size={36} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm truncate">{c.name}</div>
                            <div className="text-xs text-gray-400 truncate">{c.role}</div>
                        </div>
                        <button className="text-xs text-sky-500 px-2 py-1 rounded-md hover:bg-white/5">Message</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
