import { config } from './../config/config';
import mongoose, { ConnectOptions } from "mongoose";
import { Url, IUrlModel } from "../models/url";

import { User, IUserModel } from "../models/user";

export async function connectDb() {
    
  return await mongoose.connect(config.mongo.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  } as ConnectOptions);
}

export async function addNewUser(NewUser: Partial<IUserModel>) {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    email: NewUser.email,
    password: NewUser.password,
  });
  return await newUser.save();
}

export async function shortenUrl(shortUrl: Partial<IUrlModel>) {
  const shortenUrl = new Url({
    _id: new mongoose.Types.ObjectId(),
    full: shortUrl.full,
  });
  return await shortenUrl.save();
}
