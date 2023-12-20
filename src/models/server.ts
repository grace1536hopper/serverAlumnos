import express, {Application, Request, Response} from 'express'
import routesAlumnos from '../routes/alumnos'
import auth from '../routes/auth'
import routerDatosmedicos from '../routes/datosMedicos';
import db from '../db/connection';
import cors from 'cors';
import { renewToken } from '../controllers/auth';


class Server{

    private app: express.Application;
    private port: string;

    constructor(){
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    router(){
        this.app.get('/', (req:Request, res:Response) =>{
            res.json({
                msg: 'api router'
            });
        });
         this.app.use('/api/alumnos', routesAlumnos);
         this.app.use('/api/login', auth);
         this.app.use('/api/login', auth); // esta si se utiliza 

        // this.app.use('/api/datosmedicos', routerDatosmedicos)
    }

    midlewares(){
        //parseamos el body
        this.app.use(express.json());

        this.app.use(cors()); // esta se la agrego al codigo 
    }

    async dbConnect(){
        try {
            console.log('Base de datos conectada');
            await db.authenticate().then();
            
        } catch (error) {
            console.log(error);
            console.log('error al conectarse a la base de datos');
            
        }
    }
       

}

export default Server;