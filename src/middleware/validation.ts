import type { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) =>{
    //Manejar errores
        let error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({error: error.array()})
        }
        next()
}