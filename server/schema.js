const { gql, makeExecutableSchema } = require('apollo-server-express')
const { default: Axios } = require('axios')
Axios.defaults.baseURL = 'https://api.spacexdata.com/v3'

const typeDefs = gql`
  type Launch {
    flight_number: Int!
    mission_name: String!
    launch_year: String
    launch_date_local: String
    launch_success: Boolean
    rocket: Rocket!
  }

  type Rocket {
    rocket_id: String!
    rocket_name: String!
    rocket_type: String
  }

  type Query {
    launches: [Launch!]
    launch(flight_number: Int!): Launch!
    rockets: [Rocket!]
    rocket(rocket_id: String!): Rocket!
  }
`

const resolvers = {
  Query: {
    launches: () => Axios.get('/launches').then((res) => res.data),
    launch: (parent, { flight_number }) => Axios.get(`/launches/${flight_number}`).then((res) => res.data),
    rockets: () => Axios.get('/rockets').then((res) => res.data),
    rocket: (parent, { rocket_id }) => Axios.get(`/rockets/${rocket_id}`).then((res) => res.data),
  },
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })
