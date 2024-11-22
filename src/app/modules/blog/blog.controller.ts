import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { blogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.PostBlogFromDB(req.body);

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "Blog create  successfully",

    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getBlogFromDB();

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "Blog Get successfully",

    data: result,
  });
});
const deletblog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.deletedBlogFromDB(id);

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "delet blog successfully",

    data: result,
  });
});
const getSpecificBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.getSpecificBlogFromDB(id);

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "delet blog successfully",

    data: result,
  });
});
export const blogController = {
  createBlog,
  getBlog,
  deletblog,
  getSpecificBlog,
};
