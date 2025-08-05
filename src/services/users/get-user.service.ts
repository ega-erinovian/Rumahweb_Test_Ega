import { prisma } from "../../lib/prisma";

export const getUserServices = async (uuid: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: uuid },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
