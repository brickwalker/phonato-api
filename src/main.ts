import { NatoApp } from "./components/NatoApp";
import { ConfigParser } from "./components/ConfigParser";

const appName: string = ConfigParser.getAppName("PhoNato");
const port: number = ConfigParser.getPort(3000);
const app = new NatoApp(appName, port);
app.run();
