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
      {/*<h1>{posts.title}</h1>*/}
      <div className='flex w-screen h-fit justify-center content-center'>
        <div className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center hover:bg-slate-100">
          <h1 className='font-semibold text-lg mb-3'>This is Blog Title{id}</h1>
          <p>Here is the body of Blog{id}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog