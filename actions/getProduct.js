import { prisma } from "../libs/prismaConfig";
export default async function getProducts(params) {
  try {
    const { category, searchTerm } = params;

    let searchString = searchTerm;

    if (!searchTerm) {
      searchString = "";
    }
    let query = {};
    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
            desc: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
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

    return products;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getFeatureProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        type: "feature",
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

    return products;
  } catch (err) {
    throw new Error(err);
  }
}
export async function getNewArrivalProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        type: "new",
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

    return products;
  } catch (err) {
    throw new Error(err);
  }
}
