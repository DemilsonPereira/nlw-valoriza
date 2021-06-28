import { Request, Response } from "express";
import { ListaUserReceiveComplimentsService } from "../services/ListUserReceiveComlimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listaUserReceiveComplimentsService = new ListaUserReceiveComplimentsService();

    const compliments = await listaUserReceiveComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export {
  ListUserReceiveComplimentsController
}