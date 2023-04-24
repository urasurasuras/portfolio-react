import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";
import Projects from "./pages/Projects";
import Lodge from "./pages/Lodge";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lodge" element={<Lodge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
