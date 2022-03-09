const bcrypt = require("bcryptjs");
const User = require("../../../../model/User");
module.exports = {
  async execute(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newData = {
      email: data.email,
      password: hash,
      name: data.name,
    };
    const createUser = await User.create(newData);
    return createUser;
  },
};
