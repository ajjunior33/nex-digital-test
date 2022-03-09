const createProductsUseCase = require("./createProductsUseCase");

module.exports = {
  async handle(request, response) {
    try {
      const { name, description, imageUrl } = request.body;
      const createProduct = await createProductsUseCase.execute({
        name,
        description,
        imageUrl,
      });

      return response.status(200).json({
        message: "Produto cadastrado com sucesso",
        status: true,
        data: createProduct,
      });
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: "Houve um erro ao criar o produto.",
        status: false,
      });
    }
  },
};
