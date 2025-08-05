import { NextFunction, Request, Response } from "express";
import { loginServices, registerServices } from "../services/auth/auth.service";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginServices(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerServices(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
