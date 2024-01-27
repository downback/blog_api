import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Editor from '../components/Editor'

const EditBlog = () => {
  const { id } = useParams()
  return (
    <div>
      <Header />
      <h1>EditBlog{id}</h1>
      <Editor></Editor>
    </div>
  )
}

export default EditBlog
