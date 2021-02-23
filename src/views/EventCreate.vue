<template>
  <div>
    <h1>Create Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>