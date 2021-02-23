import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [],
    event: {},
    totalEvents: 0
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_TOTAL_EVENTS(state, total) {
      state.totalEvents = total
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then( () => {
        commit('ADD_EVENT', event.data)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
          .then(response => {
            commit('SET_EVENTS', response.data)
            commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
    }
  },
  modules: {}
});
