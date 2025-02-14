import { model, Schema } from "mongoose";

import { TBlog } from "./blog.interface";

export const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>("Blog", blogSchema);
