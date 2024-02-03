import axios from './axios'
import { BLOG_URL, SEARCH_URL } from '../utils/url_constants'

const fetchBlogs = async ({ searchTerm, onSuccess, onError }) => {
  try {
    const url = searchTerm ? `${SEARCH_URL}?q=${searchTerm}&limit=40` : `${BLOG_URL}?limit=40`
    const response = await axios.get(url)
    onSuccess(response.data.posts ?? [])
  } catch (err) {
    console.log(err)
    onError()
  }
}

export default fetchBlogs
