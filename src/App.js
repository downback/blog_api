import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AddEditBlog from './pages/AddEditBlog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Blog />} />
      <Route path="/add_edit_post/:id" element={<AddEditBlog />} />
    </Routes>
  )
}

export default App
