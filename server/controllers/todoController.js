const db = require('../db') //импортируем созданную базу данных для создания todo
const ApiError = require('../error/error')
class TodoController {
    async createTodo(req, res, next) {
        try {
            const { todoid, text, user_id } = req.body
            const newTodo = await db.query(`INSERT INTO todo (todoid, text, user_id) values ($1, $2, $3) RETURNING *`, [todoid, text, user_id])
            res.json(newTodo.rows[0])
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteTodo(req, res, next) {
        try {
            const { id } = req.params
            const todos = await db.query(`delete from todo where todoid = $1`, [id]) //удалили todo по полученному id
            res.json(todos)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getTodos(req, res, next) {
        try {
            const { id } = req.params //получаем id указанное в строке поиска 
            const todos = await db.query(`select * from todo where user_id = $1`, [id]) // получаем todo по полученному id
            res.json(todos.rows)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}   


module.exports = new TodoController()