import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
