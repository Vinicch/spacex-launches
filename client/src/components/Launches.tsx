import React from 'react'
import { gql, useQuery } from '@apollo/client'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const launchesQuery = gql`
  query {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = () => {
  const { loading, error, data } = useQuery(launchesQuery)

  if (loading) return <h4>Loading...</h4>
  if (error) console.log(error.message)

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map((launch: any) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  )
}

export default Launches
