import { readFileSync } from "fs";
import { NatoDictionary, DataLoaderInterface } from "../interfaces/interfaces";

export class DataLoader implements DataLoaderInterface{
  private _data: NatoDictionary = {};

  constructor(public dataPath: string) {
    const data: string = readFileSync(dataPath, "utf-8");
    this.data = JSON.parse(data);
  }

  get data(): NatoDictionary {
    return this._data;
  }

  set data(data: NatoDictionary) {
    this._data = data;
  }

  showOne(letter: string): NatoDictionary {
    return { [letter.toUpperCase()]: this._data[letter.toUpperCase()] };
  }

  showRandom(number: number): NatoDictionary {
    const keys = Object.keys(this._data);
    if (number < 0 || typeof number !== "number") {
      number = 0
    } else if (number > keys.length){
      number = keys.length
    }
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

  spell(input: string): NatoDictionary[] {
    input = input.toUpperCase();
    const inputArray = [...input];
    const result = inputArray.map(i => {
      if (Object.keys(this._data).includes(i)) {
        return {[i]: this._data[i]};
      } else {
        return {[i]: ""};
      }
    });
    return result;
  }
}
