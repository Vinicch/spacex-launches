<template>
  <div class="container">
    <img class="app-logo" src="./assets/logo.png" alt="SpaceX" />
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: createHttpLink({ uri: 'http://localhost:4000/query' }),
    })

    provideApolloClient(client)
  },
})
</script>

<style lang="scss">
.app-logo {
  display: block;
  width: 300;
  margin: auto;
}
</style>
