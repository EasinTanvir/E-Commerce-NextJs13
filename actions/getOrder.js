import { prisma } from "../libs/prismaConfig";
export default async function getOrders(id) {
  try {
    let orders;

    orders = await prisma.order.findMany({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
      orderBy: {
        createDate: "desc",
      },
    });

    return orders;
  } catch (err) {
    throw new Error(err);
  }
}
export async function getOrderById(id) {
  try {
    let orders;

    orders = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    return orders;
  } catch (err) {
    throw new Error(err);
  }
}
