import MainContent from "../components/mainContainer";
import "../styles/components/_alternatives.css";

export function Alternatives() {
  return (
    <div className="alternatives-container">
      <div className="alternatives-info">
        <h2 className="alternatives-title">Alternatives</h2>
        <p className="alternatives-sub-title">
          Check out some open-sourced alternatives and how to set them up
          locally.
        </p>
      </div>
      <div className="alternatives-content">
        <MainContent />
      </div>
    </div>
  );
}
