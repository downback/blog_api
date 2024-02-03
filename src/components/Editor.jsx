import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'

function Editor() {
  const [values, setValues] = useState({
    title: '',
    body: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://dummyjson.com/posts/add', values)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" onChange={(e) => setValues({ ...values, title: e.target.value })} />
        </div>
        <div>
          <label htmlFor="body">Blog Text:</label>
          <input type="text" onChange={(e) => setValues({ ...values, body: e.target.value })} />
        </div>
        <button type="submit">Submit</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  )
}

export default Editor
