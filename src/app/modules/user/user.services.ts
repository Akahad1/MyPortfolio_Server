import { User } from "./user.model";
import bcrypt from "bcrypt";
import { createToken } from "./user.utils";

const LoginUserFromDB = async (payload: any) => {
  const user = await User.findOne({ email: payload.email });
  console.log(user?.password);
  console.log(payload.password);

  if (!user) {
    throw new Error("This user in not Exis");
  }
  if (payload.password) {
    const isPasswordMatched = await bcrypt.compare(
      payload.password,
      user.password
    );
    console.log(isPasswordMatched);
    if (!isPasswordMatched) {
      throw new Error("Password Incorrect!");
    }
  }
  const jwtPayload = {
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    process.env.JWT_ACCEESS_SECRET as string,
    process.env.JWT_ACCEESS_TOKEN_EXPIRE as string
  );

  return {
    accessToken,

    user,
  };
};

export const userServices = {
  LoginUserFromDB,
};
