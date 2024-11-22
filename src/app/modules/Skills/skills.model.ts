import { model, Schema } from "mongoose";
import { TSkills } from "./skills.interface";

export const skilsSchema = new Schema<TSkills>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

export const Skills = model<TSkills>("Skills", skilsSchema);
