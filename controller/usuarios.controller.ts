import { Request, Response } from 'express';

export const getUsuarios = ( req: Request, res:Response )  => {
    const { userId } = req.body;
    res.json({
        msg: 'GET USUARIOS',
        userId
    })
}

export const putUsuarios = ( req:Request, res:Response ) => {
    res.status(200).json({
        message: 'POST USUARIOS'
    })
}
