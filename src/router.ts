import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    console.log('GET / ejecutado')
    res.send('Hola mundo desde GET /')
})

router.post('/auth/register', (req, res) => {
    console.log('Desde register')
    res.status(200).json({ message: 'Registro recibido' })
})

export default router
