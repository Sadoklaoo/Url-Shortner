import mongoose from "mongoose";
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

export default mongoose.model<IUrlModel>("Url", urlSchema);
