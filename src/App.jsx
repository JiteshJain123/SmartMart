import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  const { search, pathname } = useLocation();

  // Normalize GitHub Pages base path
  const isHome =
    pathname === "/" ||
    pathname === "/SmartMart/" || // GitHub Pages base path
    pathname === import.meta.env.BASE_URL;

  return (
    <div className="h-screen w-screen flex">
      {/* Show Home button if not on homepage or if query params exist */}
      {(!isHome || search.length > 0) && (
        <Link to="/" className="absolute text-red-300 left-[17%] top-[3%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
