import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { skillsController } from "./skills.controler";

const router = Router();
router.post(
  "/creatSkills",
  multerUpload.single("image"),
  skillsController.createSkills
);
router.get("/", skillsController.getSkils);
router.delete("/:id", skillsController.deletSkils);

export const skillsRouter = router;
