import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/router/router";

const app: Application = express();

// Middleware to parse JSON and handle CORS
// { origin: ["https://assinment6-theta.vercel.app"], credentials: true }
app.use(express.json());
app.use(
  cors({
    origin: ["https://genuine-bavarois-cc1e32.netlify.app"],
    credentials: true,
  })
);

// Basic test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Main API routes
app.use("/api", router);

// Catch-all for 404 errors

export default app;
