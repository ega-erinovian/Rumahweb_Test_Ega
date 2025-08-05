import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { comparePassword, hashPassword } from "../../lib/argon";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

interface Body extends Pick<User, "email" | "password"> {}
export const loginServices = async (body: Body) => {
  try {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const { password: pwd, ...userWithoutPassword } = user;

    const token = sign({ id: user.id }, JWT_SECRET!, { expiresIn: "2h" });

    return { ...userWithoutPassword, token };
  } catch (error) {
    throw error;
  }
};

export const registerServices = async (body: User) => {
  try {
    const { email, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Account exist");
    }

    const hashedPassword = await hashPassword(password);

    return await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw error;
  }
};
