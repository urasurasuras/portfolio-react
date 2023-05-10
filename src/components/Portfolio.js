import PortfolioBox from "./PortfolioBox";
import {Endpoints, Links} from "../variables/Endpoints";
import { Link } from "react-router-dom";

import "./Portfolio.css"

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
        <PortfolioBox
            link={Links.it490}
            newTab
            image="assets/img/portfolio/fullsize/490.png"
            category="Web Application"
            name="System Integration"
          />
          <PortfolioBox
          link={Links.Hydrametry}
          newTab
          image="assets/img/portfolio/fullsize/HydraLogo.png"
          category="Game Development"
          name="Hydrametry Software"
        />
        <PortfolioBox
            link={Links.Source}
            newTab
            image="assets/img/portfolio/fullsize/github-logo.png"
            category="Web Page"
            name="Source to this web page"
          />
          
          <PortfolioBox
            link={Endpoints.Lodge}
            image="assets/img/portfolio/fullsize/lodge.png"
            category="Maya & Unreal Engine 4"
            name="Lodge"
          />
          <PortfolioBox
            link={Links.gf3d}
            newTab
            image="assets/img/portfolio/fullsize/gf3d.png"
            category="Vulkan"
            name="gf3d"
          />
          <PortfolioBox
            link={Links.GrooveCrusaders}
            newTab
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
