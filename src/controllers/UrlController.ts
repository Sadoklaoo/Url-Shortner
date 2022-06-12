import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import url from "../models/url";

class UrlController {
  static shorten = async (req: Request, res: Response, next: NextFunction) => {
    // get full url
    const { full } = req.body;

    //new shortenUrl created
    const shortUrl = new url({
      _id: new mongoose.Types.ObjectId(),
      full: full,
    });

    //save to database
    return (
      shortUrl
        .save()
        .then((shortUrl) => res.status(201).json({ shortUrl }))

        //error occured
        .catch((err) => res.status(500).json({ err }))
    );
  };

  static redirect = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};
}
export default UrlController;
