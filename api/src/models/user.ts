import mongoose, { Model, Schema } from "mongoose";
import * as bcrypt from "bcrypt";
export interface IUser {
  email: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export  const User : Model<IUserModel> = mongoose.model<IUserModel>("User", userSchema);

