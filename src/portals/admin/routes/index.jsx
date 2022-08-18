import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPrivateOutlet from "../components/AdminPrivateOutlet";
import Dashboard from "../pages/dashboard";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPrivateOutlet />}>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
