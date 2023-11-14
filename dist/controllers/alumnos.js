"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAlumno = exports.postAlumno = exports.deletAlumno = exports.getAlumno = exports.getAlumnos = void 0;
// import Alumno from "../models/alumnoM"
const datosMedicos_1 = __importDefault(require("../models/datosMedicos"));
const direccion_1 = __importDefault(require("../models/direccion"));
const escolaridad_1 = __importDefault(require("../models/escolaridad"));
const tutor_1 = __importDefault(require("../models/tutor"));
const tramites_1 = __importDefault(require("../models/tramites"));
const semestre_1 = require("../models/semestre");
// import Direccion from '../models/direccion';
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAlumnos = yield semestre_1.Alumno.findAll();
    res.json({
        listAlumnos
    });
});
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield semestre_1.Alumno.findByPk(id, {
            // include: [
            include: [
                { model: datosMedicos_1.default },
                { model: direccion_1.default },
                { model: escolaridad_1.default },
                { model: tutor_1.default },
                { model: tramites_1.default },
                { model: semestre_1.EstadoGeneral, include: [
                        {
                            model: semestre_1.Carrera,
                            include: [
                                { model: semestre_1.Asignaturas, include: [
                                        {
                                            model: semestre_1.Grupo, include: [
                                                {
                                                    model: semestre_1.Semestre,
                                                },
                                            ],
                                        },
                                    ],
                                }
                            ],
                        },
                    ],
                },
                { model: semestre_1.DatosAcademicos,
                    include: [
                        { model: semestre_1.Kardex },
                        { model: semestre_1.Carrera },
                    ],
                },
                { model: semestre_1.ingreso },
            ],
            // ],
        });
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({
                msg: `No existe el usuario con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte',
        });
    }
});
exports.getAlumno = getAlumno;
const deletAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //eliminar registros de la tabla 
    const { id } = req.params;
    const alumnos = yield semestre_1.Alumno.findByPk(id);
    if (!alumnos) {
        res.status(404).json({
            msg: `No existe un alumno con el id ${id}`
        });
    }
    else {
        yield alumnos.destroy();
        res.json({
            msg: ' El alumno fue eliminado con exito'
        });
    }
});
exports.deletAlumno = deletAlumno;
const postAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield semestre_1.Alumno.create(body);
        res.json({
            msg: `El alumno fue agregado con exito`,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error, comuniquese con soporte `
        });
    }
});
exports.postAlumno = postAlumno;
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const alumnos = yield semestre_1.Alumno.findByPk(id);
    try {
        if (alumnos) {
            yield alumnos.update(body);
            res.json({
                msg: `El alumno fue actualizado con exito !`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el alumno con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error, comuniquese con soporte `
        });
    }
});
exports.updateAlumno = updateAlumno;
