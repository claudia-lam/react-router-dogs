import "./App.css";
import React from "react";
import Nav from "./Nav";
import Routes from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";

const DEFAULT_DOGS = ["Duke", "Perry", "Whiskey"];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={DEFAULT_DOGS} />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
