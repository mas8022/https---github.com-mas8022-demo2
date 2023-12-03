const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/usersRouters')
const productsRouter = require('./routes/productsRouter')


const app = express()

app.use(bodyParser.json())
app.use(cors())

// routes

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)


app.listen(4000, () => {
    console.log('app successfully run on port 4000!');
})
