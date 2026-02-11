import express from "express";
import axios from "axios";
import authMiddleware from "../middlewares/authMiddleware.js";
import config from "../config/oauth.js";

const router = express.Router();

router.get("/posts", authMiddleware, async (_, res) => {
  const { data } = await axios.get(config.postUrl);
  res.json({ posts: data.slice(0, 5) });
});

export default router;
