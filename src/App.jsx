import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Index";

import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            {/* tournaments related routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
