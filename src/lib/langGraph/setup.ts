import { tool, type ToolRuntime, createAgent } from "langchain";
import type { HelperType } from "../types";
import { ChatOllama } from "@langchain/ollama";
import z from "zod/v3";

const systemPrompt = `You are a helpful Ai agent, dedicated to helping clients select an AI Model/AI-workflow.

Using the results from the get_user_feedback tool, these results should help influence your decision.
Really pay attention to the techstack the user wishes to use.
Your job is to use these fields to generate a top 3 of AI workflows/ agents that the user should consider. 
These top three workflows should be formatted nicely using markdown, make sure to explain based on the price, support type, and type of project.

`;

type AgentRuntime = ToolRuntime<unknown, { project: HelperType }>;
const getUserFeedback = tool(
  (_, { config }: AgentRuntime) => {
    const project = config?.configurable?.project || config?.context?.project;
    return JSON.stringify(project || "No data");
  },
  {
    name: "get_user_feedback",
    description: "Get user project data. Takes NO arguments.",
    // Use an empty object schema to tell the LLM not to invent parameters
    schema: z.object({}),
  },
);

// Initialize the model explicitly
const model = new ChatOllama({
  model: "llama3.2",
  baseUrl: "http://localhost:11434", // Default URL
  temperature: 1.2,
  stop: ["Observation:", "Tool Response:"], // Prevents the model from writing its own answers
});

const responseFormat = z.object({
  answer: z
    .string()
    .describe(
      "Your final recommendations should be in markdown format, each reccomendation should have a h1 header and sub-topics should have a h3 header, the rest should be a p tag.",
    ),
});

export const agent = createAgent({
  model: model, // Pass the instance instead of a string
  systemPrompt: systemPrompt,
  tools: [getUserFeedback],
  responseFormat: responseFormat, // LangChain handles the structured logic for you
});
