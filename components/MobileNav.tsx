'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    PlusCircle,
    BarChart2,
    Settings,
} from 'lucide-react'; // You can customize icons

const navItems = [
    { label: 'Home', href: '/Home', icon: <Home size={20} /> },
    { label: 'Add', href: '/add_expenses', icon: <PlusCircle size={20} /> },
    { label: 'Analytics', href: '/analytics', icon: <BarChart2 size={20} /> },
    { label: 'Settings', href: '/settings', icon: <Settings size={20} /> },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow md:hidden">
            <ul className="flex justify-around py-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center text-xs ${isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
