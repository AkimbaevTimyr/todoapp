require('dotenv').config()
const express = require('express')
const router = require('./routes/index') //импортируем роуты
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use('/api', router) //инициализируем роуты


app.listen(PORT, ()=> console.log('SERVER IS RUNNIG'))