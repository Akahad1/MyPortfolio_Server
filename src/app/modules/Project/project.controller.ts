import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { projectServices } from "./project.services";

const createProject = catchAsync(async (req, res) => {
  const files = req.files as Express.Multer.File[];
  console.log(files);
  const imageLinks = files.map((file) => file.path);
  console.log(imageLinks);
  const bodyData =
    typeof req.body.data === "string" ? JSON.parse(req.body.data) : req.body;

  const result = await projectServices.PostProjectFromDB({
    ...bodyData,
    images: imageLinks,
  });

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "project create  successfully",

    data: result,
  });
});

const getProject = catchAsync(async (req, res) => {
  const result = await projectServices.getProjectFromDB();

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "project get  successfully",

    data: result,
  });
});
const deletedProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.deletedProjectFromDB(id);

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: " deleted project   successfully",

    data: result,
  });
});
export const projcetController = {
  createProject,
  getProject,
  deletedProject,
};
