<template>
  <NavbarUser />
  <EventsGroup title="Upcoming" :data="events" emptyMsg="Tidak ada event"  />
</template>

<script setup>
import NavbarUser from "../components/NavbarUser.vue";
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
    if (!localStorage.getItem("ppsm-user")) {
      window.location.href = "/login"
    } else {
      axios.get("https://api.ppsm.or.id/api/events", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
        }
      }).then(res => this.events = res.data.data)
    }
  },
}
</script>