import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'

const Header = () => {
  return (
    <Link to="/">
      <div className="w-full h-72 m-0 p-0 flex flex-col justify-center items-center bg-slate-900">
        <div className=" text-sky-700 text-4xl font-bold text-slate-100 mb-5">Welcome to Our Blog</div>
        <div className="text-center text-slate-400 text-sm mb-8">
          Immerse yourself in captivating narratives and stunning visuals on our dynamic blog platform, <br /> where
          stories come to life with seamless design.
        </div>
        <div className="text-center text-slate-400">
          Learn More <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </Link>
  )
}

export default Header
