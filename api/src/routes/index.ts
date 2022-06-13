import { Router } from "express";
import UrlController from "../controllers/UrlController";
import url from "./url";
import user from "./user";

const routes = Router();

// Users Routes
routes.use("/users", user);

// Uri Routes
routes.use("/url", url);

//redirect shorten url
routes.get("/:shortURL", UrlController.redirect);

export default routes;
