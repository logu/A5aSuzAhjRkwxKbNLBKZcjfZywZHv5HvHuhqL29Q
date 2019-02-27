import express from 'express'
import todoController from '../controllers/todos';

const router = express.Router()

// get all todos elements
router.get('/', todoController.getAllTodos)

// get single todo element
router.get('/:id', todoController.getTodo)

// create a todo element
router.post('/', todoController.createTodo)

// update a todo element
router.put('/:id', todoController.update)

// delete a todo element
router.delete('/:id', todoController.deleteTodo)

/** @module router */
export default router