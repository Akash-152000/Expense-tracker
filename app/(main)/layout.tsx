import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import type { Session } from 'next-auth'; // ✅ Add this
import Sidebar from '@/components/Sidebar';

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <div className="flex min-h-screen">
            <Sidebar user={session?.user as Session['user']} />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
