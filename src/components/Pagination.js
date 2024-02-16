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
    <div className="flex w-screen h-fit justify-center content-center pt-11 pb-24 bg-slate-100">
      <ul className="flex flex-row">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" onClick={() => paginate(number)} className="p-1 mx-3 w-8 h-8 rounded bg-slate-900 text-slate-100 hover:bg-slate-400 ">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
