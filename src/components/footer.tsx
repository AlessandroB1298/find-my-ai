import { Bot } from "lucide-react";
import "../styles/components/_footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-header">
          <h3>MYAI</h3>
          <Bot />
        </div>
        <div className="footer-resources">
          <div className="footer-resource-content">
            <a>Multi-Step-Form</a>
          </div>
          <div className="footer-resource-content">
            <a href="/leaderboard">Leaderboard</a>
          </div>
          <div className="footer-resource-content">
            <a>Alternatives</a>
          </div>
          <div className="footer-resource-content">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="social-media">
        <a target="_blank" href="https://github.com/AlessandroB1298/find-my-ai">
          <FaGithub className="icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aidan-bongiorno-215194255/"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}
