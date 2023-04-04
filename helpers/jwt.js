var jwt = require("jsonwebtoken");
const key = "tugas 2";

const generateToken = (payload) => {
  return jwt.sign(payload, key);
};
const compareToken = (token) => {
  return jwt.verify(token, key);
};

module.exports = {
  generateToken,
  compareToken,
};
