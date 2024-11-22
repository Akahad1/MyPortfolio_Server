import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dmwkcotdc",
  api_key: "489416364161494",
  api_secret: "C-IaGTyejOSE6qop8LT14Ul-yl0",
});
console.log(process.env.API_SECRET);
console.log(process.env.CLOUD_NAME);
export const cloudinaryUpload = cloudinary;
