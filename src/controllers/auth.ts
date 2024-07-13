import { Request, Response, NextFunction } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Registers A User");
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Authenticate And Login A User");
};
