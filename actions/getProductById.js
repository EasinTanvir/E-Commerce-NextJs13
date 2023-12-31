import { prisma } from "../libs/prismaConfig";
import { notFound } from "next/navigation";
export default async function getProductsById(id) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdDate: "desc",
          },
        },
      },
    });
    if (!product) {
      return null;
    }
    return product;
  } catch (err) {
    notFound();
  }
}
