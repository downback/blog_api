import { useEffect, useState } from 'react'
import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const useAddBlog = ({ id }) => {
  const [addPost, setAddPost] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.post(`${BLOG_URL}/add`, {
          userId: 1,
          ...formValues
        })
        setAddPost(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchSingleBlog()
  }, [id])

  return { addPost, loading, error }
}
export default useAddBlog
