import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { projcetController } from "./project.controller";

const router = Router();
router.post(
  "/createProject",
  multerUpload.array("images", 10),
  projcetController.createProject
);

export const ProjcetRouter = router;
