import { Router } from "express";
import { getUsuarios, putUsuarios } from "../controller/usuarios.controller";

const router = Router();

function root(){
    router.get('/', getUsuarios);
    router.post('/', putUsuarios);
    return router;
}

export default root;
