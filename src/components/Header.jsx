import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/">
    <div class="flex h-full items-center justify-center my-6 p-0">
      <div className="text-sky-700 text-3xl font-bold text-center">THIS IS BLOG</div>
    </div>
    </Link>
  )
}

export default Header