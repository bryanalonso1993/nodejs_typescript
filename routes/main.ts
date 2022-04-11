import { Router } from "express";
import { getUsuarios, putUsuarios } from "../controller/usuarios.controller";
import { postDataServer } from "../controller/jsonplaceholder.controller";

const router = Router();

function root(){
    router.get('/', getUsuarios);
    router.post('/', putUsuarios);
    router.post('/postDataServer', postDataServer);
    return router;
}

export default root;
