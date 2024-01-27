import React from 'react';

const SearchBar = () => {
  return (
    <div className="fixed bottom-6">
      <form action="">
        <input type="text" className="border border-current" />
        <button className="border border-current rounded-lg w-fit h-8 py-1 m-3 bg-sky-200">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
