import { Bot } from "lucide-react";
import "../styles/App.css";
export function Nav() {
  return (
    <nav className="nav">
      <div className="banner">
        <a href="/">MYAI</a>
        <Bot />
      </div>
      <ul>
        <li>
          <a href="/ai-helper">AI Helper</a>
        </li>
        <li>
          <a href="/leaderboard">Leaderboard</a>
        </li>
        <li>
          <a href="">Alternatives</a>
        </li>

        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
