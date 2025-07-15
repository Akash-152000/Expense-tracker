'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';

const categories = [
    'Rickshaw',
    'Metro',
    'Train',
    'Food',
    'Grocery',
    'Cigarettes',
    'Tea',
    'Coffee',
    'Canteen',
    'Drinks',
    'Movie',
    'Games',
    'Gambling',
    'Others',
];

export default function AddExpensePage() {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [dateTime, setDateTime] = useState(
        new Date().toISOString().slice(0, 16)
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Later you will save this to backend
        console.log({ amount, category, dateTime });
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 py-6 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white shadow-sm rounded-lg p-4 space-y-4"
            >
                <h2 className="text-xl font-semibold">Add New Expense</h2>

                <div>
                    <Label htmlFor="amount">Amount *</Label>
                    <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        placeholder="$ 0.00"
                    />
                </div>

                <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm"
                    >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label htmlFor="datetime">Date & Time *</Label>
                    <div className="relative">
                        <Input
                            id="datetime"
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            required
                            className="pr-10"
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <div className="flex justify-between gap-2 pt-4">
                    <Button type="submit" className="w-full">
                        Save Expense
                    </Button>
                    <Button type="button" variant="ghost" className="w-full">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
