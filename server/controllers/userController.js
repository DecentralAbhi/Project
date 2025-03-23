const { hashPassword, comparePassword } = require("../help/authHelper");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

// register controller
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validation

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "email is required",
      });
    }
    if (!password || password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "password is required",
      });
    }

    // existing user
    const existingUser = await userModel.findOne({ name });

    if (existingUser) {
      return res.status(500).send({
        success: true,
        message: "user already register in this mail",
      });
    }
    // hash password

    const hashedPassword = await hashPassword(password);
    // Save user
    const user = await userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Registration success please login ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in register api",
      error: error,
    });
  }
};

// login controller

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).send({
        success: false,
        message: "please fill email or password",
      });
    }
    // find user
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(500).send({
        success: false,
        message: "User not find",
      });
    }
    // match password

    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(500).send({
        success: false,
        message: "invalid username or password",
      });
    }

    // jwt
    // const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRETKEY, {
    //   expiresIn: "10d",
    // });

    // undefined password
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "user login successfull",
      // token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login api",
      error: error,
    });
  }
};

module.exports = { registerController, loginController };
