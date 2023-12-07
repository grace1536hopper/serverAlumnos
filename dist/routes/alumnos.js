"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getAlumnos } from "../controllers/alumnos";
const alumnos_1 = require("../controllers/alumnos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', alumnos_1.getAlumnos);
router.get('/:id', validar_jwt_1.validarJWT, alumnos_1.getAlumno);
router.delete('/:id', alumnos_1.deletAlumno);
//router.post('/', Credencial);
router.put('/:id', alumnos_1.updateAlumno);
exports.default = router;
