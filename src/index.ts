import Server from "./models/server";
import dotenv from 'dotenv';

//se configura las variables de ambiente 
dotenv.config();

const server = new Server();