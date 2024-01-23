import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
//import useFetch from '../hooks/useFetch'

const Blog = () => {
  const {id} = useParams();

  //const {posts} = useFetch("https://dummyjson.com/posts?limit=30");

  return (   
    <div>
      <Header />
      <h1>This is Blog{id}</h1>
      {/*<h1>{posts.title}</h1>*/}
    </div>
  )
}

export default Blog