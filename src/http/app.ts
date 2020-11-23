import path from 'path';
import ejs from 'ejs';
import http, { Server as HttpServer } from 'http';
import express, { Express } from 'express';

import '../database/mongoose';
import routes from './routes';
import sockets from './sockets';

class App {
  private app: Express;
  public server: HttpServer;

  constructor() {
    this.init();
    this.middlewares();
    this.sockets();
  }

  private init() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  private middlewares() {
    this.app.use(routes);

    this.app.use(express.static(path.join(__dirname, '..', '..', 'public')));
    this.app.set('views', path.join(__dirname, '..', '..', 'public'));
    this.app.engine('html', ejs.renderFile);
    this.app.set('view engine', 'html');

    this.app.use(express.json());
  }

  private sockets() {
    sockets(this.server);
  }
}

export default new App().server;
