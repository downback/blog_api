import { useEffect, useState } from 'react'
import axios from './axios'
import { BLOG_URL, SEARCH_URL } from '../utils/url_constants'

const useGetBlogList = ({ searchTerm }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchBlogList = async () => {
      try {
        const url = searchTerm ? `${SEARCH_URL}?q=${searchTerm}&limit=40` : `${BLOG_URL}?limit=40`
        const response = await axios.get(url)
        setData(response.data.posts ?? [])
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogList()
  }, [searchTerm])

  return { data, loading, error }
}

export default useGetBlogList
