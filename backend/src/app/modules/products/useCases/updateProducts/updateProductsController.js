const Product = require("../../../../model/Product");
const updateProductUseCase = require("./updateProductsUseCase");
const checkExistentProductuseCase = require("../checkExistentProducts/checkExistentProductsUseCase");
module.exports = {
  async handle(request, response) {
    try {
      const { id } = request.params;
      const { name, description, imageUrl } = request.body;
      await checkExistentProductuseCase.execute(id);
      const updateProduct = await updateProductUseCase.execute(id, {
        name,
        description,
        imageUrl,
      });

      return response.status(200).json({
        message: `Produto ${id} editado com sucesso`,
        status: true,
      });
    } catch (err) {
      const message = err.message
        ? err.message
        : "Não foi possível editar o produto.";

      return response.status(400).json({
        message: message,
        status: false,
      });
    }
  },
};
