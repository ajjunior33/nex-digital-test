const checkExistentProductsUseCase = require("../checkExistentProducts/checkExistentProductsUseCase");
const detailsProductsUseCase = require("./detailsProductsUseCase");

module.exports = {
  async handle(request, response) {
    try {
      const { id } = request.params;
      await checkExistentProductsUseCase.execute(id);
      const details = await detailsProductsUseCase.execute(id);
      
      return response.status(200).json({
        message:`Detalhes do produto ${id}`,
        status: true,
        data: details
      })
    } catch (err) {
      const message = err.message ? err.message : "Não foi possível trazer os dados de produtos.";
      return response.status(400).json({
        message,
        status: false,
      });
    }
  },
};
