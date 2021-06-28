import { Request, Response, NextFunction } from "express";
import { UsersRepositores } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const { user_id } = request;
  // console.log(user_id);

  const usersRepositories = getCustomRepository(UsersRepositores);

  const { admin } = await usersRepositories.findOne(user_id);

  // Verificar se usuario é admin
  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized"
  })
}

export {
  ensureAdmin
}