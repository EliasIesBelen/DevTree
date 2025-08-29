import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('GET / ejecutado')
  res.send('¡Ruta raíz funcionando correctamente!')
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Servidor de prueba escuchando en el puerto ${port}`)
})
