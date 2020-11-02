import Axios from 'axios'
Axios.defaults.baseURL = 'https://api.spacexdata.com/v3'

export default {
  Query: {
    async rockets() {
      const response = await Axios.get('/rockets')
      return response.data
    },
    async rocket(_: any, { rocket_id }: any) {
      const response = await Axios.get(`/rockets/${rocket_id}`)
      return response.data
    },
  },
}
