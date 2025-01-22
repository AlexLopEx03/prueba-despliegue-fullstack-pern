import express from 'express'
import cors from 'cors'
import conexion from './conexion.js'
const app = express()
app.use(cors({origin: 'https://prueba-despliegue-fullstack-pern.onrender.com'}))
//app.use(express.json())
app.disable('x-powered-by')

app.get('/prueba', (req, res) => {
    conexion.connect((err, client, release) => {
        if (err) {
            res.send('Error en la conexión', err.stack)
        }else{
            res.send('Conexión exitosa')
        }
    })
})

app.use((req, res) => {
    res.status(404).send('Error 404')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})