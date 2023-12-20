import { Router } from "express";
import { Credencial, renewToken } from "../controllers/auth";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";  // Añadir llaves
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

router.post('/',
    [
        check('boleta', 'La boleta es obligatoria').not().isEmpty(),
        check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos,
    ],
    Credencial
)

//router.get( '/', validarJWT,renewToken);

router.get( '/renew', validarJWT, renewToken);

export default router;
