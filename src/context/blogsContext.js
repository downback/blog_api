import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import reducer from '../reducers/blogsReducer'
import {
  GET_BLOGS_BEGIN,
  GET_BLOGS_ERROR,
  GET_BLOGS_SUCCESS,
  GET_SINGLE_BLOG_BEGIN,
  GET_SINGLE_BLOG_ERROR,
  GET_SINGLE_BLOG_SUCCESS,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  SET_SEARCH_TERM
} from '../utils/constants'
import { BLOG_URL, SEARCH_URL } from '../utils/url_constants'
import axios from '../api/axios'

const initialState = {
  blogsLoading: false,
  blogsError: false,
  blogs: [],
  tempBlogs: [],
  singleBlogLoading: false,
  singleBlogError: false,
  singleBlog: [],
  searchTerm: '',
  searchBlogsLoading: false,
  searchBlogsError: false
}

const BlogsContext = createContext({})
export const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchBlogs = async () => {
    dispatch({ type: GET_BLOGS_BEGIN })
    try {
      const response = await axios.get(`${BLOG_URL}?limit=40`)
      dispatch({ type: GET_BLOGS_SUCCESS, payload: response.data.posts })
    } catch (err) {
      console.log(err)
      dispatch({ type: GET_BLOGS_ERROR })
    }
  }

  const fetchSingleBlog = async (id) => {
    dispatch({ type: GET_SINGLE_BLOG_BEGIN })
    try {
      const response = await axios.get(`${BLOG_URL}/${id}`)
      dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: response.data })
    } catch (err) {
      console.log(err)
      dispatch({ type: GET_SINGLE_BLOG_ERROR })
    }
  }

  const fetchBlogsFromSearch = async (searchTerm) => {
    dispatch({ type: GET_BLOG_BY_SEARCHTERM_BEGIN })
    try {
      const response = await axios.get(`${SEARCH_URL}${searchTerm}`)
      console.log(response.data.posts)
      dispatch({ type: GET_BLOG_BY_SEARCHTERM_SUCCESS, payload: response.data.posts })
    } catch (err) {
      console.log(err)
      dispatch({ type: GET_BLOG_BY_SEARCHTERM_ERROR })
    }
  }

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerm })
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const ProviderValue = {
    ...state,
    fetchSingleBlog,
    fetchBlogsFromSearch,
    setSearchTerm
  }

  const memoizedValue = useMemo(() => ProviderValue, [state, fetchSingleBlog, fetchBlogsFromSearch, setSearchTerm])

  return <BlogsContext.Provider value={memoizedValue}>{children}</BlogsContext.Provider>
}

export const useBlogsContext = () => {
  return useContext(BlogsContext)
}
