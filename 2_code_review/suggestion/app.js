import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'
import todosRouter from './routes/todos'

// Set up the express app
const app = express()
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Api endpoints
app.use('/api/v1/', router);
app.use('/api/v1/todos', todosRouter);
// listening to designated port
const PORT = 8080

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})