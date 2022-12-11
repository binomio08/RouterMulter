import express from 'express'

const app = express()

// Middleware de Manejo de Errores
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somenthink Broken')
    next()
})

// Middleware de Aplicacion
app.use(function(req, res , next){
    console.log(req.query);
    if (req.query.name == 'Mininis'){
        return res.send('Nudo no es un homosexual de la suerte')
    }
    console.log('time:', new Date().toLocaleTimeString());
    next()
})

// Middelware de Endpoint
function mid1(req, res, next) {
    req.data1 ='My data, not Yours, MINE!!'
    next()
}

app.use('/info', mid1, (req, res)=>{
    console.log(req.data1)
    res.send('More Info')
})

app.use('/', (req, res)=>{
    res.send('Servido OK')
})

app.listen(8080)