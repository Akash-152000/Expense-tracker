'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import BottomNav from '@/components/MobileNav'; // ✅ Corrected import path

const categories = [
    'Rickshaw', 'Metro', 'Train', 'Food', 'Grocery', 'Cigarettes', 'Tea', 'Coffee',
    'Canteen', 'Drinks', 'Movie', 'Games', 'Gambling', 'Others',
];

export default function AddExpensePage() {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ amount, category, dateTime });
    };

    return (
        <div className="flex flex-col min-h-[100dvh] relative bg-white">
            {/* Form Area */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-32 max-w-md w-full mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-semibold text-center">Add New Expense</h2>

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
                        <Label htmlFor="category">Category *</Label>
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

                    <div className="flex gap-2">
                        <Button type="submit" className="flex-1">
                            Save Expense
                        </Button>
                        <Button type="button" variant="ghost" className="flex-1">
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>

            {/* Sticky Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white">
                <BottomNav />
            </div>
        </div>
    );
}
