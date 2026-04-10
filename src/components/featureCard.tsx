import type { featureType } from "../lib/types";
import "../styles/components/_featureCard.css";
export function FeatureCard({ name, description, icon }: featureType) {
  const Icon = icon;

  return (
    <div className="card-container">
      {/* Header section */}
      <section className="card-container-header">
        <h3>{name}</h3>
        <Icon />
      </section>

      {/* desc section */}
      <section className="card-container-description ">
        <p>{description}</p>
      </section>

      <section>
        <button>Explore</button>
      </section>
    </div>
  );
}
