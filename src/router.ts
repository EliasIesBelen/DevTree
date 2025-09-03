import { Router } from 'express'
import {body} from 'express-validator'
import { createAccound } from './handlers'

const router = Router()

router.get('/', (req, res) => {
    console.log('GET / ejecutado')
    res.send('Hola mundo desde GET /')
})

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El hundle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('E-mail no value'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password es muy corto, minimo 8 caracteres'),
    createAccound ) 

export default router
