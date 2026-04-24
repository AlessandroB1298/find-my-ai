import { ChartColumn, Info, Layers, ListChevronsUpDown } from "lucide-react";
import type { featureType } from "../lib/types";
import { FeatureCard } from "./featureCard";
import "../styles/components/_featureCard.css";

const features: featureType[] = [
  {
    name: "Leaderboard",
    description:
      "A tabulated leaderboard showing the top preforming AI models, ranging from LLMs, SLMs, and CV models",
    icon: ChartColumn,
    link: "/leaderboard",
  },
  {
    name: "Multi-Step AI Helper",
    description:
      "We provide a multi-step AI-helper, allowing you to select a AI tool/model based on your project needs, budget requirements, and ease-of-access",
    icon: Layers,
    link: "/ai-helper",
  },
  {
    name: "Open-Sourced Alternatives",
    description:
      "A section dedicated to open-sourced alternatives, if you are feeling tech-savy and want to run models locally",
    icon: ListChevronsUpDown,
    link: "/alternatives",
  },
  {
    name: "About",
    description:
      "A section dedicated to the mission statement for this project and why it has merit.",
    icon: Info,
    link: "/about",
  },
];

export function Features() {
  return (
    <div>
      <div className="header-container">
        <h3 className="header-title">Features</h3>
      </div>
      <div className="cards">
        {features.map((feature) => (
          <FeatureCard
            key={feature.name}
            name={feature.name}
            description={feature.description}
            icon={feature.icon}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
}
