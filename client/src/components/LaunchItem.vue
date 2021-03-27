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
        <a class="btn btn-secondary" @click.prevent="showLaunch"
          >Launch Details</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
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
    const router = useRouter()

    let launchDate = computed(() =>
      new Date(props.launch_date_local).toLocaleString(),
    )

    const showLaunch = () => {
      router.push(`/launch/${props.flight_number}`)
    }

    return {
      launchDate,
      showLaunch,
    }
  },
}
</script>
