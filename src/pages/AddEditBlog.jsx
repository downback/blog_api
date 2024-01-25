import React from 'react'
import { useParams } from 'react-router'

const AddEditBlog = () => {
  const { id } = useParams()
  return <div>AddEditBlog{id}</div>
}

export default AddEditBlog
