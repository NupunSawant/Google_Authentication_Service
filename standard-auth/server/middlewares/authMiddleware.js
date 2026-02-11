import jwt from "jsonwebtoken";
import config from "../config/oauth.js";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, config.tokenSecret);
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authMiddleware;
