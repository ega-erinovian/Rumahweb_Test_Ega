import { prisma } from "../../lib/prisma";

export const getUserServices = async (id: number) => {
  try {
    const user = await prisma.user.findFirst();
    return user;
  } catch (error) {
    throw error;
  }
};
