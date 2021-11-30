import Vue from 'Vue'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000' 
  })

instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(response => {
    return response
})
export default instance
