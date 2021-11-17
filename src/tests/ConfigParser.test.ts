import { expect } from "chai";
import * as config from "../config/config.json";
import { ConfigParser } from "../components/ConfigParser";

describe("ConfigParser", function () {

  it("should return app name from configuration file", function () {
    expect(ConfigParser.getAppName("FakeDefaultName")).to.be.equal(config.appName);
  });

  it("should return port from configuration file", function () {
    expect(ConfigParser.getPort(1)).to.be.equal(config.port);
  });

  it("should return data path from configuration file", function () {
    expect(ConfigParser.getDataPath("./fake/default/path")).to.be.equal(config.dataPath);
  });

});
