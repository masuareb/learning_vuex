<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['categories', 'user'])
  }
}
</script>