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
            <p>Multi-Step-Form</p>
          </div>
          <div className="footer-resource-content">
            <p>Leaderboard</p>
          </div>
          <div className="footer-resource-content">
            <p>Alternatives</p>
          </div>
          <div className="footer-resource-content">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <FaGithub className="icon" />
        <FaLinkedin className="icon" />
      </div>
    </div>
  );
}
