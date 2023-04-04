const fs = require("fs");

module.exports = {
  getAllTeacher: (req, res) => {
    fs.readFile("../assignment 2/data/teachers.json", (err, data) => {
      //kondisional error read file
      if (err) {
        console.log(err);
        return;
      }
      // ambil data dan mengubahnya ke JSON
      const teacher = data.toString("utf8");
      const teachers = JSON.parse(teacher);

      res.status(200).json({
        message: "succes get data",
        data: teachers,
      });
    });
  },
};
