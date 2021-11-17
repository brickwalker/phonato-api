import axios from "axios";
import { expect } from "chai";
import * as config from "../config/config.json";

describe("NatoApp & NatoRouter", function () {

  let baseUrl: string;
  before (function () {
    baseUrl = `http://localhost:${config.port}/${config.appName.toLowerCase()}`
  });

  it("should return all NATO alphabet keys to GET request onto root endpoint", function (done) {
    axios
      .get(baseUrl)
      .then(function (response) {
        expect(Object.keys(response.data).length).to.be.equal(26);
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });

  it("should return given letter spelling on GET request onto letter endpoint", function (done) {
    const letter = "t";
    axios
      .get(`${baseUrl}/${letter}`)
      .then(function (response) {
        expect(response.data).to.deep.equal({"T": "Tango"});
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });

  it("should return one random letter spelling on GET request onto random endpoint", function (done) {
    axios
      .get(`${baseUrl}/random`)
      .then(function (response) {
        expect(Object.entries(response.data).flat().length).to.equal(2);
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });

  it("should return a number of random letter spellings on GET request onto random endpoint with quantity", function (done) {
    const quantity = 3;
    axios
      .get(`${baseUrl}/random/${quantity}`)
      .then(function (response) {
        expect(Object.entries(response.data).length).to.equal(quantity);
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });

  it("should return valid response to POST request", function (done) {
    const expectedResult = [
      { S: "Sierra" },
      { A: "Alfa" },
      { S: "Sierra" },
      { H: "Hotel" },
      { A: "Alfa" },
    ];
    axios
      .post(baseUrl, { input: "Sasha" })
      .then(function (response) {
        expect(response.data).to.deep.equal(expectedResult);
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });
});
