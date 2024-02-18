import { React, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import useGetSingleBlog from '../api/useGetSingleBlog'
import useDeleteBlog from '../api/useDeleteBlog'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [singleBlog, setSingleBlog] = useState(undefined)

  const { singlePost, loading } = useGetSingleBlog({ id })
  const { deletePost } = useDeleteBlog({
    onSuccess: (res) => {
      setSingleBlog(res.data)
      navigate('/')
    },
    onError: (err) => console.log(err),
    id
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleDeleteBlog = () => {
    deletePost()
  }

  return (
    <div className="w-screen h-dvh m-0 p-0 bg-slate-100">
      <NavBar />
      <div className="flex w-screen h-fit justify-center content-center">
        <div className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center ">
          <h1 className="font-semibold text-lg mb-3">{singlePost?.title}</h1>
          <p>{singlePost?.body}</p>

          <ul className="w-full h-ful flex flex-row items-center justify-center mt-3">
            {singlePost?.tags?.map((tag) => (
              <li key={tag} className="m-3 px-2 rounded text-center w-auto h-6 bg-slate-200">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex flex-row w-screen h-10 justify-center content-center">
        <Link to="/">
          <li className="mx-10 w-fit h-8 p-1 m-3 rounded bg-slate-900 text-slate-100 hover:bg-slate-400">HOME</li>
        </Link>
        <li
          role="none"
          onClick={() => {
            navigate(`/edit_post/${id}`)
          }}
          className="mx-10 w-fit h-8 p-1 m-3 rounded bg-slate-900 text-slate-100 hover:bg-slate-400"
        >
          EDIT
        </li>
        <li role="none" onClick={handleDeleteBlog} className="mx-10 w-fit h-8 p-1 m-3 rounded bg-slate-900 text-slate-100 hover:bg-slate-400">
          DELETE
        </li>
      </ul>
    </div>
  )
}

export default BlogDetail
