import { Router } from "express";
import { userRoute } from "../modules/user/user.router";
import { ProjcetRouter } from "../modules/Project/project.router";
import { skillsRouter } from "../modules/Skills/skills.router";
import { blogRouter } from "../modules/blog/blog.router";

const router = Router();

const moduleRoute = [
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/projcet",
    route: ProjcetRouter,
  },
  {
    path: "/skill",
    route: skillsRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
