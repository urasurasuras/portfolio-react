import { Github, Linkedin } from "react-bootstrap-icons";
import { Links } from "../variables/Endpoints";

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <a className="d-block" href={Links.Source}>
              <Github size={96} />
            </a>
            <a className="d-block" href={Links.Source}>
              Source of this page
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <a className="d-block" href={Links.LinkedIn}>
              <Linkedin size={96} />
            </a>
            <a className="d-block" href={Links.LinkedIn}>
              Contact via LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
