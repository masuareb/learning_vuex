<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 }}" rel="prev">Prev</router-link>
    </template>
    <template v-if="(page != 1) && (totalEvents > page * 3)">
      |
    </template>
    <template v-if="totalEvents > page * 3">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 }}">Next Page</router-link>
    </template>
  </div>

</template>

<script>
import EventCard from "@/components/EventCard";
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    totalEvents() {
      return parseInt(this.$store.state.totalEvents)
    },
    ...mapState(['events'])
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  }
}
</script>