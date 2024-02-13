import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'
import NavBar from '../components/NavBar'

const AddBlog = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const initialValues = { title: '', body: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    const newPost = { ...formValues, [name]: value }
    setFormValues(newPost)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const newPost = { ...formValues, [name]: value }
    const error = validate(newPost)

    axios
      .post('https://dummyjson.com/posts/add', {
        userId: 1,
        ...formValues
      })
      .then((res) => {
        setFormValues(res.data)
        setFormErrors(error)
        setIsSubmit(true)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
      alert('A new blog is successfully posted')
      setFormValues(initialValues)
    }
  }, [formErrors])

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit" onSubmit={handleSubmit}>
          <div>
            <div>Title:</div>
            <input name="title" type="text" value={formValues.title} onChange={handleChange} className="rounded w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{formErrors.title}</div>
          </div>
          <div>
            <div>Blog Text:</div>
            <textarea name="body" value={formValues.body} onChange={handleChange} className="rounded w-96 h-96 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{formErrors.body}</div>
          </div>
          <div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <button type="submit" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
                Add Blog
              </button>
            ) : (
              <button type="submit" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-400 text-slate-100 cursor-default">
                Add Blog
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                navigate('/')
              }}
              className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBlog
