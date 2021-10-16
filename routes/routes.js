const {Router} = require("express");
const {addTodo, getTodos, updateTodo, deleteTodo, getOneTodo} = require("../controllers/todo-controller");


const router = Router();

router.get("/todos", getTodos);

router.get("/todos/:id", getOneTodo);

router.post("/add-todo", addTodo );

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);


module.exports = router;