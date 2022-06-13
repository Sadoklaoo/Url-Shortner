import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

//create User
router.get("/create", UserController.create);

//Login
router.get("/login", UserController.login);


export default router;