import React, { useEffect, useState } from "react";

// Import the necessary methods for saving and loading
import { save, load } from "redux-sessionstorage-simple";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import { Layout } from "./components/Layout";

import Projects from "./modules/Projects";
import Lodge from "./modules/Lodge";
import Demo from "./modules/Demo";
import Counter from "./components/Counter";
import { Endpoints } from "./variables/Endpoints";

function App(props) {
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path={Endpoints.Home} element={<Layout newBadge={"newBadge"} />}>
          <Route index element={<Home />} />
          <Route path={Endpoints.Projects} element={<Projects />} />
          <Route path={Endpoints.Lodge} element={<Lodge />} />
          <Route
            // onClick={demoClickHandler}
            path={Endpoints.Demo}
            element={<Demo />}
          />
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
