import express from "express";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import routes from "./routes/index.js";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export function CreateApp() {
  const app = express();

  app.use(express.json());

  console.log("path: ", path.join(__dirname, "images"));
  app.use("/images", express.static(path.join(__dirname, "images")));

  app.use(routes);

  app.use(handleUncaughtErrors);
  return app;
}