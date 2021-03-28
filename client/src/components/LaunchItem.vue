<template>
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-9">
        <h4>
          Mission:
          <span
            :class="{
              'text-success': launchSuccess,
              'text-danger': !launchSuccess,
            }"
            >{{ missionName }}</span
          >
        </h4>
        <p>Date: {{ launchDate }}</p>
      </div>
      <div class="col-md-3">
        <router-link :to="{ path: `/launch/${flightNumber}` }">
          Launch Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    flightNumber: {
      type: Number,
      default: 0,
    },
    missionName: {
      type: String,
      default: '',
    },
    launchDateLocal: {
      type: String,
      default: '',
    },
    launchSuccess: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let launchDate = computed(() =>
      new Date(props.launchDateLocal).toLocaleString(),
    )

    return {
      launchDate,
    }
  },
})
</script>
