import { NextFunction, Request, Response } from "express";
import { getUserServices } from "../services/users/get-user.service";
import { getUsersServices } from "../services/users/get-users.service";

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersServices();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUserServices(req.params.uuid);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
