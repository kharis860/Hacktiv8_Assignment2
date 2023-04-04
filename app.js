const express = require("express");
const app = express();

const allRouter = require("./routes/index");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRouter);

app.get("/", (req, res) => {
  res.json({ message: "welcome to first API using JWT Auth" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong in this API" });
});

app.listen(port, () => {
  console.log("server running on http://localhost:3000/");
});
