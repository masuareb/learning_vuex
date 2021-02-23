<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <p>
    </p>
  </div>

</template>

<script>
import EventCard from "@/components/EventCard";
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: mapState(['events']),
  created() {
    this.$store.dispatch('fetchEvents')
  }
}
</script>
