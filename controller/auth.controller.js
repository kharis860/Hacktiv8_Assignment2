const fs = require("fs");
const { generateToken } = require("../helpers/jwt");

module.exports = {
  login: (req, res) => {
    fs.readFile("../assignment 2/data/users.json", (err, data) => {
      //kondisional error read file
      if (err) {
        console.log(err);
        return;
      }
      // ambil data dan mengubahnya ke JSON
      const user = data.toString("utf8");
      const users = JSON.parse(user);
      //ambil input dari body dan komparasi
      const { username, password } = req.body;
      const isAuth = username === users[0].username && password === users[0].password;
      // kondisional komparasi, if true buat payload dan tokennya
      if (isAuth) {
        try {
          const payload = {
            id: users[0].id,
            username: users[0].username,
          };

          const token = generateToken(payload);

          res.status(200).json({
            message: "succes login",
            token,
          });
        } catch (error) {
          res.status(error?.code || 500).json(error);
        }
      }
    });
  },
};
