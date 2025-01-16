import express from 'express'
import conexion from './conexion.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'https://prueba-despliegue-fullstack-pern.onrender.com'
}))
app.use(express.json())
app.get('/prueba/get', (req, res) => {
    conexion.query('select * from test', (err, res) => {
        if(err){
            res.send(`Error al realizar la conexión: ${err}`)
        }else{
            res.send(`Consulta a la base de datos realizada con éxito: ${res.rows}`)
        }
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})