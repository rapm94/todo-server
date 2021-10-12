const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(

    {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
        },
        assigned:{
            type:String
        }

    },
);



const Todo = mongoose.model('Todo', TodoSchema);
module.exports = {
    Todo
}