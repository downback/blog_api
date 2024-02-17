import { useCallback, useState } from 'react'
import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const useAddBlog = ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const addPost = useCallback(
    (data) => {
      setLoading(true)
      const fetchSingleBlog = async () => {
        try {
          const response = await axios.post(`${BLOG_URL}/add`, data)
          onSuccess?.(response)
        } catch (err) {
          setError(err)
          onError?.(err)
        } finally {
          setLoading(false)
        }
      }
      fetchSingleBlog()
    },
    [onSuccess, onError]
  )

  return { addPost, loading }
}
export default useAddBlog
