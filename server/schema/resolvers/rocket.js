const { default: Axios } = require('axios')
Axios.defaults.baseURL = 'https://api.spacexdata.com/v3'

module.exports = {
  Query: {
    async rockets() {
      const response = await Axios.get('/rockets')
      return response.data
    },
    async rocket(_, { rocket_id }) {
      const response = await Axios.get(`/rockets/${rocket_id}`)
      return response.data
    },
  },
}
