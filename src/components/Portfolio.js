import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
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
  );
}

export default Portfolio;
