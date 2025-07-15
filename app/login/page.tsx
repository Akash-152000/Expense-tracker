'use client';

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/Home');
        }
    }, [status, router]);

    if (!mounted || status === 'loading') return null;

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Panel */}
            <div className="flex-1 flex flex-col items-center justify-center bg-black text-white p-8">
                <NextImage
                    src="/logo.png"
                    alt="ExpenseTracker Logo"
                    width={60}
                    height={60}
                    className="mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">ExpenseTracker</h1>
                <p className="text-sm text-gray-300 text-center max-w-xs">
                    This app is requesting the following permissions:
                </p>
                <ul className="text-gray-400 mt-4 text-sm space-y-1">
                    <li>• Verify your identity</li>
                    <li>• Access your email address</li>
                    <li>• Access your basic profile information</li>
                    <li>• Stay signed in to this application</li>
                </ul>
            </div>

            {/* Right Panel */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4 ">
                <AuthButton
                    icon={<FcGoogle size={18} />}
                    label="Continue with Google"
                    onClick={() => signIn('google')}
                />
            </div>
        </div>
    );
}

function AuthButton({
    icon,
    label,
    onClick,
    disabled = false,
}: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className="w-full max-w-sm justify-start gap-3 text-base cursor-pointer"
            variant="outline"
        >
            {icon}
            {label}
        </Button>
    );
}
