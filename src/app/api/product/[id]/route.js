import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../libs/prismaConfig";
import { getCurrentuser } from "../../../../../getUser/currentUser";
export async function DELETE(req, { params: { id } }) {
  const currentUser = await getCurrentuser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  console.log(id);

  try {
    await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json({ mesage: "product deleted" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { mesage: "product deleted failed" },
      { status: 500 }
    );
  }
}
