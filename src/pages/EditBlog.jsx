import { useParams } from 'react-router'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'

const EditBlog = () => {
  // TODO: custom hook 만들기
  // const { data: singleBlogData, loading: singleBlogLoading } = useGetBlog({id});

  const { id } = useParams()
  const navigate = useNavigate()

  const { singlePost, loading, setSinglePost } = useGetSingleBlog({ id })

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put(`https://dummyjson.com/posts/${id}`, singlePost)
      .then((res) => {
        setSinglePost(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={singlePost?.title}
              onChange={(e) => setSinglePost({ ...singlePost, title: e.target.value })}
              className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="body">Blog Text:</label>
            <input
              type="text"
              value={singlePost?.body}
              onChange={(e) => setSinglePost({ ...singlePost, body: e.target.value })}
              className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => { navigate('/') }}
              className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100"
            >
              Update
            </button>
            <Link to="/" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditBlog
