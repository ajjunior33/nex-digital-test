const Product = require("../../../../model/Product");
module.exports = {
  async execute(id) {
    const checkExistentProduct = await Product.count({ where: { id } });
    if (checkExistentProduct === 0) {
      throw new Error("Produto informado não encontrado.");
    }
  },
};
