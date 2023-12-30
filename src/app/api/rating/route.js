import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../libs/prismaConfig";
import { getCurrentuser } from "../../../../getUser/currentUser";

export async function POST(req) {
  const currentUser = await getCurrentuser();
  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { comment, rating, product, userId } = await req.json();

  try {
    const deliverOrder = currentUser?.orders.some((order) =>
      order.products.find((item) => item.id === product.id)
    );

    const alreadyReviews = product?.reviews.find(
      (item) => item.userId === currentUser.id
    );

    if (alreadyReviews) {
      return NextResponse.json(
        { mesage: "you already reviews this product" },
        { status: 500 }
      );
    }

    const review = await prisma.reviews.create({
      data: {
        comment,
        rating,
        userId,
        productId: product.id,
      },
    });
    return NextResponse.json({ review }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { mesage: "product update failed" },
      { status: 500 }
    );
  }
}
