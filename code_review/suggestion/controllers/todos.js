import db_todos from '../db/todos'
import uuidv1 from 'uuid/v1'

/** Class representing the todo controller. */
class TodosController {

    /**
     * Gets all todo items stored in db/todos.
     * @module TodosController
     * @function
     * @param req {Object} The request.
     * @param res {Object} The response.
     * @return {undefined}
     */
    getAllTodos(req, res) {
        // return success
        res.status(200).send({
            success: 'true',
            message: 'todos retrieved successfully',
            data: db_todos
        })
    }

    /**
     * Gets a todo item by given id.
     * @module TodosController
     * @function
     * @param req {Object} The request.
     * @param res {Object} The response.
     * @param req.params.id {String} todo id used to get item from db.
     * @param req.body {Object} The JSON payload.
     * @return {Object}
     */
    getTodo(req, res) {
        const id = req.params.id
        db_todos.map((todo) => {
            if (todo.id === id) {
                // return success
                return res.status(200).send({
                    success: 'true',
                    message: 'todo retrieved successfully',
                    todo
                })
            }
        })
        // return Not found Request error
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'
        })
    }

    /**
     * Creates a todo item.
     * @module TodosController
     * @function
     * @param req {Object} The request.
     * @param res {Object} The response.
     * @param req.body {Object} The JSON payload.
     * @param req.body.content {String} Content of creating todo.
     * @return {Object}
     */
    createTodo(req, res) {
        // check if content is sent
        if(!req.body.content) {
            // return Bad Request error
            return res.status(400).send({
                success: 'false',
                message: 'content is required'
            })
        }
        // create new todo
        const todo = {
            id: uuidv1(),
            content: req.body.content
        }
        // add new todo to db
        db_todos.push(todo);
        // return success
        return res.status(201).send({
            success: 'true',
            message: 'todo added successfully',
            todo
        })
    }

    /**
     * Updates a todo item.
     * @module TodosController
     * @function
     * @param req {Object} The request.
     * @param res {Object} The response.
     * @param req.params.id {String} todo id used to get item from db.
     * @param req.body {Object} The JSON payload.
     * @param req.body.content {String} Content of creating todo.
     * @return {Object}
     */
    update(req, res) {
        const id = req.params.id
        // finding the todo item
        let todoFound
        let itemIndex
        db_todos.map((todo, index) => {
            if (todo.id === id) {
                todoFound = todo
                itemIndex = index
            }
        })
        // return Not found error if item can't be found
        if (!todoFound) {
            return res.status(404).send({
                success: 'false',
                message: 'todo not found'
            })
        }
        // return Bad request error if content is not in body
        if (!req.body.content) {
            return res.status(400).send({
                success: 'false',
                message: 'content is required'
            })
        }
        // updating to and saving to db
        const updatedTodo = {
            id: todoFound.id,
            description: req.body.content || todoFound.content
        }

        db_todos.splice(itemIndex, 1, updatedTodo);
        // return success
        return res.status(201).send({
            success: 'true',
            message: 'todo added successfully',
            updatedTodo
        })
    }

    /**
     * Deletes a todo item.
     * @module TodosController
     * @function
     * @param req {Object} The request.
     * @param res {Object} The response.
     * @param req.params.id {String} todo id used to get item from db.
     * @param req.body {Object} The JSON payload.
     * @return {Object}
     */
    deleteTodo(req, res) {
        const id = req.params.id
        // finding the todo item
        let todoFound;
        let itemIndex;
        db_todos.map((todo, index) => {
            if (todo.id === id) {
                todoFound = todo;
                itemIndex = index;
            }
        });
        // return Not found error if item can't be found
        if (!todoFound) {
            return res.status(404).send({
                success: 'false',
                message: 'todo not found',
            });
        }
        // removing item from db
        db_todos.splice(itemIndex, 1);
        // return success
        return res.status(200).send({
            success: 'true',
            message: 'Todo deleted successfuly',
        });
    }
}

const todoController = new TodosController()
export default todoController