import { readFileSync } from "fs";
import { NatoDictionary } from "../interfaces/interfaces"

export class DataLoader {
  private _data: NatoDictionary = {};

  constructor(dataPath: string) {
    this.data = dataPath;
  }

  get data(): string {
    return JSON.stringify(this._data);
  }

  set data(dataPath: string) {
    const data: string = readFileSync(dataPath, "utf-8");
    this._data = JSON.parse(data);
  }

  showOne(letter: string): string {
    return this._data[letter.toUpperCase()];
  }

  showRandom(number: number): NatoDictionary {
    const keys = Object.keys(this._data);
    number = number <= 0 || number > keys.length ? keys.length : number;
    const selectedKeys: string[] = [];
    while (selectedKeys.length < number) {
      const index = Math.floor(Math.random() * keys.length);
      const suggestedKey = keys[index];
      if (!selectedKeys.includes(suggestedKey)) {
        selectedKeys.push(suggestedKey);
      }
    }
    selectedKeys.sort();
    const result: NatoDictionary = {};
    selectedKeys.map((k) => (result[k] = this._data[k]));
    return result;
  }
}
