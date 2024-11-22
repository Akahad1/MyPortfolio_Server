import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SkillsServices } from "./skils.services";

const createSkills = catchAsync(async (req, res) => {
  const bodyData =
    typeof req.body.data === "string" ? JSON.parse(req.body.data) : req.body;
  console.log(req.body);
  console.log(req.file);
  const result = await SkillsServices.PostSkillsFromDB({
    ...bodyData,
    image: req.file?.path,
  });

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "Skils create  successfully",

    data: result,
  });
});
const getSkils = catchAsync(async (req, res) => {
  const result = await SkillsServices.getSkillsFromDB();

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "Skils Get successfully",

    data: result,
  });
});
const deletSkils = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.deletSkillsFromDB(id);

  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "Skils Get successfully",

    data: result,
  });
});
export const skillsController = {
  createSkills,
  getSkils,
  deletSkils,
};
