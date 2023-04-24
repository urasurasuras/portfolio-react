import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./pages/Projects";
import Lodge from "./pages/Lodge";
import { Endpoints } from "./variables/Endpoints";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Endpoints.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Endpoints.Projects} element={<Projects />} />
          <Route path={Endpoints.Lodge} element={<Lodge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
