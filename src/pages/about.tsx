import "../styles/components/_about.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function About() {
  return (
    <div className="about-container">
      <div className="about-info">
        <h2 className="about-title">About</h2>
        <p className="about-sub-title">
          Here is a little bit of information regarding the purpose of this
          projecct
        </p>
      </div>
      <div>
        <Accordion sx={{ backgroundColor: "#262833" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2 className="content-section-header">Mission Statement</h2>
          </AccordionSummary>
          <AccordionDetails className="content-section-body">
            AIMIA is designed to showcase AI stats, ranging from LLMs to CV
            models. Showing users the most popular and useful models that are
            available to them. This allows users to make sound decisions when
            planning their projects, understanding which models they can use,
            the price, and open-sourced alternatives. Along with this, there
            will be a multi-step form to help users select a AI workflow/Model
            to use based on project specs.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#262833" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h2 className="content-section-header"> Maintainer</h2>
          </AccordionSummary>
          <AccordionDetails className="content-section-body">
            Currently @AlessandroB1298 is the maintainer for this project.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#262833" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h2 className="content-section-header">Tech Stack</h2>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="content-section-tech">
              <li>React</li>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>MUI</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
