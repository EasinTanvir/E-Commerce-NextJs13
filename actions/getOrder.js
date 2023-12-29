import { prisma } from "../libs/prismaConfig";
export default async function getOrders() {
  try {
    let orders;

    orders = await prisma.order.findMany({
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
