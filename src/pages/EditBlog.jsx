import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'

const EditBlog = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { singlePost: blogInitialValue, loading } = useGetSingleBlog({ id })
  const [singlePost, setSinglePost] = useState()

  useEffect(() => {
    setSinglePost(blogInitialValue)
  }, [blogInitialValue])

  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put(`https://dummyjson.com/posts/${id}`, singlePost)
      .then((res) => {
        setSinglePost(res.data)
        navigate(`/post/${id}`)
      })
      .catch((err) => console.log(err))
  }

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Input title invalidated.'
    } else if (values.title.length >= 40) {
      errors.title = 'Input cannot exceed 40 characters.'
    }
    if (!values.body) {
      errors.body = 'Input body invalidated.'
    }
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newPost = { ...singlePost, [name]: value }
    setSinglePost(newPost)
    const error = validate(newPost)
    setError(error)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit">
          <div>
            <div>Title:</div>
            <input name="title" type="text" value={singlePost?.title} onChange={handleInputChange} className="rounded w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{error.title}</div>
          </div>
          <div>
            <div>Blog Text:</div>
            <textarea name="body" value={singlePost?.body} onChange={handleInputChange} className="rounded w-96 h-96 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{error.body}</div>
          </div>
          <div>
            <button
              type="button"
              onClick={(e) => {
                handleUpdate(e)
              }}
              className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => {
                navigate(`/post/${id}`)
              }}
              className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100"
            >
              Back to post
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditBlog
