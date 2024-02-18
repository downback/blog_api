import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'
import useEditBlog from '../api/useEditBlog'

const EditBlog = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState({})
  const [singlePost, setSinglePost] = useState()

  const { singlePost: blogInitialValue, loading } = useGetSingleBlog({ id })
  const { editPost } = useEditBlog({
    onSuccess: (res) => {
      setSinglePost(res.data)
      alert('A new blog is successfully posted')
    },
    onError: (err) => console.log(err),
    id
  })

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Input title invalidated.'
    } else if (values.title.length >= 50) {
      errors.title = 'Input cannot exceed 50 characters.'
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
    setErrorMsg({})
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const newPost = { ...singlePost, [name]: value }
    const error = validate(newPost)
    setErrorMsg(error)
    if (Object.keys(error).length > 0) return
    editPost({})
  }

  useEffect(() => {
    setSinglePost(blogInitialValue)
  }, [blogInitialValue])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit" onSubmit={handleUpdate}>
          <div>
            <div>Title:</div>
            <input name="title" type="text" value={singlePost?.title} onChange={handleInputChange} className="rounded w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{errorMsg.title}</div>
          </div>
          <div>
            <div>Blog Text:</div>
            <textarea name="body" value={singlePost?.body} onChange={handleInputChange} className="rounded w-96 h-96 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{errorMsg.body}</div>
          </div>
          <div>
            {Object.keys(errorMsg).length === 0 ? (
              <button type="submit" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
                Update
              </button>
            ) : (
              <button type="submit" disabled className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-400 text-slate-100 cursor-default">
                Update
              </button>
            )}
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
