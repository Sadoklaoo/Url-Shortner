import { Router, Request, Response } from "express";
import uri from "./uri";
import user from "./user";




const routes = Router();

// Users Routes 
routes.use("/users",user);

// Uri Routes 
routes.use("/uri",uri);

routes.get("/", (req, res)=>{
    res.render("index")
})




export default routes;