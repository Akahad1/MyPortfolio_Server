import { TSkills } from "./skills.interface";
import { Skills } from "./skills.model";

const PostSkillsFromDB = async (playload: TSkills) => {
  const result = await Skills.create(playload);
  return result;
};
const getSkillsFromDB = async () => {
  const result = await Skills.find();
  return result;
};
const deletSkillsFromDB = async (id: string) => {
  const result = await Skills.findByIdAndDelete(id);
  return result;
};
export const SkillsServices = {
  PostSkillsFromDB,
  getSkillsFromDB,
  deletSkillsFromDB,
};
