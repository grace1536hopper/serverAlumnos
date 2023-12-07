"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos"); // Añadir llaves
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('boleta', 'La boleta es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos,
], auth_1.Credencial);
router.get('/', validar_jwt_1.validarJWT, auth_1.renewToken);
exports.default = router;
