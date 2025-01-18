import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'https://prueba-despliegue-fullstack-pern.onrender.com'
}))
app.use(express.json())

app.get('/prueba/get', (req, res) => {
    conexion.connect((err, client, release) => {
        if (err) {
            res.send('Error en la conexión', err.stack)
        }else{
            res.send('Conexión exitosa')
        }
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})