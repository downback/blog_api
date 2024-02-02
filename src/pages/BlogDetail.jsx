import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useBlogsContext } from '../api/blogsContext'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { fetchSingleBlog, singleBlog, tempBlogs, singleBlogLoading } = useBlogsContext()

  useEffect(() => {
    fetchSingleBlog(id)
  }, [singleBlog.id, id])

  if (singleBlogLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Header />
      <div className="flex w-screen h-fit justify-center content-center">
        <div className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center ">
          <h1 className="font-semibold text-lg mb-3">{singleBlog?.title}</h1>
          <p>{singleBlog?.body}</p>
        </div>
      </div>
      {/* <div>
        <ul className="flex flex-row">
          {singleBlog?.tags.map((tag) => (
            <li key={tag} className="m-3">
              {tag}
            </li>
          ))}
        </ul>
      </div> */}
      <ul className="flex flex-row w-screen h-10 justify-center content-center">
        <Link to="/">
          <li className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400">
            HOME
          </li>
        </Link>
        <li
          role="none"
          onClick={() => {
            navigate(`/edit_post/${id}`)
          }}
          className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400"
        >
          EDIT
        </li>
        <li
          role="none"
          // onClick={(e) => {handleDelete()}}
          className="mx-10 border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200 hover:bg-sky-400"
        >
          DELETE
        </li>
      </ul>
    </div>
  )
}

export default BlogDetail
