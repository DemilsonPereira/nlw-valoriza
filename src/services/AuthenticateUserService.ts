import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositores } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositores);

    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    // Gerar Token
    const token = sign({
      email: user.email
    }, "b3424842a65e372c4dbe95b8d5887259", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export {
  AuthenticateUserService
}