const { Router } = require("express");
const authConfig = require("../middlewares/authConfig");
const createProductsController = require("../modules/products/useCases/createProducts/createProductsController");
const deleteProductController = require("../modules/products/useCases/deleteProducts/deleteProductController");
const listAllProductsController = require("../modules/products/useCases/listProducts/listAllProductsController");
const updateProductsController = require("../modules/products/useCases/updateProducts/updateProductsController");
const detailsProductsController = require('../modules/products/useCases/detailsProducts/detailsProductsController')
const ProductsRoutes = Router();
ProductsRoutes.use(authConfig);
ProductsRoutes.get("/", listAllProductsController.handle)
  .get("/:id", detailsProductsController.handle)
  .post("/", createProductsController.handle)
  .put("/:id", updateProductsController.handle)
  .delete("/:id", deleteProductController.handle);
module.exports = ProductsRoutes;
