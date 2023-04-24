import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
// import logo from "./logo.svg";
// import "./App.css";
import NavbarComponent from "../components/Navbar";
import PortfolioItem from "../components/PortfolioItem";

function Home() {
  return (
    <div id="page-top">
      {/* <!-- Masthead--> */}
      <header className="masthead" id="home">
        <div className="container h-100">
          <div className="row h-100 align-items-center  ">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Portfolio
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-normal mb-5">
                Uras Oran
                <br />
                This portfolio page is for demonstration purposes <br />
                Though it contains links to real projects, placeholder images
                may be in use
                <br />
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">
                NJIT - Information Technology - Game Development Specialization
              </h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">
                I have been programming for various projects over the second
                half of my college education. These projects range from front
                end all the way to back end, game and game engine development!
                If you want to look at all the projects I have worked on, here
                is a link to my GitHub profile!
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="/projects"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Portfolio--> */}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <PortfolioItem
              link="https://github.com/urasurasuras/portfolio-react"
              image="assets/img/portfolio/fullsize/github-logo.png"
              category="Web Page"
              name="Source to this web page"
            />
            <PortfolioItem
              link="https://hydrametry.com"
              image="assets/img/portfolio/fullsize/HydraLogo.png"
              category="Game Development"
              name="Hydrametry Software"
            />
            <PortfolioItem
              link="/lodge"
              image="assets/img/portfolio/fullsize/lodge.png"
              category="Maya & Unreal Engine 4"
              name="Lodge"
            />
            <PortfolioItem
              link="https://github.com/urasurasuras/gf3d"
              image="assets/img/portfolio/fullsize/gf3d.png"
              category="Vulkan"
              name="gf3d"
            />
            <PortfolioItem
              link="https://github.com/urasurasuras/it490"
              image="assets/img/portfolio/fullsize/490.png"
              category="Web Application"
              name="System Integration"
            />
            <PortfolioItem
              link="https://github.com/urasurasuras/GrooveCrusaders_old"
              image="assets/img/portfolio/thumbnails/6.jpg"
              category="Unity"
              name="Groove Crusaders"
            />
          </div>
        </div>
      </div>
      {/* <!-- Call to action--> */}
      <section className="page-section bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Take a look at my resume!</h2>
          <a
            className="btn btn-light btn-xl"
            href="assets/Uras Oran - Resume.pdf"
            target="_blank"
          >
            View PDF
          </a>
        </div>
      </section>
      {/* <!-- Contact--> */}
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
              <i className="fab fa-github fa-3x mb-3 text-muted"></i>
              <a
                className="d-block"
                href="https://github.com/urasurasuras/portfolio"
              >
                Source of this page
              </a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fab fa-linkedin-in fa-3x mb-3 text-muted"></i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a
                className="d-block"
                href="https://www.linkedin.com/in/uras-oran-42321418b/"
              >
                Contact via LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2020 - Uras Oran
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
