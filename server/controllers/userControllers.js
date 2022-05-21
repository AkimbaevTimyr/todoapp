const db = require('../db')
const ApiError = require('../error/error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY
var dialog  = require('dialog')

const generateJwt = (id, email, hashPassword) =>{
    return jwt.sign(
        {id, email, hashPassword},
        SECRET_KEY,
        {expiresIn: '1h'}
    )
}
class UserController{
    async registration(req, res, next){
        try{
            const {id, email, password} = req.body
            if(!email || !password || !id){
                next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await db.query(`select * from person where email = $1`, [email])
            let person = candidate.rows
            if(person === true){
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const newUser = await db.query(`INSERT INTO person (id, email, password) values ($1, $2, $3) RETURNING *`, [id, email, hashPassword])
            const token = generateJwt(id, email, hashPassword)
            return res.json({token })
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    // сделать вывод не верного пароля и тд
    async login(req, res, next){
        try{    
            const {email, password} = req.body
            const user = await db.query(`select * from person where email = $1`,[email])
            let id = user.rows[0].id
            if(!user){
               return dialog.info('Пользователь не найден')
            }
            if(user.rows[0].password != password){
               next(ApiError.badRequest('Не верный пароль'))
            }
            const token = generateJwt(user.id, user.email)
            return res.json([token, id])
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.password)
        return res.json(token)
    }
}


module.exports = new UserController()