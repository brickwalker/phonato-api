import { NatoConfig } from "../interfaces/interfaces";
import * as configFileContent from "../config/config.json";

export class ConfigParser {
  static _config: NatoConfig = configFileContent;
  static getAppName(defaultName: string): string {
    return this._config["appName"] || defaultName;
  }
  static getPort(defaultPort: number): number {
    return this._config["port"] || defaultPort;
  }
  static getDataPath(defaultPath: string): string {
    return this._config["dataPath"] || defaultPath;
  }
}
