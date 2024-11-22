import { model, Schema } from "mongoose";
import { TSkils } from "./skils.interface";

export const skilsSchema = new Schema<TSkils>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Skils = model<TSkils>("Skils", skilsSchema);
