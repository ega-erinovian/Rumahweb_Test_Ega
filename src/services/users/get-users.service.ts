import { prisma } from "../../lib/prisma";

export const getUsersServices = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};
