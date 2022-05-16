const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoController')


router.get('/:id', todoController.getTodos)
router.post('/', todoController.createTodo)
router.delete('/:id', todoController.deleteTodo)
router.delete('/all/:id', todoController.deleteAllTodos)



module.exports = router