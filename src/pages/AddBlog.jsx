import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import NavBar from '../components/NavBar'

const AddBlog = () => {
  const navigate = useNavigate()

  const initialValues = { title: '', body: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  // todo : submit버튼을 누르기 전에는 input창에 무엇을 입력해도 error & btn disabled 없음
  //   ->  submit버튼을 누른 다음에는 input에 뭐든 입력하면 error & btn disabled 사라짐

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Input title invalidated.'
    } else if (values.title.length >= 30) {
      errors.title = 'Input cannot exceed 30 characters.'
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
    setFormErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const newPost = { ...formValues, [name]: value }
    const error = validate(newPost)
    setFormErrors(error)
    if (Object.keys(error).length > 0) return
    axios
      .post('https://dummyjson.com/posts/add', {
        userId: 1,
        ...formValues
      })
      .then((res) => {
        alert('A new blog is successfully posted')
        setFormValues(initialValues)
      })
      .catch((err) => console.log(err))
  }

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
            {Object.keys(formErrors).length === 0 ? (
              <button type="submit" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
                Add Blog
              </button>
            ) : (
              <button type="submit" disabled className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-400 text-slate-100 cursor-default">
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
