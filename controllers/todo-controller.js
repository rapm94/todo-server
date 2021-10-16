const {response, request} = require("express");
const {Todo} = require("../models/todo");

//Obtener los todos en la base de datos
const getTodos = async(req, res = response) => {
    try{
        const todos = await Todo.find()
        res.status(200).json({
            message: "OK",
            todos: todos
        })
    }catch(e){
        console.log(e);
    }
}
// Obtener solo un todo por ID
const getOneTodo = async(req = request ,res=response) =>{

    try{ 
        const{
            params:{id}
        }=req 
        const todo = await Todo.findById({_id:id})
        res.status(200).json({
            message: 'Todo encontrado',
            todo: todo,
        })
    } catch(e){
        console.log(e)
    }

}

//Agregar nuevo todo a la base de datos
const addTodo = async (req = request, res=response) =>{
    try{
        const body = req.body;
        const todo = new Todo ({
            name: body.name,
            description:body.description,
            priority:body.priority,
            assigned:body.assigned,
            done: body.done
        })

        const newTodo = await todo.save()
        const allTodos = await Todo.find()

        res.status(201).json({
            message: 'Todo agregado',
            todo: newTodo,
            todos:allTodos,
        })
    }catch(e){
        console.log(e);
    }
}

//Modificar todo en la base de datos
const updateTodo = async (req = request, res=response) =>{
    try{
        const{
            params: {id},
            body,
        } = req
        
        const updateTodo = await Todo.findByIdAndUpdate(
            {_id:id},
            body,
        )
        const allTodos = await Todo.find()
        res.status(201).json({
            message: 'Todo actualizado',
            todo: updateTodo,
            todos:allTodos,
        })
    }catch(e){
        console.log(e);
    }
}


//Borrar todo de la base de datos
const deleteTodo = async (req = request, res = response) =>{
    try{
        const deletedTodo = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos = await Todo.find()

        res.status(200).json({
            message: 'Todo borrado',
            todo: deletedTodo,
            todos:allTodos,
        })
    }catch(e){
        console.log(e)
    }
}


module.exports = {addTodo, getTodos, updateTodo, deleteTodo, getOneTodo};

