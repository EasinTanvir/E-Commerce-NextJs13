import { prisma } from "../libs/prismaConfig";
export default async function getUser() {
  try {
    let user;

    user = await prisma.user.findMany();

    return user;
  } catch (err) {
    console.log(err);
  }
}
