import 'express-async-errors';
import express from 'express';
import { router } from './routes';
import globalError from './middlewares/globalError';

export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use('/', (req, res) => res.send('Hello World!'));
    this.app.use(router);
    this.app.use(globalError);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
  }

  public start(port: number | string) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}
