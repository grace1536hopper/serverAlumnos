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
const express_1 = __importDefault(require("express"));
const alumnos_1 = __importDefault(require("../routes/alumnos"));
const auth_1 = __importDefault(require("../routes/auth"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        console.log(process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    router() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'api router'
            });
        });
        this.app.use('/api/alumnos', alumnos_1.default);
        this.app.use('/api/login', auth_1.default);
        this.app.use('/api/login', auth_1.default); // esta si se utiliza 
        // this.app.use('/api/datosmedicos', routerDatosmedicos)
    }
    midlewares() {
        //parseamos el body
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)()); // esta se la agrego al codigo 
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Base de datos conectada');
                yield connection_1.default.authenticate().then();
            }
            catch (error) {
                console.log(error);
                console.log('error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
