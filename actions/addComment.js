import { prisma } from "../libs/prismaConfig";
import { getCurrentuser } from "../getUser/currentUser";
import { notFound } from "next/navigation";

export const addComment = async (recData) => {
  const currentUser = await getCurrentuser();

  const { comment, rating, productId } = recData;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      reviews: {
        include: {
          user: true,
        },
      },
    },
  });

  console.log(product);
  const alreadyReviews = product?.reviews.find(
    (item) => item.userId === currentUser.id
  );

  if (alreadyReviews) {
    notFound();
  }

  try {
    const review = await prisma.reviews.create({
      data: {
        comment,
        rating,
        userId: currentUser.id,
        productId,
      },
    });

    return review;
  } catch (err) {
    notFound();
  }
};
