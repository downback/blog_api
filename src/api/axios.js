import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.REACT_APP_UNSPLASH_KEY}`
})

// env: https://dummyjson.com을 env로 변경
