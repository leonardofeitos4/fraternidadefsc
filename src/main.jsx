import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import Topo from "./components/Topo/Index.jsx";
import Rodape from "./components/Rodape/Index.jsx";

import Home from "./pages/Home/Index.jsx";
import QuemSomos from "./pages/Institucional/Quemsomos/Index.jsx";
import Fundadora from "./pages/Institucional/Fundadora/Index.jsx";
import Baluarte from "./pages/Institucional/Baluarte/Index.jsx";
import NossosProjetos from "./pages/NossosProjetos/index.jsx";
import NossaMissao from "./pages/NossaMissao/index.jsx";
import Doador from "./pages/Doador/index.jsx";
import Galeria from "./pages/Galeria/index.jsx";

import AdminLogin from "./pages/Admin/Login/index.jsx";
import AdminDashboard from "./pages/Admin/Dashboard/index.jsx";

function AppLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Topo />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Institucional" element={<Navigate to="/Institucional/QuemSomos" replace />} />
        <Route path="/Institucional/QuemSomos" element={<QuemSomos />} />
        <Route path="/Institucional/Fundadora"  element={<Fundadora />} />
        <Route path="/Institucional/Baluarte"   element={<Baluarte />} />
        <Route path="/NossosProjetos"           element={<NossosProjetos />} />
        <Route path="/NossaMissao"              element={<NossaMissao />} />
        <Route path="/Doador"                   element={<Doador />} />
        <Route path="/Galeria"                  element={<Galeria />} />

        <Route path="/admin/login"     element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin"           element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
      {!isAdmin && <Rodape />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
