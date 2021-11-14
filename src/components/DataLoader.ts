import { readFileSync } from "fs";

export class DataLoader {
  private _data: any;
  constructor(dataPath: string) {
    this.data = dataPath;
  }

  get data(): any {
    return this._data;
  }

  set data(dataPath: string) {
    const data: string = readFileSync(dataPath, "utf-8");
    this._data = JSON.parse(data);
  }

  showOne(letter: string): string {
    return this._data[letter.toUpperCase()];
  }

  showRandom(number: number): any {
    console.log("this is:", number);
    const keys = Object.keys(this._data);
    number = number <= 0 || number > keys.length ? keys.length : number;
    const selectedKeys: string[] = [];
    while (selectedKeys.length < number) {
      let index = Math.floor(Math.random() * keys.length);
      let suggestedKey = keys[index];
      if (!selectedKeys.includes(suggestedKey)) {
        selectedKeys.push(suggestedKey);
      }
    }
    selectedKeys.sort();
    const result: any = {};
    selectedKeys.map((k) => (result[k] = this._data[k]));
    return result;
  }
}
