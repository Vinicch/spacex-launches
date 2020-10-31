const { gql } = require('apollo-server-express')

module.exports = gql`
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
