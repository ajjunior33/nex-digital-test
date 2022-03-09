const { Router } = require("express");
const authenticateController = require("../modules/auth/useCases/authenticateUser/authenticateController");
const createUserController = require("../modules/users/useCases/createUser/createUserController");

const UsersRoutes = Router();

UsersRoutes.post("/", createUserController.handle);
UsersRoutes.post("/auth", authenticateController.handle);
module.exports = UsersRoutes;
