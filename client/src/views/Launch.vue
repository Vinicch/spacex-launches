<template>
  <h4 v-if="loading">Loading...</h4>
  <h4 v-else-if="error">{{ error.message }}</h4>
  <template v-else>
    <h1 class="display-4 my-3">
      <span class="text-dark">Mission:</span>
      {{ result.launch.mission_name }}
    </h1>
    <h4 class="mb-3">Launch Details</h4>
    <ul class="list-group">
      <li class="list-group-item">
        Flight Number: {{ result.launch.flight_number }}
      </li>
      <li class="list-group-item">
        Launch Year: {{ result.launch.launch_year }}
      </li>
      <li class="list-group-item">
        Launch Successful:
        <span
          :class="{
            'text-success': result.launch.launch_success,
            'text-danger': !result.launch.launch_success,
          }"
          >{{ result.launch.launch_success ? 'Yes' : 'No' }}</span
        >
      </li>
    </ul>
    <h4 class="my-3">Rcoket Details</h4>
    <ul class="list-group">
      <li class="list-group-item">
        Rocket ID: {{ result.launch.rocket.rocket_id }}
      </li>
      <li class="list-group-item">
        Rocket Name: {{ result.launch.rocket.rocket_name }}
      </li>
      <li class="list-group-item">
        Rocket Type: {{ result.launch.rocket.rocket_type }}
      </li>
    </ul>
    <hr />
    <router-link class="btn btn-secondary" to="/">Back</router-link>
  </template>
</template>

<script lang="ts">
import { gql } from '@apollo/client/core'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'

const launchQuery = gql`
  query($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

export default {
  setup() {
    const route = useRoute()
    const flight_number = parseInt(route.params.flight_number as string)
    const { loading, error, result } = useQuery(launchQuery, { flight_number })

    return {
      loading,
      error,
      result,
    }
  },
}
</script>
