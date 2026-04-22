import { useState } from "react";
import "../styles/components/_ai-helper.css";
import { Stepper } from "react-form-stepper";
import { SUPPORT_TYPE, PROJECT_TYPE, PROJECT_COST } from "../lib/constants";
import type {
  HelperType,
  ProjectCost,
  ProjectSupportType,
  ProjectType,
} from "../lib/types";
import { agent } from "../lib/langGraph/setup";
import { Loader2 } from "lucide-react";
import type { ContentBlock } from "langchain";
import ReactMarkdown from "react-markdown";
import { Margin, usePDF } from "react-to-pdf";

export function AiHelper() {
  const [step, setStep] = useState<number>(0);
  const { toPDF, targetRef } = usePDF({
    filename: "ai-design-doc.pdf",
    page: { margin: Margin.MEDIUM, orientation: "landscape" },
  });

  const [result, setResult] = useState<string | (ContentBlock | Text)[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [warningDialog, setWarningDialog] = useState<boolean>(true);
  const [helper, setHelper] = useState<HelperType>({
    projectName: "",
    projectType: "" as ProjectType,
    projectCost: "" as ProjectCost,
    projectSupportType: "" as ProjectSupportType,
    projectDesc: "",
    projectTechStack: "",
  });

  const clearField = () => {
    setHelper({
      projectName: "",
      projectType: "" as ProjectType,
      projectCost: "" as ProjectCost,
      projectSupportType: "" as ProjectSupportType,
      projectDesc: "",
      projectTechStack: "",
    });
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result) {
      setIsOpen(!isOpen);
      return;
    }
    try {
      setLoading(true);
      const response = await agent.invoke(
        {
          messages: [
            {
              role: "user",
              content: "What model/workflow should I use given my criteria?",
            },
          ],
        },
        {
          // The agent uses 'configurable' for thread management
          configurable: {
            thread_id: "1",
            project: helper, // Option A: Tool looks in configurable
          },
          // Custom context passed to the agent
          context: {
            project: helper, // Option B: Tool looks in context
          },
        },
      );
      const results = response.messages;
      setResult(results[results.length - 1].text);
      setLoading(false);
      setIsOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="helper-container">
      {warningDialog && (
        <dialog className="helper-dialog-notice" popover="auto">
          <div>
            <h1>Warning</h1>
            <div className="helper-dialog-notice-message">
              <p>
                Please be aware, this project uses llama3.2 for local inference,
                to use this section of application, please make sure you have
                downloaded the
                <span className="helper-dialog-notice-link">
                  <a target="_blank" href="https://ollama.com/">
                    {" "}
                    Ollama{" "}
                  </a>
                </span>
                application
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setWarningDialog(!warningDialog);
            }}
          >
            Close
          </button>
        </dialog>
      )}
      <div className="helper-info">
        <h3 className="helper-title">AI Helper</h3>
        <p className="helper-sub-title">
          Multi-step AI helper to help you decide!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="helper-form">
        <div>
          <Stepper
            activeStep={step}
            className="helper-stepper"
            styleConfig={{
              activeBgColor: "purple",
              inactiveBgColor: "#9ca3af",
              inactiveTextColor: "white",
              completedBgColor: "#9ca3af",
            }}
            steps={[
              { label: "Project Info" },
              { label: "Project Details" },
              { label: "Finalize Project" },
            ]}
          />
        </div>
        {/* Step 0 */}
        {step === 0 && (
          <div>
            <div className="helper-step-form">
              <div className="helper-form-item">
                <label>Project Name</label>
                <input
                  onChange={(e) => {
                    setHelper({ ...helper, projectName: e.target.value });
                  }}
                  value={helper.projectName}
                  className="helper-form-input"
                  placeholder="MYAI"
                />
              </div>
              <div className="helper-form-item">
                <label>Project Type</label>
                <select
                  value={helper.projectType}
                  onChange={(e) => {
                    setHelper({
                      ...helper,
                      projectType: e.target.value as ProjectType,
                    });
                  }}
                  className="helper-form-input"
                >
                  {Object.entries(PROJECT_TYPE).map(([value, option]) => (
                    <option key={value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="helper-form-item">
                <label>Project Description</label>
                <textarea
                  maxLength={300}
                  onChange={(e) => {
                    setHelper({ ...helper, projectDesc: e.target.value });
                  }}
                  value={helper.projectDesc}
                  placeholder="Full-stack application in React..."
                  className="helper-form-input-textarea"
                />
              </div>
            </div>
            <div className="helper-form-button-container">
              <button disabled>Previous</button>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <div className="helper-step-form">
              <div className="helper-form-item">
                <label>Support Type</label>
                <select
                  onChange={(e) => {
                    setHelper({
                      ...helper,
                      projectSupportType: e.target.value as ProjectSupportType,
                    });
                  }}
                  value={helper.projectSupportType}
                  className="helper-form-input"
                >
                  {Object.entries(SUPPORT_TYPE).map(([value, option]) => (
                    <option key={value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="helper-form-item">
                <label>Project Cost</label>
                <select
                  onChange={(e) => {
                    setHelper({
                      ...helper,
                      projectCost: e.target.value as ProjectCost,
                    });
                  }}
                  value={helper.projectCost}
                  className="helper-form-input"
                >
                  {Object.entries(PROJECT_COST).map(([value, option]) => (
                    <option key={value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="helper-form-item">
                <label>Project Tech Stack</label>
                <textarea
                  maxLength={300}
                  onChange={(e) => {
                    setHelper({ ...helper, projectTechStack: e.target.value });
                  }}
                  value={helper.projectTechStack}
                  placeholder="Describe your tech stack..."
                  className="helper-form-input-textarea"
                />
              </div>
            </div>
            <div className="helper-form-button-container">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <div className="helper-step-form">
              <div className="helper-form-item">
                <label>Project Name</label>
                <p>{helper.projectName}</p>
              </div>
              <div className="helper-form-item">
                <label>Project Type</label>
                <p>{helper.projectType}</p>
              </div>
              <div className="helper-form-item">
                <label>Project Support Type</label>
                <p>{helper.projectSupportType}</p>
              </div>
              <div className="helper-form-item">
                <label>Project Cost</label>
                <p>{helper.projectCost}</p>
              </div>
            </div>
            <div className="helper-form-item">
              <label>Project Description</label>
              <p className="helper-form-textarea">{helper.projectDesc}</p>
            </div>
            <div className="helper-form-item">
              <label>Project Tech Stack</label>
              <p className="helper-form-textarea">{helper.projectTechStack}</p>
            </div>

            <div className="helper-form-button-container">
              <button
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Previous
              </button>
              <button type="submit">{result ? "Open" : "Submit"}</button>
              {result && (
                <button
                  type="button"
                  onClick={() => {
                    clearField();
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}
      </form>
      {loading && (
        <div className="loading">
          <Loader2 />
        </div>
      )}
      {/* Modal section showing ai model's results */}
      {result && isOpen && (
        <dialog className="helper-dialog">
          <div className="helper-dialog-content">
            <div ref={targetRef}>
              <ReactMarkdown>{String(result)}</ReactMarkdown>
            </div>
            <div className="helper-dialog-buttons">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  toPDF();
                  setIsOpen(!isOpen);
                }}
              >
                Export
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
