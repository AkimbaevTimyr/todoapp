require('dotenv').config()
const express = require('express')
const router = require('./routes/index') //импортируем роуты
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router) //инициализируем роуты


app.listen(PORT, ()=> console.log('SERVER IS RUNNIG'))


module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.send(`Hello ${name}!`);
  };
  