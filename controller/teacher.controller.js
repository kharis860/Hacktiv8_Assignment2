const fs = require("fs");
const { compareToken } = require("../helpers/jwt");

module.exports = {
  getAllTeacher: (req, res) => {
    const tokenAuth = req.headers.authorization.split(" ")[1];
    const auth = compareToken(tokenAuth);
    console.log(auth);
    fs.readFile("../assignment 2/data/teachers.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data.toString("utf8"));
      //       console.log(data.toJSON);
      const teacher = data.toString("utf8");
      const teachers = JSON.parse(teacher);

      res.status(200).json({
        message: "succes get data",
        data: teachers,
      });
    });
  },
};
