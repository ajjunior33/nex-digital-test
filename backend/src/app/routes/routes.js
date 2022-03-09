const { Router } = require("express");

const UsersRoutes = require("./users.routes");
const ProductsRoutes = require("./products.routes");

const routes = Router();

routes
  .get("/", async (request, response) => {
    try {
      return response.status(200).json({
        message: "OK",
        version: 1,
        author: {
          name: "André Souza",
          email: "ajjunior33@gmail.com",
        },
      });
    } catch (error) {
      return response.status(400).json({
        message: "ERROR",
        version: 1,
      });
    }
  })
  .use("/users", UsersRoutes)
  .use("/products", ProductsRoutes);

module.exports = routes;
