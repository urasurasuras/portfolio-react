function About() {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">
              NJIT - Information Technology - Game Development Specialization
            </h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4">
              I have been programming for various projects over the second half
              of my college education. These projects range from front end all
              the way to back end, game and game engine development! If you want
              to look at all the projects I have worked on, here is a link to my
              GitHub profile!
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
  );
}

export default About;
