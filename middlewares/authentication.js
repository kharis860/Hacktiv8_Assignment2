const { compareToken } = require("../helpers/jwt");
const fs = require("fs");

const authentication = (req, res, next) => {
  try {
    // kondisional exist bearer token
    const cred = req.headers.authorization;
    if (!cred) {
      res.status(404).json({
        message: "token not provided",
      });
      return;
    }
    // mengambil data dari header dan komparasi token
    const tokenAuth = req.headers.authorization.split(" ")[1];
    const auth = compareToken(tokenAuth);

    fs.readFile("../assignment 2/data/users.json", (err, data) => {
      //kondisional error read file
      if (err) {
        console.log(err);
        return;
      }
      // ambil data dan mengubahnya ke JSON
      const user = data.toString("utf8");
      const users = JSON.parse(user);
      // verifikasi middleware
      if (auth.username === users[0].username) {
        return next();
      }
    });
  } catch (error) {
    res.status(error?.code || 500).json(error);
  }
};

module.exports = authentication;
