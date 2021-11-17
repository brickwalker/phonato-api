import express, { Router } from "express";
import { resolve } from "path";
import { DataLoader } from "./DataLoader";
import { ConfigParser } from "./ConfigParser";

export class NatoRouter {
  static setupRoutes() {
    const relativePath = ConfigParser.getDataPath("../../data/data.json");
    const dataPath = resolve(__dirname, relativePath);
    const dataLoader = new DataLoader(dataPath);

    const router: Router = Router();

    router.use(express.json());

    router.get("/random/:number?", (req, res) => {
      let number = 1;
      if (req.params.number) {
        number = parseInt(req.params.number);
      }
      res.send(dataLoader.showRandom(number));
    });

    router.get("/", (req, res) => {
      res.send(dataLoader.data);
    });

    router.get("/:letter", (req, res) => {
      const letter = req.params.letter;
      res.send(dataLoader.showOne(letter));
    });

    router.post("/", (req, res) => {
      req.body.input &&
      typeof req.body.input === "string" &&
      req.body.input.length <= 100
        ? res.send(dataLoader.spell(req.body.input))
        : res
            .status(400)
            .send(
              'Wrong request, {"input": "string up to 100 characters"} expected.'
            );
    });

    return router;
  }
}
