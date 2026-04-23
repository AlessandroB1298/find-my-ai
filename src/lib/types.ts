import type { LucideIcon } from "lucide-react";

export type featureType = {
  name: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

export type leaderboardType = {
  rank: string;
  model: string;
  creator: string;
  sourceType: string;
  overallScore: string;
  inputPrice: string;
  outputPrice: string;
};

export type ContactFormProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export type ProjectType =
  | "Frontend"
  | "Backend"
  | "Fullstack"
  | "Ai-Project"
  | "infrastructure"
  | "Design";

export type ProjectSupportType = "Little" | "Moderate" | "Lots";

export type ProjectCost = "Free" | "Cheap" | "Moderate" | "Expensive";

export type HelperType = {
  projectName: string;
  projectType: ProjectType;
  projectDesc: string;
  projectTechStack: string;
  projectSupportType: ProjectSupportType;
  projectCost: ProjectCost;
};

export type CardData = {
  img: string;
  tag: string;
  title: string;
  description: string;
  link: string;
};
