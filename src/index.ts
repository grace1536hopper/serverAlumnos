import * as dotenv from 'dotenv';

import Server from "./models/server";
import path from 'path';

const envPath = path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

const server = new Server();