import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../libs/prismaConfig";
import { getCurrentuser } from "../../../../getUser/currentUser";

export async function POST(req) {
  const currentUser = await getCurrentuser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { name, desc, price, brand, category, inStock, images, reviews } =
    await req.json();
  console.log(images);
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
        images,
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

export async function PUT(req) {
  const currentUser = await getCurrentuser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id, inStock } = await req.json();

  try {
    await prisma.product.update({
      where: { id },
      data: {
        inStock: inStock,
      },
    });
    return NextResponse.json({ mesage: "product update" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { mesage: "product update failed" },
      { status: 500 }
    );
  }
}
