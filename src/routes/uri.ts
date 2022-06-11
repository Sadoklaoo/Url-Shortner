import { Router } from "express";
import UriController from "../controllers/UriController";


const router = Router();

//create uri
router.get("/shorten", UriController.shorten);



export default router;