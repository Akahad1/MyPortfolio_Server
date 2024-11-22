import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router();
router.post("/createblog", blogController.createBlog);
router.get("/:id", blogController.getSpecificBlog);
router.get("/", blogController.getBlog);
router.delete("/:id", blogController.deletblog);

export const blogRouter = router;
