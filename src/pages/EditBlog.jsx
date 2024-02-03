import { useParams } from 'react-router'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { useBlogsContext } from '../api/blogsContext'
import Editor from '../components/Editor'
import NavBar from '../components/NavBar'

const EditBlog = () => {
  const { fetchSingleBlog, singleBlog, tempBlogs, singleBlogLoading } = useBlogsContext()

  const [values, setValues] = useState({
    title: '',
    body: ''
  })

  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put('https://dummyjson.com/posts/', values)
      .then((res) => {
        setValues(res.data)
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
              value={singleBlog?.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="body">Blog Text:</label>
            <input
              type="text"
              value={singleBlog?.body}
              onChange={(e) => setValues({ ...values, body: e.target.value })}
              className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
            />
          </div>
          <div>
            <button type="submit" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
              Submit
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
