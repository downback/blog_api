import React from 'react'

const Pagination = ({ totalPages, paginate }) => {
  // 빈 array 랑 for문으로 page number 생성하기 *이 경우에 App.js에서 {totalPosts, postsPerPage} 가져와야 함

  // let pageNumbers = [];
  // 한번 만든 변수를 최대한 변경하지 않으려 할때, let으로 (instead of const)

  // for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //    pageNumbers.push(i);
  // }

  // Array.from 으로 page number 생성하기
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="flex w-screen h-fit justify-center content-center my-5 bottom-12">
      <ul className="flex flex-row">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => paginate(number)}
              className="border border-current rounded-lg w-9 h-9 py-1 m-3 bg-sky-200 hover:bg-sky-400"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
