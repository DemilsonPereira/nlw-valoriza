import { getCustomRepository } from "typeorm";
import { UsersRepositores } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer"

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositores);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export {
  ListUserService
}