import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import user from "../models/user";

class UserController {
  static login = async (req: Request, res: Response) => {};

  static create = async (req: Request, res: Response, next: NextFunction) => {
    // get credentials
    const { email, password } = req.body;

    //new user created
    const User = new user({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      password: password,
    });

    //save to database
    return (
      User.save()
        .then((User) => res.status(201).json({ User }))

        //error occured
        .catch((err) => res.status(500).json({ err }))
    );
  };
}
export default UserController;
