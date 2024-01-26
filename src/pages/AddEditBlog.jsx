import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'

const AddEditBlog = () => {
  const { id } = useParams()
  return (
    <div>
      <Header />
      <h1>AddEditBlog{id}</h1>
    </div>
  )
}

export default AddEditBlog
