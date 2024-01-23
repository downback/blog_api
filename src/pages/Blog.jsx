import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'

const Blog = () => {
  const {id} = useParams()

  return (   
    <div>
      <Header />
      <h1>This is Blog{id}</h1>
    </div>
  )
}

export default Blog