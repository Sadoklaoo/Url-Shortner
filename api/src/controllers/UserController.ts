import mongoose from "mongoose";
import { Request, Response } from "express";
import user from "../models/user";
import * as bcrypt from "bcrypt";
class UserController {
  static login = async (req: Request, res: Response) => {
    // get credentials
    const { email, password } = req.body;

    // look for user by email in Database
    user.findOne({ email: email }).then((User) => {
      // check if user is not empty
      if (User != null) {
        // compare crypted password
        bcrypt.compare(password, User["password"], function (err, result) {
          if (err) {
            //Error occured
            return res.status(500).json({ message: "Server Error" });
          }
          // logged in
          if (result) {
            return res.status(200).json({ message: "User Logged" });
            // error password
          } else {
            return res.status(401).json({ message: "Credentials Error" });
          }
        });
      } else {
        return res.status(404).json({ message: "User not Found" });
      }
    });
  };

  static create = async (req: Request, res: Response) => {
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
