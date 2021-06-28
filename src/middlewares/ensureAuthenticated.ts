import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Receber o token
  const authToken = request.headers.authorization
  // console.log(authToken);

  // Validar o token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ")
  // console.log(token);

  try {
    // Validar se o token é válido
    const { sub } = verify(token, "b3424842a65e372c4dbe95b8d5887259") as IPayload;
    // console.log(sub);

    // Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}

export {
  ensureAuthenticated
}