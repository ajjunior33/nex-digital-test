const bcrypt = require("bcryptjs");
const { response } = require("express");
const User = require("../../../../model/User");
module.exports = {
  async execute(email, password) {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) throw new Error("Email não encontrado.");

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Senha inválida");
    }

    user.password = undefined;

    return user;
  },
};
