import { IUrlModel } from "./../models/url";
import mongoose from "mongoose";
import { IUserModel } from "../models/user";

import { addNewUser, connectDb, shortenUrl } from "../services/mongo.service";

describe("MongoDB service", () => {
  let mongoClient: typeof mongoose;

  // User Instance
  const user: Partial<IUserModel> = {
    email: "sadok.laouissi.sl@gmail.com",
    password: "test123",
  };

  // Url Instance
  const url: Partial<IUrlModel> = {
    full: "https://www.google.com",
  };

  // Database instance before all tasks
  beforeAll(async () => {
    mongoClient = await connectDb();
  });

  // Close Database instance after all tasks executed
  afterAll(async () => {
    await mongoClient.connection.close();
  });

  // Drop Database after each task executed
  afterEach(async () => {
    await mongoClient.connection.db.dropDatabase();
  });

  describe("User API", () => {
    test("Add new user", async () => {
      const saved = await addNewUser(user);

      expect(saved.email).toEqual("sadok.laouissi.sl@gmail.com");
    });
  });

  describe("Url API", () => {
    test("Shorten url", async () => {
      const saved = await shortenUrl(url);

      expect(saved.short.length).toBeLessThan(saved.full.length);
    });
  });
});
