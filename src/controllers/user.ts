import { Request, Response, NextFunction } from "express";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Return The User With The Specified Id");
};
