import "dotenv/config";
import mongoose from "mongoose";
import request from "supertest";
import { CreateApp } from "../app.js";
import user from "../models/user.js";
import ville from "../models/ville.js";

describe("Tests utilisateur et villes", () => {
  let app;
  let authToken; // token d'authentification
  let villeId; //supp de la ville créer


  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_STRING);
    
    app = CreateApp();
    
    const userResponse = await request(app)
      .post("/auth/signup")
      .send({
        email: "test@test.com",
        password: "Azerty0999",
        name: "test",
        phoneNumber: "0646050605"
      });
    expect(userResponse.statusCode).toBe(201);

    const loginResponse = await request(app)
      .post("/auth/signin")
      .send({
        email: "test@test.com",
        password: "Azerty0999"
      });
    expect(loginResponse.statusCode).toBe(200);
    expect(loginResponse.body).toHaveProperty("token");
    authToken = loginResponse.body.token; // Stocker le token d'authentification
  });

  it('GET /villes - Récupérer toutes les villes', async () => {
    const response = await request(app)
      .get('/villes')
      .set('Authorization', `Bearer ${authToken}`); 
    expect(response.status).toBe(200);
    console.log(response.body);
  });

  it('POST /villes - Ajouter une nouvelle ville', async () => {
    const newVille = { ville: 'Nara' };
    const response = await request(app)
      .post('/villes')
      .set('Authorization', `Bearer ${authToken}`)
      .send(newVille);
    expect(response.status).toBe(201);
    villeId = response.body._id;
    });

  afterAll(async () => {
    await user.deleteOne({ email: "test@test.com" });

    await ville.findByIdAndDelete(villeId);

    await mongoose.connection.close();
  });
});
