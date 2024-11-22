import { TProject } from "./project.interface";
import { Project } from "./project.model";

const PostProjectFromDB = async (playload: TProject) => {
  const result = await Project.create(playload);
  return result;
};
const getProjectFromDB = async () => {
  const result = await Project.find();
  return result;
};
const deletedProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};
export const projectServices = {
  PostProjectFromDB,
  getProjectFromDB,
  deletedProjectFromDB,
};
