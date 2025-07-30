'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';

export default function SettingsPage() {
    const { data: session, status } = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [currency, setCurrency] = useState('INR');
    const [loading, setLoading] = useState(false);

    // Redirect if not authenticated
    useEffect(() => {
        if (status === 'unauthenticated') {
            redirect('/');
        }
    }, [status]);

    // Load user settings on mount
    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || '');
            setEmail(session.user.email || '');

            // Load from backend
            fetch('/api/users/settings')
                .then((res) => res.json())
                .then((data) => {
                    if (data?.currency) {
                        setCurrency(data.currency);
                    }
                });
        }
    }, [session]);

    const handleSave = async () => {
        setLoading(true);
        const res = await fetch('/api/users/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, currency }),
        });

        if (res.ok) {
            alert('Settings saved!');
        } else {
            alert('Failed to save settings.');
        }

        setLoading(false);
    };

    if (status === 'loading') return <div className="p-4">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Profile Settings */}
            <Section title="Profile Settings">
                <EditableInput label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Email" value={email} />
            </Section>

            {/* Currency Settings */}
            <Section title="Currency Settings">
                <label className="block mb-1 text-sm font-medium">Primary Currency</label>
                <select
                    className="w-full border rounded px-3 py-2"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                </select>

                <button
                    onClick={handleSave}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save Settings'}
                </button>
            </Section>

            {/* Categories & Tags */}
            <Section title="Categories & Tags">
                <div className="flex gap-2 flex-wrap">
                    <input type="text" placeholder="Category name" className="flex-1 border rounded px-3 py-2" />
                    <input type="text" placeholder="Icon (e.g. fas fa-tag)" className="w-40 border rounded px-3 py-2" />
                    <input type="color" className="w-10 h-10 p-1 rounded" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
                </div>
            </Section>

            {/* Data Management */}
            <Section title="Data Management">
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mb-2">Export All Data</button>
                <button className="w-full bg-red-500 text-white px-4 py-2 rounded">Clear All Data</button>
            </Section>

            {/* Account */}
            <Section title="Account">
                <button
                    className="w-full border px-4 py-2 rounded"
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    Sign Out
                </button>
            </Section>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {children}
        </div>
    );
}

function Input({ label, value }: { label: string; value: string }) {
    return (
        <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <input
                type="text"
                value={value}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
            />
        </div>
    );
}

function EditableInput({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="w-full border rounded px-3 py-2"
            />
        </div>
    );
}
