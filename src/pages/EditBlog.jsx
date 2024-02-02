import { useParams } from 'react-router'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import { useBlogsContext } from '../api/blogsContext'
import Header from '../components/Header'
import Editor from '../components/Editor'

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
    <div>
      <Header />
      <form action="submit" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={singleBlog?.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body">Blog Text:</label>
          <input
            type="text"
            value={singleBlog?.body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  )
}

export default EditBlog
