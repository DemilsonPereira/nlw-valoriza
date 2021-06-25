import { Router } from "express";
import { CreateUserController } from "./controllers/Create UserController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export {
  router
}