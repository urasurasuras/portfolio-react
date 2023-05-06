import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
// import logo from "./logo.svg";
// import "./App.css";
import Masthead from "../components/Masthead";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

import { CookiesProvider, useCookies } from "react-cookie";

function Home() {
  const [cookies, setCookie] = useCookies(["user"]);
  setCookie("Name", "name", { path: "/" });
  setCookie("Password", "pwd", { path: "/" });
  console.log(cookies.Name);

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
