import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const PostBlogFromDB = async (playload: TBlog) => {
  const result = await Blog.create(playload);
  return result;
};
const getBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const deletedBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
const getSpecificBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
export const blogServices = {
  PostBlogFromDB,
  getBlogFromDB,
  deletedBlogFromDB,
  getSpecificBlogFromDB,
};
