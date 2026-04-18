import "../styles/App.css";
import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Explore } from "../components/explore";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Features />
      </div>
      <Explore />
      <Footer />
    </div>
  );
}
