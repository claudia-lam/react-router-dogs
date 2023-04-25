import React from "react";
import DogDetails from "./DogDetails";
import Dogs from "./Dogs";
import { Route, Routes, Navigate, Link } from "react-router-dom";

/**
 * List of routes to access from website
 *
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
