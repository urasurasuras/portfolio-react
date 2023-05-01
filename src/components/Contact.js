import { Github, Linkedin, EnvelopeAt, Phone } from "react-bootstrap-icons";
import { Links, ContactInfo } from "../variables/Endpoints";

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
          <div className="col-lg-3 ml-auto text-center">
            <a className="d-block" href={Links.GitHub}>
              <Github size={96} />
              <br />
              GitHub
            </a>
          </div>
          <div className="col-lg-3 mr-auto text-center">
            <a className="d-block" href={Links.LinkedIn}>
              <Linkedin size={96} />
              <br />
              LinkedIn
            </a>
          </div>
          <div className="col-lg-3 mr-auto text-center">
            <a className="d-block" href={"tel:" + ContactInfo.Phone}>
              <Phone size={96} />
              <br />
              Phone
            </a>
          </div>
          <div className="col-lg-3 mr-auto text-center">
            <a className="d-block" href={"mailto:" + ContactInfo.Email}>
              <EnvelopeAt size={96} />
              <br />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
