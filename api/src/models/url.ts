import mongoose, { Model } from "mongoose";
import shortId from "shortid";
export interface IUrl {
  full: string;
  short: string;
}

export interface IUrlModel extends IUrl, Document {}

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
    unique: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
});

export const Url: Model<IUrlModel> = mongoose.model<IUrlModel>(
  "Url",
  urlSchema
);
