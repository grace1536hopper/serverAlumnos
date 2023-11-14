import { Router } from "express";
// import { getAlumnos } from "../controllers/alumnos";
import { deletAlumno, getAlumno, getAlumnos, postAlumno, updateAlumno } from "../controllers/alumnos";

const router = Router();

router.get('/', getAlumnos);
router.get('/:id', getAlumno);
router.delete('/:id', deletAlumno);
router.post('/', postAlumno);
router.put('/:id',updateAlumno);


export default router;
