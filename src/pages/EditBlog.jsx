import { useParams } from 'react-router'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'

const EditBlog = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { singlePost, setSinglePost, error, setError, loading } = useGetSingleBlog({ id })

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleTitleInput = (e) => {
    setSinglePost({ ...singlePost, title: e.target.value })
    if (e.target.value.length <= 30 && e.target.value.length !== 0) {
      setError('')
    } else {
      setError('Input is empty or too long')
    }
  }

  const handleBodyInput = (e) => {
    setSinglePost({ ...singlePost, body: e.target.value })
    if (e.target.value.length !== 0) {
      setError('')
    } else {
      setError('Input invalid')
    }
  }

  // network에서 에러가 없긴한데 Request Method가 put이 아니라 get으로 떠서 이게 request가 잘 간건지 잘 모르겠어요...
  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put(`https://dummyjson.com/posts/${id}`, singlePost)
      .then((res) => {
        setSinglePost(res.data)
      })
      .catch((err) => console.log(err))
  }

  // const validate = (values) => {
  //   const errors = {}
  //   if (!values.title) {
  //     errors.title = 'Input title invalidated.'
  //   } else if (values.title.length <= 40) {
  //     errors.title = 'Input cannot exceed 40 characters.'
  //   }
  //   if (!values.body) {
  //     errors.body = 'Input body invalidated.'
  //   }
  //   return errors
  // }

  // const initialValues = { title: '', body: '' }
  // const [localValues, setLocalValues] = useState(initialValues)

  // React.useEffect(() => {
  //   setLocalValues(singlePost)
  // }, [singlePost])

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setLocalValues({ ...localValues, [name]: value })
  // }

  return (
    <>
      <NavBar />
      <div className="w-screen h-screen m-0 p-0 bg-slate-100 flex flex-row justify-center py-10">
        <form action="submit" onSubmit={handleUpdate}>
          <div>
            <div>Title:</div>
            <input type="text" value={singlePost?.title} onChange={handleTitleInput} className="rounded w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{error}</div>
          </div>
          <div>
            <div>Blog Text:</div>
            <textarea value={singlePost?.body} onChange={handleBodyInput} className="rounded w-96 h-96 shadow-md shadow-gray-200 p-3 focus:border-none" />
            <div className="text-rose-500">{error}</div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                navigate(`/post/${id}`)
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
