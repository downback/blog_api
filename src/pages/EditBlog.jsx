import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'

const EditBlog = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const { singlePost: blogInitialValue, loading } = useGetSingleBlog({ id })
  const [singlePost, setSinglePost] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
  const [inputChanged, setInputChanged] = useState(false)

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
    setInputChanged(true)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const newPost = { ...singlePost, [name]: value }
    const error = validate(newPost)

    axios
      .put(`https://dummyjson.com/posts/${id}`, singlePost)
      .then((res) => {
        setSinglePost(res.data)
        setErrorMsg(error)
        setIsSubmit(true)
        setInputChanged(false)
      })
      .catch((err) => console.log(err))
  }

  // invalidated 된 다음에 submit하면 다시 원래 블로그글로 안돌아가게 해야 할 것 같은데, 못함...

  useEffect(() => {
    setSinglePost(blogInitialValue)
    if (Object.keys(errorMsg).length === 0 && isSubmit) {
      alert('A new blog is successfully posted')
      setIsSubmit(false)
    }
    if (inputChanged) {
      setIsSubmit(false)
      setErrorMsg('')
    }
  }, [blogInitialValue, errorMsg, inputChanged])

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
