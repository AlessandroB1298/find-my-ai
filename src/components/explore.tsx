import "../styles/components/_explore.css";

export function Explore() {
  return (
    <div className="explore-container">
      <section className="explore-content">
        <div className="grid-item">
          <h3>Create New</h3>
          <p>
            Here you will create a new project, and upload relevant data for our
            multi-step form process.
          </p>
        </div>

        <div className="grid-item">
          <h3>Select Project Type</h3>
          <p>
            Here you will give a description of the project type and some of
            your concerns and needs as a developer.
          </p>
        </div>
        <div className="grid-item">
          <h3>Price</h3>
          <p>
            Here you will specify your budget for your project, this is how much
            you are willing to spend on your AI flow.
          </p>
        </div>
        <div className="grid-item">
          <h3>Finalize</h3>
          <p>
            Here you will finalize details and recieve your sugeested AI flow,
            this will also give you relevant documentation, and an explanation
            regarding the choice.
          </p>
        </div>
      </section>
    </div>
  );
}
