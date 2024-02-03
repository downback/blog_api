import axios from 'axios'

export default axios.create({
  baseURL: 'https://dummyjson.com/'
})

// env: https://dummyjson.com을 env로 변경
