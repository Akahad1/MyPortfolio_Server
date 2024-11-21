import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchma = new Schema<TUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

export const User = model<TUser>("User", userSchma);
