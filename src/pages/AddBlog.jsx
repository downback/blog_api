import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import NavBar from '../components/NavBar'

const AddBlog = () => {
  const navigate = useNavigate()

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

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAddBlog = async (e) => {
    e.preventDefault()
    if (title === '' || body === '') {
      alert('Please fill out all input completely')
    }
    try {
      const response = await axios.post('https://dummyjson.com/posts/add', { title, body })
      alert(`Save ${response.data.title}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit" onSubmit={handleAddBlog}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="body">Blog Text:</label>
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
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

export default AddBlog
