import { TProject } from "./project.interface";
import { Project } from "./project.model";

const PostProjectFromDB = async (playload: TProject) => {
  const result = await Project.create(playload);
  return result;
};
export const projectServices = {
  PostProjectFromDB,
};
