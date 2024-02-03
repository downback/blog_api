import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogsContext } from '../context/blogsContext'

const PostList = ({ posts }) => {
  const navigate = useNavigate()
  const { blogsLoading, searchBlogsLoading } = useBlogsContext()
  if (blogsLoading || searchBlogsLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="w-screen h-fit m-0 p-0 bg-slate-100">
      <ul className="w-full h-full flex flex-row flex-wrap items-center justify-center">
        {posts.map((post) => (
          <li
            role="none"
            key={post.id}
            // onClick={() => {
            //   navigate(`/post/${post.id}`)
            // }}
            className="bg-white rounded shadow-md shadow-gray-400 px-5 py-5 m-5 w-4/12 h-max text-center"
          >
            <h1 className="font-semibold text-lg mb-3">{post.title}</h1>
            <p>{post.body.substring(0, 150)}...</p>
            <div>
              <ul className="w-full h-ful flex flex-row items-center justify-center mt-3">
                {post.tags.map((tag) => (
                  <li key={tag} className="m-3 px-2 rounded text-center w-auto h-6 bg-slate-200">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Link
                to={`/post/${post.id}`}
                className="m-3 px-2 rounded text-center w-28 h-8 bg-slate-900 text-slate-100 cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
