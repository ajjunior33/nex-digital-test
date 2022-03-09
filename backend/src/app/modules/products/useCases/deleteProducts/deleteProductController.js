const checkExistentProductsUseCase = require("../checkExistentProducts/checkExistentProductsUseCase");
const deleteProductsUseCase = require("./deleteProductsUseCase");
module.exports = {
  async handle(request, response) {
    try {
      const { id } = request.params;
      await checkExistentProductsUseCase.execute(id);

      await deleteProductsUseCase.execute(id);

      return response.status(200).json({
        message: "Produto deletado com sucesso.",
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
