import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import { Layout } from "./components/Layout";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./modules/Projects";
import Lodge from "./modules/Lodge";
import Demo from "./modules/Demo";
import { Endpoints } from "./variables/Endpoints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Endpoints.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Endpoints.Projects} element={<Projects />} />
          <Route path={Endpoints.Lodge} element={<Lodge />} />
          <Route path={Endpoints.Demo} element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
