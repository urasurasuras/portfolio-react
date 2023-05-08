import { useLocation } from "react-router-dom";

function PortfolioItem(props) {
  let target = "";
  if (props.newTab) {
    target = "_blank";
  }

  // console.log(props.link);

  return (
    <div className="col-lg-4 col-sm-6">
      <a className="portfolio-box" href={props.link} target={target}>
        <img className="img-fluid" src={props.image} alt="" />
        <div className="portfolio-box-caption">
          <div className="project-category text-white-50">{props.category}</div>
          <div className="project-name">{props.name}</div>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;
