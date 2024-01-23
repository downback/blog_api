import React from 'react'

const Pagination = ( { postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className='flex w-screen h-fit justify-center content-center my-5 fixed bottom-12'>
        <ul className="flex flex-row">
            {pageNumbers.map((number)=>(
                <li key={number}>
                    <a onClick={() => paginate(number)} href="!#" className="border border-current rounded-lg p-2 m-3 w-3 h-3 bg-sky-200 hover:bg-sky-400">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination