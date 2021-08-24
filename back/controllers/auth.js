const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const token = require("../token");

module.exports.login = async function (req, res) {
  console.log(req);
  const { email, password } = req.body;

  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: "Registration error" });
    }
    const user = await db.User.findOne({ where: { email: email } });
    let userToken;
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const passwordResult = bcrypt.compareSync(password, user.password);
    if (passwordResult) {
      userToken = token.createToken(user.id);
      const jsonUser = user.toJSON();

      delete jsonUser.password;
      res.send({ user: jsonUser, token: userToken });
    } else {
      res.status(404).json({ message: "Invalid password" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.register = async function (req, res) {
  const { name, email, dob, password } = req.body;

  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: "Registration error" });
    }
    const candidat = await db.User.findOne({ where: { email: email } });
    if (candidat) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password to short" });
    }
    const salt = bcrypt.genSaltSync(10);

    const user = await db.User.create({
      name: name,
      email: email,
      dob: dob,
      password: bcrypt.hashSync(password, salt),
    });

    const jsonUser = user.toJSON();

    delete jsonUser.password;
    res.json({ user: jsonUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      raw: true,
      attributes: ["id", "name", "email", "dob"],
    });
    console.log(req.headers);
    if (!users) {
      res.status(404).json({
        message: "No registered users",
      });
      return;
    }

    res.status(200).json({ message: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong", data: err });
  }
};

module.exports.delete = async function (req, res) {
  const { id } = req.body;

  try {
    const user = await db.User.findOne({ where: { id: id } });

    if (!user) {
      res.status(404).json({ message: `User whis id ${id} not found` });
      return;
    }

    await user.destroy({ where: { id: id } });
    res.status(200).json({ message: `User whis id ${id} was deleted` });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.update = async function (req, res) {
  const { email, name } = req.body;

  try {
    const user = await db.User.findOne({ where: { email: email } });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    await user.update(
      { name: name },
      {
        where: { email: email },
      }
    );
    res
      .status(200)
      .json({ message: `User ${user.id}: name updated. New name: ${name}` });
  } catch (err) {
    res.status(500).json({ message: `Something went wrong` });
  }
};

exports.getToken = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const id = token.decodeToken(authorization);

    const user = await db.User.findOne({ where: { id: id.data } });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    const createdtoken = token.createToken(user.id);
    const jsonUser = user.toJSON();

    delete jsonUser.password;
    res.send({ user: user, token: createdtoken });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};
