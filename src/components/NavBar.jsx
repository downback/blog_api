import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined'

const NavBar = () => {
  return (
    <div className="w-full h-20 m-0 p-0 flex flex-row justify-between items-center bg-slate-900">
      <Link to="/" className="flex-initial mx-5 text-xl">
        <span className="text-sky-400">Our</span>
        <span className=" text-slate-400">BLOG</span>
      </Link>
      <div className="flex flex-row flex-initial text-slate-400 ">
        <div className="mx-3 hover:text-slate-200 hover:border-b-2 border-sky-400">Blogs</div>
        <div className="mx-3 hover:text-slate-200 hover:border-b-2 border-sky-400">Services</div>
        <div className="mx-3 hover:text-slate-200 hover:border-b-2 border-sky-400">About Us</div>
        <div className="mx-3 hover:text-slate-200 hover:border-b-2 border-sky-400">Careers</div>
        <div className="mx-3 hover:text-slate-200 hover:border-b-2 border-sky-400">Context</div>
      </div>
      <div className="flex flex-row flex-initial mx-3">
        <div className="text-slate-400 mx-2">
          <LocalPostOfficeOutlinedIcon />
        </div>
        <div className="text-slate-400 mx-2">
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="w-20 h-8 mx-2 p-1 bg-sky-400 rounded text-center text-slate-200">Contact</div>
      </div>
    </div>
  )
}

export default NavBar
