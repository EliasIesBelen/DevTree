import { Request, Response } from "express"
import {validationResult} from 'express-validator'
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export const createAccound = async (req: Request, res: Response) => {
    //Manejar errores
    let error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }

    const { email, password} = req.body

    const userExist = await User.findOne({email})
    if (userExist) {
        const error = new Error('El usuario ya ha sido registrado')
        return res.status(409).json({error : error.message})
    } 

    const handle = slug(req.body.handle, '')
    const handleExist = await User.findOne({handle})
    if (handleExist) {
        const error = new Error('Nombre de usuario no disponible')
        return res.status(409).json({error : error.message})
    } 


    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.status(201).send('Registro creado correctamente')
}