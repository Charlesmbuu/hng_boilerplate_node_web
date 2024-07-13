import { Request, Response, NextFunction } from "express";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Create Organization");
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Return All organization A User Belongs To Or Own ");
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Return The Specified organization With The Given Id");
};

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Add User To The Organization With The Given Id");
};
