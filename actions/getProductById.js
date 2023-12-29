import { prisma } from "../libs/prismaConfig";
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
    console.log(err);
  }
}
