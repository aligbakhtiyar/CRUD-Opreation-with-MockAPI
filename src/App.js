import React from "react";
import Create from "./components/Create";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Read from "./components/Read";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
