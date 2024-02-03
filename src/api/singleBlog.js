import axios from './axios'
import { BLOG_URL } from '../utils/url_constants'

const fetchSingleBlog = async ({ id, onSuccess, onError }) => {
  try {
    const response = await axios.get(`${BLOG_URL}/${id}`)
    onSuccess(response.data)
  } catch (err) {
    console.log(err)
    onError()
  }
}
export default fetchSingleBlog
