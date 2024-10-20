const express = require("express");

const app = express();
app.use(express.json());
let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/addtodo", (req, res) => {
  const { title, description } = req.body;
  todos.push({ task: title, description: description });
  res.status(400).json({
    msg: "todo added successfully",
  });
});

app.put("/completed", (req,res)=>{

})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
