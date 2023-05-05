import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../Pages/login";

export default function rotas() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" exact />
    </Routes>
  );
}
