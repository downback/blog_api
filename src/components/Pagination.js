import React from 'react'

const Pagination = ( { postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //한번 만든 변수를 최대한 변경하지 않으려 할때, let으로 하는 것이 더 좋음. for문 대신 쓰는 방법은? spread 연상자(return 이 되는 method)

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