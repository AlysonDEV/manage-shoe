import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Ordem } from "../pages/Dashboard/Ordem";
import { Ferramentas } from "../pages/Dashboard/Ferramentas";

export function NewRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/painel" element={<Dashboard />} />
      <Route path="/painel/ordem" element={<Ordem />} />
      <Route path="/painel/ferramentas" element={<Ferramentas />} />
    </Routes>
  )
}