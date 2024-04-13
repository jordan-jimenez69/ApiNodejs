import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import request from "supertest";
const MONGO_STRING = process.env.MONGO_STRING;
import { CreateApp } from "../app.js";
import user from "../models/user.js";

describe("creation d'un utilisateur et login", () => {
  let app;

  beforeAll(() => {
    mongoose
      .connect(MONGO_STRING)
      .then(() => console.log("Connected to the database for Testing!"))
      .catch((err) => console.log(err));
    app = CreateApp();
  });

  it("Should create a new user", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "test@test.com",
      password: "Azerty0999",
      name: "test",
      phoneNumber: "0646050605"
    });
    expect(response.statusCode).toBe(201);
  });

  it("Should login a user", async () => {
    const response = await request(app).post("/auth/signin").send({
      email: "test@test.com",
      password: "Azerty0999"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  afterAll(async () => {
    // delete the user created
    await user.deleteOne({ email: "test@test.com" });
    await mongoose.connection.close();
  });
});