const { compareToken } = require("../helpers/jwt");
const fs = require("fs");

const authentication = (req, res, next) => {
  try {
    const cred = req.headers.authorization;
    if (!cred) {
      res.status(404).json({
        message: "token not provided",
      });
      return;
    }
    const tokenAuth = req.headers.authorization.split(" ")[1];
    const auth = compareToken(tokenAuth);

    fs.readFile("../assignment 2/data/users.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const user = data.toString("utf8");
      const users = JSON.parse(user);
      console.log(users);

      if (auth.username === users[0].username) {
        return next();
      }
    });
  } catch (error) {
    res.status(error?.code || 500).json(error);
  }
};

module.exports = authentication;
