import "../styles/App.css";
import { Hero } from "../components/hero";
import { Features } from "../components/features";

export function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Features />
      </div>
    </div>
  );
}
