const fs = require("fs");

module.exports = {
  login: (req, res) => {
    fs.readFile("../assignment 2/data/users.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data.toString("utf8"));
      //       console.log(data.toJSON);
      const user = data.toString("utf8");
      const users = JSON.parse(user);
      console.log(users[0].username, "ini tes");
      const { username, password } = req.body;
      console.log(username);
      console.log(password);
      const isAuth = username === users[0].username && password === users[0].password;
      console.log(isAuth);
      res.status(200).json({
        message: "succes get data",
      });
    });
  },
};
