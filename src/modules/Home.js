import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
// import logo from "./logo.svg";
// import "./App.css";
import NavbarComponent from "../components/NavbarComponent";
import PortfolioItem from "../components/PortfolioItem";
import Masthead from "../components/Masthead";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div id="page-top">
      <Masthead />
      {/* <About /> */}
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default Home;
