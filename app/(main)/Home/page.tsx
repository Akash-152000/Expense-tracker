import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // your next-auth config
import { redirect } from 'next/navigation';

export default async function HomePage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Welcome, {session.user?.name}</h1>
            {/* Your expense tracker here */}
        </div>
    );
}



export const metadata = {
    title: "Home | Expense Tracker",
    description: "Track your daily expenses and get visual insights into your finances.",
};