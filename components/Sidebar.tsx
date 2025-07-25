'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'Dashboard', href: '/Home' },
    { label: 'Add Expense', href: '/add_expenses' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Settings', href: '/settings' },
];

type SidebarProps = {
    user?: {
        name?: string | null;
    };
};

export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-full bg-blue-600 text-white p-6 space-y-4">
            <div className="text-xl font-semibold">{user?.name || 'ExpenseTracker'}</div>
            <nav className="space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            'block px-3 py-2 rounded hover:bg-blue-700 transition',
                            pathname === item.href ? 'bg-white text-blue-600 font-medium' : ''
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
