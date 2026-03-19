import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ListaTarefas from "../pages/ListaTarefas";
import Financeiro from "../pages/Financeiro";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<ListaTarefas />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;