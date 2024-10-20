const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/addtodo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  } else {
    const { title, description } = req.body;
    todos.push({ task: title, description: description });
    res.status(400).json({
      msg: "todo added successfully",
    });
  }
});

app.put("/completed", (req, res) => {
  const updatepayload = req.body;
  const parsePayload = updateTodo.safeParse(updatepayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
