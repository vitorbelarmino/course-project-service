import 'express-async-errors';
import express from 'express';
import { router } from './routes';
import globalError from './middlewares/globalError';

export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(router);
    this.app.use(globalError);
  }

  public start(port: number | string) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}
