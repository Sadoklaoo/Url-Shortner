import { Router } from "express";
import url from "./url";
import user from "./user";

const routes = Router();

// Users Routes
routes.use("/users", user);

// Uri Routes
routes.use("/url", url);

export default routes;
