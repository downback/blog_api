import { useEffect, useState } from 'react'
import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const useGetSingleBlog = ({ id }) => {
  const [singlePost, setSinglePost] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`${BLOG_URL}/${id}`)
        setSinglePost(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchSingleBlog()
  }, [id])

  return { singlePost, loading, error }
}
export default useGetSingleBlog
