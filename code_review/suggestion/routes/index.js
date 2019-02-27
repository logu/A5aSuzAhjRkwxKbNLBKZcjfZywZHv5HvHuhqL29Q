import express from 'express'
import todoController from '../controllers/todos';

const router = express.Router()

// get all todos elements
router.get('/', function(req, res) {
    // return success
    res.status(200).send({
        success: 'true',
        message: 'Welcome to todo api. V1'
    })
});


/** @module router */
export default router