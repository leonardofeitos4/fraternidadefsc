
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Topo from "./components/Topo/Index.jsx";
import Home from "./pages/Home/Index.jsx";

import Institucional from "./pages/Institucional/Index.jsx";
import NossosProjetos from "./pages/NossosProjetos/Index.jsx";
import NossaMissao from "./pages/NossaMissao/Index.jsx";
import Doador from "./pages/Doador/Index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Institucional" element={<Institucional />} />
        <Route path="/NossosProjetos" element={<NossosProjetos />} />
        <Route path="/NossaMissao" element={<NossaMissao />} />
        <Route path="/Doador" element={<Doador />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
