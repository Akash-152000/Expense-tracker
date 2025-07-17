import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { Session } from 'next-auth';

import Sidebar from '@/components/Sidebar';
import MobileTopBar from '@/components/MobileTopBar';
import MobileNav from '@/components/MobileNav';
import { UserProvider } from '@/app/context/UserContext';

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <UserProvider>
            <div className="flex min-h-screen">
                {/* ✅ Desktop sidebar (hidden on mobile) */}
                <div className="hidden md:block">
                    <Sidebar user={session?.user as Session['user']} />
                </div>

                {/* ✅ Main area with top bar (mobile) + content + bottom nav (mobile) */}
                <div className="flex-1 flex flex-col">
                    <MobileTopBar />
                    <main className="flex-1 p-6 pb-20">{children}</main>
                    <MobileNav />
                </div>
            </div>
        </UserProvider>
    );
}
