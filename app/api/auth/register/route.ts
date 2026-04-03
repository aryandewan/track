import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const hashedPassword = await bcrypt.hashSync(password, 8);
  const jwtSecret = process.env.JWT_SECRET as string;

  try {
    if (!jwtSecret) {
      return NextResponse.json(
        { error: "JWT_SECRET is not configured" },
        { status: 500 },
      );
    }

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "24h" });
    return NextResponse.json({ token }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 503 },
    );
  }
}
