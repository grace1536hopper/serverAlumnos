import { Router } from "express";

import { getAlumnos, getAlumno } from "../controllers/datosMedicos";


const router = Router();

router.get('/', getAlumnos);
router.get('/:id', getAlumno);
export default router;
