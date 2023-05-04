import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
// import logo from "./logo.svg";
// import "./App.css";
import Masthead from "../components/Masthead";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

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
