import path from 'path';
import http, { Server as HttpServer } from 'http';
import express, { Express } from 'express';

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
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, '..', 'public')));
  }

  private sockets() {
    sockets(this.server);
  }
}

export default new App().server;
