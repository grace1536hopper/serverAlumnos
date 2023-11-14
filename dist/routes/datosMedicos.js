"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosMedicos_1 = require("../controllers/datosMedicos");
const router = (0, express_1.Router)();
router.get('/', datosMedicos_1.getAlumnos);
router.get('/:id', datosMedicos_1.getAlumno);
exports.default = router;
