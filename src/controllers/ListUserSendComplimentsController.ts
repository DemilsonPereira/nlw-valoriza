import { Request, Response } from "express";
import { ListaUserSendComplimentsService } from "../services/ListUserSendComlimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listaUserSendComplimentsService = new ListaUserSendComplimentsService();

    const compliments = await listaUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export {
  ListUserSendComplimentsController
}



