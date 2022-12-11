import express  from "express";
import usersRouter from "./routers/users.routers.js";
import petsRouter from "./routers/pets.routers.js";

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/', (req, res) => res.send('Home'))

app.listen(8080)