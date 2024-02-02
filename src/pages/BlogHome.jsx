import axios from 'axios'
import { useEffect, useState, React } from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import useFetch from '../api/useFetch'
import { useBlogsContext } from '../api/blogsContext'

function BlogHome() {
  // const [posts, setPosts] = useState([])

  // const { data, loading } = useFetch('https://dummyjson.com/posts?limit=30')

  // const post = data?.posts

  // console.log(post)

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('https://dummyjson.com/posts?limit=30')
  //     setPosts(res.data.posts)
  //   }

  //   fetchPosts()
  // }, [])

  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } = useBlogsContext()
  const [errorMsg, setErrorMsg] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogs.length / postsPerPage)

  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  // Search

  const handleSearchTerm = (e) => {
    e.preventDefault()
    if (e.target.value.replace(/[^\w\s]/gi, '').length !== 0) {
      setSearchTerm(e.target.value)
      setErrorMsg('')
    } else {
      setErrorMsg('Invalid search term, try again ...')
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault()
    console.log(searchTerm)
    fetchBlogsFromSearch(searchTerm)
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center my-5">
      <Header />
      <PostList posts={currentPosts} />
      <p>{errorMsg}</p>
      <Pagination totalPages={totalPages} paginate={paginate} />
      <SearchBar handleSearchTerm={handleSearchTerm} handleSearchResult={handleSearchResult} />
      <Link to="/add_post">
        <button
          className="fixed bottom-20 right-20 border border-current rounded-full p-3 bg-sky-400 hover:bg-sky-200"
          type="button"
        >
          ADD
        </button>
      </Link>
    </div>
  )
}

export default BlogHome
