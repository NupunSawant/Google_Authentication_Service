import express from "express";
import {
  getAuthUrlController,
  handleGoogleCallback,
  checkLoggedIn,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/url", getAuthUrlController);
router.get("/token", handleGoogleCallback);
router.get("/logged_in", checkLoggedIn);
router.post("/logout", logout);

export default router;
