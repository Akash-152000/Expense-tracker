'use client';

import { useSession } from 'next-auth/react';

export default function MobileTopBar() {
    const { data: session } = useSession();
    const userName = session?.user?.name || 'User';

    return (
        <div className="md:hidden w-full h-14 flex items-center justify-center bg-blue-600 text-white">
            <span className="font-medium text-lg truncate">{userName}</span>
        </div>
    );
}
