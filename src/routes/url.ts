import { Router } from "express";
import UrlController from "../controllers/UrlController";

const router = Router();

//shorten url
router.get("/shorten", UrlController.shorten);

export default router;
