import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import { Layout } from "./components/Layout";

import Projects from "./modules/Projects";
import Lodge from "./modules/Lodge";
import Demo from "./modules/Demo";
import Counter from "./components/Counter";
import DebugCanvas from "./components/DebugCanvas"
import { Endpoints, version } from "./variables/Endpoints";

import "bootstrap";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Endpoints.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Endpoints.Projects} element={<Projects />} />
          <Route path={Endpoints.Lodge} element={<Lodge />} />
          <Route path={Endpoints.Demo} element={<Demo />} />
          <Route path={Endpoints.PersistentCounter} element={<Counter />} />
          <Route path="/debugcanvas" element={<DebugCanvas />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
