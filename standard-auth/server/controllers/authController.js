import jwt from "jsonwebtoken";
import config from "../config/oauth.js";
import { getAuthUrl, exchangeCodeForUser } from "../utils/googleOAuth.js";

export const getAuthUrlController = (_, res) => {
  res.json({ url: getAuthUrl() });
};

export const handleGoogleCallback = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ message: "Authorization code required" });
  }

  try {
    const user = await exchangeCodeForUser(code);

    const token = jwt.sign({ user }, config.tokenSecret, {
      expiresIn: config.tokenExpiration,
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: config.tokenExpiration,
    });

    res.json({ user });
  } catch (err) {
    console.error("OAuth error:", err);
    res.status(500).json({ message: "OAuth failed" });
  }
};

export const checkLoggedIn = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ loggedIn: false });

    const { user } = jwt.verify(token, config.tokenSecret);

    const newToken = jwt.sign({ user }, config.tokenSecret, {
      expiresIn: config.tokenExpiration,
    });

    res.cookie("token", newToken, {
      httpOnly: true,
      maxAge: config.tokenExpiration,
    });

    res.json({ loggedIn: true, user });
  } catch {
    res.json({ loggedIn: false });
  }
};

export const logout = (_, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
};
