const { default: Axios } = require('axios')
Axios.defaults.baseURL = 'https://api.spacexdata.com/v3'

module.exports = {
  Query: {
    async launches() {
      const response = await Axios.get('/launches')
      return response.data
    },
    async launch(_, {flight_number}) {
      const response = await Axios.get(`/launches/${flight_number}`)
      return response.data
    },
  },
}
