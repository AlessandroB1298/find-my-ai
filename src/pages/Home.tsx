import "../styles/App.css";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Features />
      </div>
      <Footer />
    </div>
  );
}
