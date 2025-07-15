import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AnalyticsPage() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Analytics {session.user?.name}</h1>
            <p>Track your expenses through charts, trends, and category insights.</p>
        </main>
    );
}



export const metadata = {
    title: "Analytics | Expense Tracker",
    description: "Visualize your financial data and discover spending patterns.",
};