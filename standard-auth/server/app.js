import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config/oauth.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(
  cors({
    origin: [config.clientUrl],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

export default app;
