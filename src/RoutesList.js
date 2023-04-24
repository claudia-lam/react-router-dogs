import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Duke from "./Duke";
import Perry from "./Perry";
import Whiskey from "./Whiskey";
import Dogs from "./Dogs";

function RoutesList() {
  return (
    <Routes>
      <Route path="/duke" element={<Duke />} />
      <Route path="/perry" element={<Perry />} />
      <Route path="/perry" element={<Whiskey />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
