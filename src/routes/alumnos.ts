import { Router } from "express";
// import { getAlumnos } from "../controllers/alumnos";
import { deletAlumno, getAlumno, getAlumnos, postAlumno, updateAlumno} from "../controllers/alumnos";
import { validarJWT } from "../middlewares/validar-jwt";



const router = Router();

router.get('/', getAlumnos);

router.get('/:id',validarJWT, getAlumno);

router.delete('/:id', deletAlumno);
//router.post('/', Credencial);
router.put('/:id',updateAlumno);



export default router;
