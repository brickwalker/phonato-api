import express from "express";
import { NatoRouter } from "./NatoRouter";
import { NatoAppInterface } from "../interfaces/interfaces";

export class NatoApp implements NatoAppInterface {
  public rootEndpoint: string;
  constructor(public appName: string, public port: number) {
    this.rootEndpoint = appName.toLowerCase();
  }
  run() {
    const app = express();
    
    app.use(`/${this.rootEndpoint}`, NatoRouter.setupRoutes());
    app.listen(this.port, () => {
      console.log(
        `${this.appName} running at http://localhost:${this.port}/${this.rootEndpoint}`
      );
    });
  }
}
