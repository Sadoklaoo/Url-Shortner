import { Router } from "express";
import UrlController from "../controllers/UrlController";

const router = Router();

//shorten url
router.post("/shorten", UrlController.shorten);

export default router;
