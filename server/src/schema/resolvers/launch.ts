import { default as Axios } from 'axios'
Axios.defaults.baseURL = 'https://api.spacexdata.com/v3'

export default {
  Query: {
    async launches() {
      const response = await Axios.get('/launches')
      return response.data
    },
    async launch(_: any, { flight_number }: any) {
      const response = await Axios.get(`/launches/${flight_number}`)
      return response.data
    },
  },
}
