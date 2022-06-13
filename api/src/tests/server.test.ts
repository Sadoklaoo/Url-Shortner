process.env.NODE_ENV = "test";
// import Url from "../src/models/url";
// import User from "../src/models/user";
//import StartServer from "../server";
import * as chai from "chai";
//import request from "supertest";
import chaiHttp = require("chai-http");
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

//const app = StartServer();

// describe("Server checks", function () {
//   it("Server instantiated without error", function (done) {
//     request(app).get("/").expect(200, done);
//   });
// });

describe("User", () => {
  describe("Creation", () => {
    it("always pass", () => {
      expect(true).to.equal(true);
    });
  });
});
