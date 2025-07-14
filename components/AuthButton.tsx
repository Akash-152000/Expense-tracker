'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButton() {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <div className="flex gap-2 items-center">
                <p>Hello, {session.user.name}</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        );
    }

    return <Button onClick={() => signIn("google")}>Sign in with Google</Button>;
}
