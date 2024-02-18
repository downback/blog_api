import { useCallback, useState } from 'react'
import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const useDeleteBlog = ({ onSuccess, onError, id }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const deletePost = useCallback(
    (data) => {
      setLoading(true)
      const fetchNewBlog = async () => {
        try {
          const response = await axios.delete(`${BLOG_URL}/${id}`, data)
          onSuccess?.(response)
        } catch (err) {
          setError(err)
          onError?.(err)
        } finally {
          setLoading(false)
        }
      }
      fetchNewBlog()
    },
    [onSuccess, onError, id]
  )

  return { deletePost, loading }
}
export default useDeleteBlog
