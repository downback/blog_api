import React from 'react'

const Posts = ({ posts}) => {

  return (
    <div className='flex w-screen h-fit justify-center content-center'>
    <ul className='flex flex-col w-full h-full items-center justify-center'>
        {posts.map(post => (
            <li key={post.id} className="border rounded-sm border-current px-5 py-5 m-5 w-6/12 h-max text-center hover:bg-slate-100">
                <h1 className='font-semibold text-lg mb-3'>{post.title}</h1>
                <p>{post.body}</p>
            </li>
        ))}
    </ul>
    </div>
  );
};

export default Posts