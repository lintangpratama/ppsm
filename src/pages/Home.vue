<template>
  <Navbar />
  <EventsGroup title="Upcoming" :data="events" emptyMsg="Tidak ada event" />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import EventsGroup from "../components/EventsGroup.vue";
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    axios.get("https://api.ppsm.or.id/api/events", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
      }
    }).then(res => this.events = res.data.data)
  },
}
</script>