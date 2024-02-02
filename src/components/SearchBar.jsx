import React from 'react'

const SearchBar = ({ handleSearchTerm, handleSearchResult }) => {
  return (
    <div className="fixed bottom-6">
      <form onSubmit={(e) => handleSearchResult(e)}>
        <input
          type="text"
          className="border border-current"
          placeholder="Search here blog ..."
          onChange={(e) => handleSearchTerm(e)}
        />
        <button type="submit" className="border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
