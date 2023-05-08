import { Button } from "react-bootstrap";
import { Endpoints } from "../variables/Endpoints";
import "./Resume.css"
function Resume() {
  return (
    <section className="page-section bg-dark text-white" id="resume">
      <div className="container text-center">
        <h2 className="mb-4">Take a look at my resume, and my projects!</h2>
        <Button
          className="btn btn-light btn-xl me-3"
          href={Endpoints.ResumePDF}
          target="_blank"
        >
          Fullstack Developer Resume
        </Button>
        <Button
          className="btn btn-light btn-xl me-3"
          href={Endpoints.GameDevResumePDF}
          target="_blank"
        >
          Game Developer Resume
        </Button>
        <Button className="btn btn-light btn-xl me-3" href={Endpoints.Projects}>
          Projects
        </Button>
      </div>
    </section>
  );
}

export default Resume;
