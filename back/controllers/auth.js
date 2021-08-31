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
    const user = await db.User.findOne({
      where: { email: email },
      include: [
        {
          model: db.Images,
          as: "image",
          attributes: ["images"],
        },
      ],
    });
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
    const newUser = await db.User.findOne({
      where: { email: email },
      include: [
        {
          model: db.Images,
          as: "image",
          attributes: ["images"],
        },
      ],
    });

    const jsonUser = newUser.toJSON();
    const authToken = token.createToken(newUser.id);

    delete jsonUser.password;
    res.json({ user: jsonUser, authToken: authToken });
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
  const { name, oldEmail, newEmail, dob, oldPassword, newPassword } = req.body;
  const { authorization } = req.headers;

  const id = token.decodeToken(authorization);

  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ message: "Registration error" });
    }
    const user = await db.User.findOne({ where: { id: id.data } });
    if (!user) {
      res.status(404).send(`User not found`);
      return;
    }
    const passwordResult = bcrypt.compareSync(oldPassword, user.password);
    if (!passwordResult) {
      res.status(404).json({ message: "Invalid password" });
      return;
    }
    if (newEmail) {
      if (oldEmail !== user.email) {
        res.status(404).json({ message: "Invalid email" });
        return;
      }
      const candidat = await db.User.findOne({ where: { email: newEmail } });

      if (candidat && user.email !== candidat.email) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }
    if (newPassword) {
      if (newPassword.length < 6) {
        return res.status(400).json({ message: "Password to short" });
      }
    }
    const salt = bcrypt.genSaltSync(10);
    const updatableData = {};
    if (name) updatableData.name = name;
    if (newEmail) updatableData.email = newEmail;
    if (newPassword)
      updatableData.password = bcrypt.hashSync(newPassword, salt);
    if (dob) updatableData.dob = dob;

    await user.update(updatableData, {
      where: { id: id.data },
    });

    const authToken = token.createToken(user.id);
    const jsonUser = user.toJSON();

    delete jsonUser.password;
    res.json({ user: jsonUser, token: authToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Something went wrong` });
  }
};

exports.getToken = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const id = token.decodeToken(authorization);

    const user = await db.User.findOne({
      where: { id: id.data },
      include: [
        {
          model: db.Images,
          as: "image",
          attributes: ["images"],
        },
      ],
    });

    if (!user) {
      response.status(404).send("User not found");
      return;
    }

    const createdtoken = token.createToken(user.id);
    const jsonUser = user.toJSON();

    delete jsonUser.password;
    res.send({ user: jsonUser, token: createdtoken });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const id = token.decodeToken(authorization);
    console.log("BB", req);
    const file = req.file;
    console.log("file", file);
    const path = file.path;
    console.log("id:", id);
    console.log("auth:", authorization);

    if (!file) {
      res.srtatus(400).send("Error loading file");
      return;
    }

    const image = await db.Images.findOne({
      where: { userId: id.data },
    });

    if (!image) {
      await db.Images.create({
        images: path,
        userId: id.data,
      });
    } else {
      await db.Images.update(
        {
          images: path,
        },
        {
          where: { userId: id.data },
        }
      );
    }
    res.json({ message: "Avatar was uploaded", path });
  } catch (err) {
    console.log("ERROR_____________________________________");
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
