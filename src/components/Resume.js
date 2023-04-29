import { Endpoints } from "../variables/Endpoints";

function Resume() {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Take a look at my resume!</h2>
        <a
          className="btn btn-light btn-xl"
          href={Endpoints.Resume}
          target="_blank"
        >
          View PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;
