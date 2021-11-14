import express from "express";
import router from "./components/router";

const app = express();
const port: number = 3000;
const rootEndpoint: string = "nato";

app.use(`/${rootEndpoint}`, router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/${rootEndpoint}`);
});
