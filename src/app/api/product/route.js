import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../libs/prismaConfig";
import { getCurrentuser } from "../../../../getUser/currentUser";

export async function POST(req) {
  const currentUser = getCurrentuser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { name, desc, price, brand, category, inStock, image, reviews } =
    await req.json();
  let newProduct;
  try {
    newProduct = await prisma.product.create({
      data: {
        name,
        desc,
        price: parseFloat(price),
        brand,
        category,
        inStock,
        image,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { message: "product created failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ newProduct }, { status: 201 });
}
