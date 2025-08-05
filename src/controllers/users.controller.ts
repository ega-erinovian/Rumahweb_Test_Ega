import { NextFunction, Request, Response } from "express";
import { getUserServices } from "../services/users/get-user.service";

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUserServices(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
