const express = require('express')
const mongoose = require('mongoose')
const app = express()


// ler json

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

// rotas da api

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial

app.get('/', (req,res) => {

    res.json({message: 'Testando'})

})


// porta pro express
mongoose.set("strictQuery", true);
mongoose.connect('')
.then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(3000)
})
.catch((err) => console.log(err))

