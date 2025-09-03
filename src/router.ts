import { Router } from 'express'
import { createAccound } from './handlers'

const router = Router()

router.get('/', (req, res) => {
    console.log('GET / ejecutado')
    res.send('Hola mundo desde GET /')
})

router.post('/auth/register',createAccound ) 

export default router
