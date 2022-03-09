const listAllProductsUseCase = require("./listAllProductsUseCase");

module.exports = {
  async handle(request, response) {
    try {
      const listProducts = await listAllProductsUseCase.execute();
      return response.status(200).json({
        message: "Listagem de produtos.",
        status: true,
        data: listProducts,
      });
    } catch (err) {
      return response.status(400).json({
        message: "Não foi possível trazer os dados de produtos.",
        status: false,
      });
    }
  },
};
