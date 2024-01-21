import React, { useEffect, useState }  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [ blog , setBlog ] = useState();
  console.log(blog);

  useEffect(() => {
    fakeBlog();
  }, []);

  const fakeBlog = async() => {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setBlog(jsonData);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
