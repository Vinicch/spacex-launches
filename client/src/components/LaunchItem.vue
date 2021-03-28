<template>
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-9">
        <h4>
          Mission:
          <span
            :class="{
              'text-success': launch_success,
              'text-danger': !launch_success,
            }"
            >{{ mission_name }}</span
          >
        </h4>
        <p>Date: {{ launchDate }}</p>
      </div>
      <div class="col-md-3">
        <router-link :to="{ path: `/launch/${flight_number}` }">
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
    flight_number: {
      type: Number,
      default: 0,
    },
    mission_name: {
      type: String,
      default: '',
    },
    launch_date_local: {
      type: String,
      default: '',
    },
    launch_success: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let launchDate = computed(() =>
      new Date(props.launch_date_local).toLocaleString(),
    )

    return {
      launchDate,
    }
  },
})
</script>
