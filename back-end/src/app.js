import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'https://prueba-despliegue-fullstack-pern.onrender.com'
}))
app.use(express.json())
app.get('/prueba/get', (req, res) => {
    
    res.send('Respuesta de prueba/get')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})