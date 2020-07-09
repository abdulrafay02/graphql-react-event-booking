const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User already exists.");
      }
      const hashedPwd = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        password: hashedPwd,
      });
      const res = await user.save();

      return { ...res._doc, password: null };
    } catch (err) {
      console.log("createUser err", err);
      throw err;
    }
  },
  login: async ({ email, password }) => {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User does not Exist");
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) throw new Error("Invalid credentials!");
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "somesupersecretkey",
        {
          expiresIn: "1h",
        }
      );
      return { userId: user.id, token, tokenExpiration: 1 };
    } catch (err) {
      throw err;
    }
  },
};
