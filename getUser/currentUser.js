import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { prisma } from "../libs/prismaConfig";

export async function getSession() {
  return await getServerSession(authOptions);
}
export async function getCurrentuser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        orders: true,
      },
    });

    if (!currentUser) {
      return null;
    }
    return {
      ...currentUser,

      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch (err) {
    console.log(err);
  }
}
