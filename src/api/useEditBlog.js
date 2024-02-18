import { useCallback, useState } from 'react'

import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const useEditBlog = ({ onSuccess, onError, id }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const editPost = useCallback(
    (data) => {
      setLoading(true)
      const fetchUpdatedBlog = async () => {
        try {
          const response = await axios.put(`${BLOG_URL}/${id}`, data)
          onSuccess?.(response)
        } catch (err) {
          setError(err)
          onError?.(err)
        } finally {
          setLoading(false)
        }
      }
      fetchUpdatedBlog()
    },
    [onSuccess, onError, id]
  )

  return { editPost, loading }
}
export default useEditBlog
