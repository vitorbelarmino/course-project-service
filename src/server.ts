import { App } from './app';
import 'dotenv/config';

const ApiPort = process.env.API_PORT || 3333;
const app = new App();
app.start(ApiPort);
