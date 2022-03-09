const Product = require("../../../../model/Product");
module.exports = {
  async execute(data) {
    const createProduct = await Product.create(data);
    return createProduct;
  },
};
