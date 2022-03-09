const { generateToken } = require("../../../../utils/generateToken");
const authenticateUserUseCase = require("./authenticateUserUseCase");

module.exports = {
  async handle(request, response) {
    try {
      const { email, password } = request.body;

      const authenticate = await authenticateUserUseCase.execute(
        email,
        password
      );
      return response.status(200).json({
        user: authenticate,
        token: generateToken({ id: authenticate.id }),
      });
    } catch (err) {
      const message = err.message
        ? err.message
        : "Não foi possível fazer sua autenticação";
      return response.status(401).json({
        message,
        status: false,
      });
    }
  },
};
