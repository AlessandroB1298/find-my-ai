import { Bot } from "lucide-react";
import "../styles/App.css";
export function Nav() {
  return (
    <nav className="nav">
      <div className="banner">
        <h4>MYAI</h4>
        <Bot />
      </div>
      <ul>
        <li>
          <a href="/">Explore</a>
        </li>

        <li>
          <a href="/leaderboard">Leaderboard</a>
        </li>
        <li>
          <a href="">Alternatives</a>
        </li>

        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
