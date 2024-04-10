import express from "express";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./index.js";

export function CreateApp() {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(handleUncaughtErrors);
  return app;
}