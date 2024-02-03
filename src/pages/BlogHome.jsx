import axios from 'axios'
import { useState, React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import useGetBlogList from '../api/useGetBlogList'

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

  const [errorMsg, setErrorMsg] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 4

  // Get current posts
  const query = new URLSearchParams(window.location.search)
  const queryParamValue = query.get('q')
  const [searchTerm, setSearchTerm] = useState(queryParamValue || '')

  const {
    data: blogs,
    error,
    loading
  } = useGetBlogList({
    searchTerm: queryParamValue
  })
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(blogs.length / postsPerPage)
  const navigate = useNavigate()

  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  // Search
  const removeSpecialChars = (str) => {
    return str.replace(/[^\w\s]/gi, '')
  }

  const handleSearchTerm = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
    // if (removeSpecialChars(e.target.value).length !== 0) {
    //   setErrorMsg('')
    // } else {
    //   setErrorMsg('Invalid search term, try again ...')
    // }
  }

  const handleSearchResult = (e) => {
    e.preventDefault()
    console.log(searchTerm)
    if (searchTerm.length === 0) {
      navigate('/')
    } else {
      navigate(`?q=${searchTerm}`)
    }

    // TODO: handle search result
    // 1. 특수문자 -> 입력이 되지만, 있으면 에러처리
    // 2. enter를 누르면 검색이 되는데, 이때 검색어가 없으면 에러처리
    // 3. 검색어 maxlength 20자 제한
  }

  return (
    <>
      <NavBar />
      <Header />
      <div className="w-screen h-full flex flex-col justify-center items-center my-5">
        <SearchBar value={searchTerm} handleSearchTerm={handleSearchTerm} handleSearchResult={handleSearchResult} />
        <PostList posts={currentPosts} />
        <p>{errorMsg}</p>
        <Pagination totalPages={totalPages} paginate={paginate} />
        <Link to="/add_post">
          <button className="fixed bottom-20 right-20 rounded p-3 bg-sky-400 hover:bg-sky-300" type="button">
            Add a Blog
          </button>
        </Link>
      </div>
    </>
  )
}

export default BlogHome
