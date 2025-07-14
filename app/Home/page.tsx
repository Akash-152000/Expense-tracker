

export default function HomePage() {

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
            <p>This is your /home route using App Router</p>

        </main>
    );
}


export const metadata = {
    title: "Home | Expense Tracker",
    description: "Track your daily expenses and get visual insights into your finances.",
};