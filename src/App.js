import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router'
import BlogHome from './pages/BlogHome'
import BlogDetail from './pages/BlogDetail'
import EditBlog from './pages/EditBlog'
import AddBlog from './pages/AddBlog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} />
      <Route path="/post/:id" element={<BlogDetail />} />
      <Route path="/edit_post/:id" element={<EditBlog />} />
      <Route path="/add_post" element={<AddBlog />} />
    </Routes>
  )
}

export default App
