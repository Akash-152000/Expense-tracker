'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/MobileNav';
import { getSession } from 'next-auth/react';

export default function AnalyticsPage() {
    const [dateRange, setDateRange] = useState('30');
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const session = await getSession();
            if (!session) router.push('/');
        };
        checkAuth();
    }, [router]);

    return (
        <div className="flex flex-col min-h-screen pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3">
                <h2 className="text-lg font-bold">Analytics</h2>
                <div className="flex gap-2 items-center">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        <option value="7">Last 7 Days</option>
                        <option value="30">Last 30 Days</option>
                        <option value="90">Last 90 Days</option>
                    </select>
                    <Button className="text-sm px-3 py-1">Export CSV</Button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                <Card title="Top Spending Category" value="$0.00" subtitle="No data" color="bg-red-100" />
                <Card title="Average Daily Spending" value="$0.00" subtitle="Daily Average" color="bg-yellow-100" />
                <Card title="Total Transactions" value="0" subtitle="Transactions" color="bg-blue-100" />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4">
                <ChartBox title="Spending by Category" />
                <ChartBox title="Spending Trend" />
            </div>

            {/* Breakdown */}
            <div className="px-4 mt-4 mb-20">
                <div className="p-4 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">Category Breakdown</h3>
                    <div className="text-sm text-gray-500">No data available</div>
                </div>
            </div>

            {/* Bottom Nav (Mobile Only) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                <BottomNav />
            </div>
        </div>
    );
}

function Card({ title, value, subtitle, color }: { title: string, value: string, subtitle: string, color: string }) {
    return (
        <div className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-3 mt-2">
                <div className={`w-8 h-8 rounded-full ${color}`} />
                <div>
                    <p className="text-xs text-gray-500">{subtitle}</p>
                    <p className="font-semibold">{value}</p>
                </div>
            </div>
        </div>
    );
}

function ChartBox({ title }: { title: string }) {
    return (
        <div className="p-4 border rounded shadow-sm min-h-[12rem] flex flex-col">
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="bg-gray-50 flex-1 flex items-center justify-center text-gray-500 text-sm rounded">
                No data available
            </div>
        </div>
    );
}