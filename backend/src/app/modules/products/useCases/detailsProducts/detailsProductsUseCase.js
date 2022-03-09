const Products = require("../../../../model/Product");
module.exports = {
  async execute(id) {
    const product = await Products.findOne({where: {id}});

    return product;
  },
};
