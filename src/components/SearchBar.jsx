import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const SearchBar = ({ handleSearchTerm, handleSearchResult }) => {
  return (
    <div className="w-screen h-fit m-0 p-0 bg-slate-100 flex flex-row items-center justify-center">
      <form onSubmit={(e) => handleSearchResult(e)} className="flex flex-row w-full h-full items-center justify-center">
        <input
          type="text"
          className="rounded-full w-96 h-10 shadow-md shadow-gray-200 p-3 focus:border-none"
          placeholder="Search here blog ..."
          onChange={(e) => handleSearchTerm(e)}
        />
        <button type="submit" className="mx-3">
          <SearchOutlinedIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
