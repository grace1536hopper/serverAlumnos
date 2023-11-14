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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlumno = exports.getAlumnos = void 0;
const semestre_1 = require("../models/semestre");
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAlumnos = yield semestre_1.DatosAcademicos.findAll();
    res.json({
        listAlumnos
    });
});
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield semestre_1.DatosAcademicos.findByPk(id, {
            include: [
                {
                    model: semestre_1.Carrera,
                    include: [
                        {
                            model: semestre_1.Asignaturas,
                            include: [
                                {
                                    model: semestre_1.Grupo,
                                    include: [
                                        {
                                            model: semestre_1.Semestre,
                                        },
                                    ],
                                },
                            ],
                        },
                    ]
                },
                {
                    model: semestre_1.Kardex,
                },
            ],
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
