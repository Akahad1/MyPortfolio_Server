import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchma = new Schema<TProject>({
  ProjectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ToolsTechnologies: {
    type: [String],
    default: [],
  },
  feature: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  LiveLink: {
    type: String,
    required: true,
  },
  ClientSideGithubLink: {
    type: String,
    required: true,
  },
  ServerSideGithubLink: {
    type: String,
    required: true,
  },
});

export const Project = model<TProject>("Project", projectSchma);
