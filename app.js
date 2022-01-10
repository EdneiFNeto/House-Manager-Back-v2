import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import home from './src/routes/home';
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middleweres();
    this.routes();
  }

  middleweres() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new App().app;
