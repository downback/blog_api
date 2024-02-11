import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'
import NavBar from '../components/NavBar'

const AddBlog = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  // const [values, setValues] = useState({
  //   title: '',
  //   body: ''
  // })

  // const handleAddBlog = (event) => {
  //   event.preventDefault()
  //   axios
  //     .post(
  //       'https://dummyjson.com/posts/add',
  //       {
  //         title: 'I am in love with someone.'
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data)
  //       navigate('/')
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error)
  //     })
  // }

  const initialValues = { title: '', body: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  // const handleAddBlog = async (e) => {
  //   e.preventDefault()
  //   if (title === '' || body === '') {
  //     alert('Please fill out all input completely')
  //   }
  //   try {
  //     const response = await axios.post('https://dummyjson.com/posts/add', { title, body })
  //     alert(`Save ${response.data.title}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleAddBlog = (event) => {
  //   event.preventDefault()
  //   axios
  //     .put(`https://dummyjson.com/posts/${id}`)
  //     .then((res) => {
  //       setTitle(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Username is required!'
    } else if (values.title.length < 4) {
      errors.title = 'title must be more than 4 characters'
    }
    if (!values.body) {
      errors.body = 'Email is required!'
    } else if (values.body.length > 10) {
      errors.body = 'body cannot exceed more than 10 characters'
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    axios
      .put(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        setFormValues(res.data)
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
            <input type="text" value={formValues.title} onChange={(formValues) => handleChange({ target: { value: formValues, name: 'title' } })} className="rounded w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none" />
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? <div>Signed in successfully</div> : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>} */}
          </div>
          <div>
            <div>Blog Text:</div>
            <textarea value={formValues.body} onChange={(e) => handleChange(e.target.value)} className="rounded w-96 h-96 shadow-md shadow-gray-200 p-3 focus:border-none" />
          </div>
          <div>
            <button type="button" className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100">
              Add Blog
            </button>
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
