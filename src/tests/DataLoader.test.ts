import { DataLoader } from "../components/DataLoader";
import { expect  } from "chai";
import { resolve } from "path";

describe("DataLoader", function(){
    let dataLoader: DataLoader;
    let relativePath: string;
    let dataPath: string;

    before(function() {
        relativePath = "../../data/data.json";
        dataPath = resolve(__dirname, relativePath);
    });

    beforeEach(function() {
        dataLoader = new DataLoader(dataPath); 
    });

    it("should return data as set", function(){
        dataLoader.data = {A: "Artem", S: "Sasha"};
        expect(dataLoader.data).to.deep.equal({A: "Artem", S: "Sasha"})
    })

    it("should return spelling of letter", function(){
        const letter = "b";
        const expectedResult = {"B": "Bravo"}
        expect(dataLoader.showOne(letter)).to.deep.equal(expectedResult);

    })

    it("should return specified number of random spellings", function(){
        expect(dataLoader.showRandom(0)).to.deep.equal({});
        expect(Object.keys(dataLoader.showRandom(5)).length).to.be.equal(5);
        expect(Object.keys(dataLoader.showRandom(377)).length).to.be.equal(26);
    })

    it("should return NATO spelling of word", function(){
        expect(dataLoader.spell("cat")).to.deep.equal([{C: "Charlie"}, {A: "Alfa"}, {T: "Tango"}]);
    })
});