<template>
  <h4 v-if="loading">Loading...</h4>
  <h4 v-else-if="error">Error: {{ error.message }}</h4>
  <template v-else>
    <h1 class="display-4 my-3">Launches</h1>
    <MissionKey />
    <LaunchItem
      v-for="launch in result.launches"
      :key="launch.flight_number"
      v-bind="launch"
    />
  </template>
</template>

<script lang="ts">
import MissionKey from '@/components/MissionKey.vue'
import LaunchItem from '@/components/LaunchItem.vue'
import { useQuery } from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'

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

export default {
  components: {
    MissionKey,
    LaunchItem,
  },
  setup() {
    const { loading, error, result } = useQuery(launchesQuery)

    return {
      loading,
      error,
      result,
    }
  },
}
</script>
