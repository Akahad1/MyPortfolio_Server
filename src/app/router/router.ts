import { Router } from "express";
import { userRoute } from "../modules/user/user.router";
import { ProjcetRouter } from "../modules/Project/project.router";

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
