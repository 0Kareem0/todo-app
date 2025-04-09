const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let todos = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) todos.push(task);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const index = parseInt(req.body.index);
  if (!isNaN(index)) todos.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`To-Do app listening at http://localhost:${port}`);
});
