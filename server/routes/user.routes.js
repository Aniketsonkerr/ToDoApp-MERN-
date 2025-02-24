import { Router } from "express";
import { userRegisteration } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(userRegisteration);

export default router;
