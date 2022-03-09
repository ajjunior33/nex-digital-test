const User = require("../../../../model/User");
const createUserUseCase = require("./createUserUseCase");
module.exports = {
  async handle(request, response) {
    try {
      const { name, email, password } = request.body;
      const checkEmail = await User.findOne({ where: { email } });
      if (!!checkEmail) {
        return response.status(400).json({
          message: "Já existe um usuário utilizando esse email.",
          status: false,
          type: "error",
        });
      }

      const user = await createUserUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(200).json({
        message: "Usuário criado com sucesso",
        status: true,
        data: user,
      });
    } catch (err) {
      return response.status(400).json({
        message: "Não foí possível criar o usuário",
        status: false,
        type: "error",
      });
    }
  },
};
