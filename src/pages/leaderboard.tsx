import "../styles/components/_leaderboard.css";
import json from "../lib/leaderboard.json";
import type { leaderboardType } from "../lib/types";
import Anthropic from "../assets/anthropic.png";
import OpenAI from "../assets/openai.png";
import Google from "../assets/google.png";
import DeepSeek from "../assets/deepseek.png";
import Qwem from "../assets/qwen.png";
import ZAI from "../assets/z.png";
import Grok from "../assets/grok.png";
import { Bot } from "lucide-react";

export function LeaderBoard() {
  const data: leaderboardType[] = json;

  const renderLogo = (creator: string) => {
    switch (creator) {
      case "Anthropic": {
        return <img src={Anthropic} />;
      }
      case "OpenAI": {
        return <img src={OpenAI} />;
      }
      case "Google": {
        return <img src={Google} />;
      }
      case "DeepSeek": {
        return <img src={DeepSeek} />;
      }
      case "Alibaba": {
        return <img src={Qwem} />;
      }
      case "Z.AI": {
        return <img src={ZAI} />;
      }
      case "xAI": {
        return <img src={Grok} />;
      }
      default: {
        return <Bot />;
      }
    }
  };
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">AI Leaderboard</h2>
      <h3 className="leaderboard-citation">
        All data from{" "}
        <span>
          <a target="_blank" href="https://benchlm.ai/">
            Benchlm
          </a>
        </span>
      </h3>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Model</th>
            <th>Creator</th>
            <th>Overall Score</th>
            <th>Pricing (In/Out)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="rank-cell">{item.rank}</td>
              <td className="model-cell">
                <div className="model-info">
                  {renderLogo(item.creator)}
                  <span className="model-cell">{item.model}</span>
                </div>
              </td>
              <td className="creator-cell">{item.creator}</td>
              <td className="score-cell">{item.overallScore}</td>
              {Number(item.outputPrice) / Number(item.inputPrice) > 4 ? (
                <td className="price-cell-high">
                  <small>
                    ${item.inputPrice} / ${item.outputPrice}
                  </small>
                </td>
              ) : (
                <td className="price-cell-low">
                  <small>
                    ${item.inputPrice} / ${item.outputPrice}
                  </small>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
