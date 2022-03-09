const Products = require("../../../../model/Product");
module.exports = {
  async execute() {
    const products = await Products.findAll();

    return products;
  },
};
