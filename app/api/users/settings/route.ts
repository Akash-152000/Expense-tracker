import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET user settings
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const settings = await prisma.userSetting.findUnique({
        where: { userId: session.user.email },
    });

    return NextResponse.json(settings || {});
}

// POST to update name/currency
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, currency } = body;

    const settings = await prisma.userSetting.upsert({
        where: { userId: session.user.email },
        update: { name, currency },
        create: { userId: session.user.email, name, currency },
    });

    return NextResponse.json(settings);
}
