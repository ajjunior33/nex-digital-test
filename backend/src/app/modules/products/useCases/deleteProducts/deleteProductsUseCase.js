const Product = require("../../../../model/Product");
module.exports = {
  async execute(id) {
    const product = await Product.destroy({ where: { id } });
    return product;
  },
};
