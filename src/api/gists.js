import Axios from 'axios'
import Config from './config'

const axios = Axios.create(Config)

const getGists = async() => {
  return axios.get('/gists')
    .catch(error => console.log(error))
}

export {
  getGists
}
