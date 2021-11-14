import { Router } from "express";
import { readFileSync } from "fs";
import { resolve } from "path";

const data: string = readFileSync(resolve(__dirname, "../../data/data.json"), "utf-8");

const router: Router = Router();

router.get("/", (req, res) => {
  res.send(JSON.parse(data));
});

export default router;
