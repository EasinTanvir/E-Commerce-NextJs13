import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "../../../../libs/PrismaConfig";
export async function POST(req) {
  const { name, email, password } = await req.json();

  let hashPassword, user;
  try {
    hashPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return NextResponse.json(
      { message: "password hashed failed" },
      { status: 500 }
    );
  }

  let existingUser;

  try {
    existingUser = await prisma.user.findUnique({ where: { email } });
  } catch (err) {
    return NextResponse.json({ message: "find user failed" }, { status: 500 });
  }

  if (existingUser) {
    return NextResponse.json(
      { message: "Email already exist" },
      { status: 500 }
    );
  }

  try {
    user = await prisma.user.create({ data: { name, email, hashPassword } });
  } catch (err) {
    return NextResponse.json(
      { message: "User create failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ user }, { status: 201 });
}
