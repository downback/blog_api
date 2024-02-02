import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useBlogsContext } from '../api/blogsContext'

const PostList = ({ posts }) => {
  const navigate = useNavigate()
  const { blogsLoading, searchBlogsLoading } = useBlogsContext()
  if (blogsLoading || searchBlogsLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="flex w-screen h-fit justify-center content-center">
      <ul className="flex flex-col w-full h-full items-center justify-center">
        {posts.map((post) => (
          <li
            role="none"
            key={post.id}
            onClick={() => {
              navigate(`/post/${post.id}`)
            }}
            className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center hover:bg-slate-100 cursor-pointer"
          >
            <h1 className="font-semibold text-lg mb-3">{post.title}</h1>
            <p>{post.body.substring(0, 150)}...</p>
            <div>
              <ul className="flex flex-row">
                {post.tags.map((tag) => (
                  <li key={tag} className="m-3">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Link to={`/post/${post.id}`}>Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
