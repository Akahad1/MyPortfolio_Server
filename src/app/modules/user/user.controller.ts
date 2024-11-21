import { userServices } from "./user.services";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const loginUser = catchAsync(async (req, res) => {
  const result = await userServices.LoginUserFromDB(req.body);

  // res.cookie("refreshToken", refreshToken, {
  //   secure: config.node_env === "production",
  //   httpOnly: true,
  // });
  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: "User logged in successfully",

    data: result,
  });
});

export const userController = {
  loginUser,
};
