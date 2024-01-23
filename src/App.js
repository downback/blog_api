import React from "react";
import "./index.css"; 
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/post/:id" element={<Blog />}/>
    </Routes>
  );
}

export default App;
