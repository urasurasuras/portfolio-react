import { Endpoints } from "../variables/Endpoints";

function Resume() {
  return (
    <section className="page-section bg-dark text-white" id="resume">
      <div className="container text-center">
        <h2 className="mb-4">Take a look at my resume, and my projects!</h2>
        <a
          className="btn btn-light btn-xl mr-3"
          href={Endpoints.ResumePDF}
          target="_blank"
        >
          View PDF
        </a>
        <a className="btn btn-light btn-xl mr-3" href={Endpoints.Projects}>
          Projects
        </a>
      </div>
    </section>
  );
}

export default Resume;
