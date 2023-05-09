import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
// import logo from "./logo.svg";
// import "./App.css";
import Masthead from "../components/Masthead";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contacts from "../components/Contacts";

import { CookiesProvider, useCookies } from "react-cookie";

function Home() {
  return (
    <div id="page-top">
      <Masthead />
      {/* <About /> */}
      <Portfolio />
      <Resume />
      <Contacts />
    </div>
  );
}

export default Home;
