import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://dummyjson.com/posts?limit=30')
      setPosts(res.data.posts)
    }

    //const fetchPosts = async () => {
    //  const response = await fetch('https://dummyjson.com/posts');
    //  const data = await response.json();
    //  setPosts(data.posts);
    //};

    fetchPosts()
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  //delete & edit function

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center my-5">
      <Header />
      <Posts posts={currentPosts} />
      <Pagination totalPages={totalPages} paginate={paginate} />
      <SearchBar />
      <Link to="/add_post">
        <button className="fixed bottom-20 right-20 border border-current rounded-full p-3 bg-sky-400 hover:bg-sky-200">
          ADD
        </button>
      </Link>
    </div>
  )
}

export default Home
