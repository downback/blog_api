import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
//import useFetch from '../hooks/useFetch'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  //const { data, loading } = useFetch('https://dummyjson.com/posts?limit=30')

  return (
    <div>
      <Header />
      {/*<h1>{data.posts.title}</h1>*/}
      <div className="flex w-screen h-fit justify-center content-center">
        <div className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center ">
          <h1 className="font-semibold text-lg mb-3">This is Blog Title{id}</h1>
          <p>Here is the body of Blog{id}</p>
        </div>
      </div>
      <ul className="flex flex-row w-screen h-10 justify-center content-center">
        <Link to="/">
          <li className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400">
            HOME
          </li>
        </Link>
        <li
          onClick={() => {
            navigate('/edit_post/' + id)
          }}
          className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400"
        >
          EDIT
        </li>
        <li className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400">
          DELETE
        </li>
      </ul>
    </div>
  )
}

export default BlogDetail
