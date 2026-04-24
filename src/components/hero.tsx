import "../styles/App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/hero-animated.json";

export function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-info">
        <h1>
          Welcome to <span className="hero-text">AIMIA</span>
        </h1>
        <div className="hero-sub-title">
          <p>Simplify your build</p>
          <div className="hero-separator" />
        </div>
      </div>

      <Player
        className="lottie-animation"
        src={animation}
        autoplay
        loop
      ></Player>
    </div>
  );
}
