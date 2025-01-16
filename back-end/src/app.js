import express from 'express'

const app = express()
app.use(express.json())
app.get('prueba/get', (req, res) => {
    res.send('Respuesta de prueba/get')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Port: ${PORT}`)
})