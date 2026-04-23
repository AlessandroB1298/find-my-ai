import ollamaImage from "../assets/Ollama.png";
import gemma from "../assets/gemma.jpg";
import qwen from "../assets/qwen.webp";
import mistral from "../assets/mistral.webp";
import type { CardData } from "./types";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const SUPPORT_TYPE: Record<string, { color: string; label: string }> = {
  little: {
    color: "#32a852",
    label: "Very Little",
  },
  moderate: {
    color: "#a86332",
    label: "Moderate",
  },
  lots: {
    color: "#a83246",
    label: "Lots",
  },
};

export const PROJECT_TYPE: Record<string, { color: string; label: string }> = {
  frontend: {
    color: "#32a852",
    label: "Frontend",
  },
  backend: {
    color: "#a86332",
    label: "Backend",
  },
  fullstack: {
    color: "#a83246",
    label: "Fullstack",
  },
  aiProject: {
    color: "#a83246",
    label: "Ai-Project",
  },
  infastructure: {
    color: "#a83246",
    label: "infrastructure",
  },
  design: {
    color: "#a83246",
    label: "Design",
  },
};

export const PROJECT_COST: Record<string, { color: string; label: string }> = {
  free: {
    color: "#32a852",
    label: "Free",
  },
  cheap: {
    color: "#a86332",
    label: "$25 per month",
  },
  moderate: {
    color: "#a83246",
    label: "$50 per month",
  },
  expensive: {
    color: "#a83246",
    label: "$100+ per month",
  },
};

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  img: {
    border: "0.2px solid black",
  },
  "&:hover": {
    backgroundColor: "rgb(161, 73, 228)",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

export const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,

  "&:last-child": {
    paddingBottom: 16,
  },
});

export const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const TEST_EMAIL = "test@mail.com";

export const fullSizedCards: CardData[] = [
  {
    img: ollamaImage,
    tag: "Model Runner",
    title: "Ollama",
    description:
      "Using Ollama allows you to run many different models locally, easily, and also allows you to build with them as well.",
    link: "https://ollama.com/",
  },
  {
    img: gemma,
    tag: "Local Models",
    title: "Gemma",
    description:
      "Run local inferences with Gemma, this is a open model, meaning we can download it with Ollama and run it locally. However be aware that you need 7.2gb to download on your device.",
    link: "https://ollama.com/library/gemma3",
  },
  {
    img: qwen,
    tag: "Local Models",
    title: "Qwen3.5",
    description:
      "Run local inferences with Qwen, this model exceeds in many benchmarks and can run locally, however be aware that your need 6.6gb of space to download on your device. ",
    link: "https://ollama.com/library/qwen3.5",
  },
  {
    img: mistral,
    tag: "Local Models",
    title: "Mistral:7B",
    description:
      "Run local inferences with Mistral, this model is one of the best available, however be aware that you need 4.4gb to download onto device ",
    link: "https://ollama.com/library/mistral",
  },
];
