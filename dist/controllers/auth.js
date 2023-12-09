"use strict";
//Esta es para el ingreso a la plataforma 
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.renewToken = exports.Credencial = void 0;
const semestre_1 = require("../models/semestre");
const jwt_1 = require("../helpers/jwt");
const bcrypt = __importStar(require("bcryptjs"));
// Suponiendo que tienes una columna "boleta" y "contrasena" en tu modelo de Ingreso
const Credencial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { boleta, contrasena } = req.body; // Obtener boleta y contraseña desde la solicitud
        // Buscar el ingreso con la boleta y contraseña proporcionadas
        const ingreso = yield semestre_1.Ingreso.findOne({
            where: { boleta, contrasena },
            include: [
                { model: semestre_1.Alumno, as: 'alumno' }
            ]
        });
        //encriptar la contraseña 
        const salt = bcrypt.genSaltSync();
        ingreso.contrasena = bcrypt.hashSync(contrasena, salt);
        //await ingreso.save();
        //genera TOKEN -JWT 
        const token = yield (0, jwt_1.generarJWT)(ingreso.id);
        if (!ingreso) {
            return res.status(404).json({
                msg: 'Ingreso not found',
            });
        }
        res.json({
            ok: true,
            token,
            ingreso,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'An error occurred, please contact support',
        });
    }
});
exports.Credencial = Credencial;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.uid;
    const { id } = req.params;
    const ingreso = yield semestre_1.Ingreso.findByPk(id, {
        include: [
            { model: semestre_1.Alumno, as: 'alumno' } // Assuming you have set an alias 'alumno' for the association in the model
        ]
    });
    // generar el TOKEN - JWT
    const token = yield (0, jwt_1.generarJWT)(uid);
    res.json({
        ok: 'true',
        // uid: req.uid 
        token
    });
});
exports.renewToken = renewToken;
