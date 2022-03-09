const Product = require("../../../../model/Product");
module.exports = {
  async execute(id, data) {
    const product = await Product.update(data, { where: { id } });
    return product;
  },
};
