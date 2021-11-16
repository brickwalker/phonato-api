import express, { Router } from "express";
import { resolve } from "path";
import { DataLoader } from "./DataLoader";

export class NatoRouter {
  static setupRoutes() {
    const dataPath = resolve(__dirname, "../../data/data.json");
    const dataLoader = new DataLoader(dataPath);

    const router: Router = Router();

    router.use(express.json());

    router.get("/", (req, res) => {
      res.send(dataLoader.data);
    });

    router.get("/:letter", (req, res) => {
      const letter = req.params.letter;
      res.send(dataLoader.showOne(letter));
    });

    router.get("/random/:number?", (req, res) => {
      let number;
      if (req.params.number) {
        number = parseInt(req.params.number);
      } else {
        number = 0;
      }
      res.send(dataLoader.showRandom(number));
    });

    router.post("/", (req, res) => {
      // TODO if req.body is not of NatoPostRequest format return error
      res.send(dataLoader.spell(req.body.input));
    });

    return router;
  }
}
