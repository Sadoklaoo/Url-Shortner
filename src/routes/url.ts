import { Router } from "express";
import UrlController from "../controllers/UrlController";

const router = Router();

//shorten url
router.post("/shorten", UrlController.shorten);

//redirect shorten url
router.get("/:shortURL", UrlController.redirect);

export default router;
