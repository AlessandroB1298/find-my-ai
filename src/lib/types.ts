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
