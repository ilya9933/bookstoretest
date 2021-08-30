const tokenChek = require("../token");

module.exports.tokenChecking = (req, res, next) => {
  const {
    headers: { authorization },
  } = req;

  console.log("authorization", authorization);
  try {
    tokenChek.verifyToken(authorization);
  } catch (err) {
    return res.status(404).send("Token is out of date or invalid");
  }

  return next();
};
