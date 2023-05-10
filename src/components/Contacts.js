import { Github, Linkedin, EnvelopeAt, Phone } from "react-bootstrap-icons";
import { Links, ContactInfo } from "../variables/Endpoints";
import ContactBox from "./ContactBox";

function Contacts() {
  const iconSize = 96;
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
          <ContactBox
            icon={<Github size={iconSize} />}
            title="GitHub"
            href={Links.GitHub}
          />
          <ContactBox
            icon={<Linkedin size={iconSize} />}
            title="LinkedIn"
            href={Links.LinkedIn}
          />
          <ContactBox
            icon={<Phone size={iconSize} />}
            title="Phone"
            href={ContactInfo.Phone}
          />
          <ContactBox
            icon={<EnvelopeAt size={iconSize} />}
            title="Email"
            href={ContactInfo.Email}
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
