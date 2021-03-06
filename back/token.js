const jwt = require("jsonwebtoken");
const config = require("./db/config/config.json");

module.exports.createToken = (information) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 3600,
      data: information,
    },
    config.token.secret
  );
};

module.exports.verifyToken = (token) => {
  return jwt.verify(token, config.token.secret);
};

module.exports.decodeToken = (token) => {
  return jwt.decode(token);
};
