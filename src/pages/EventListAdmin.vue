<template>
  <NavbarAdmin />
  <EventsGroupAdmin :data="events" />
</template>

<script setup>
import EventsGroupAdmin from "../components/EventGroupAdmin.vue";
import NavbarAdmin from "../components/NavbarAdmin.vue";
import axios from "axios";
</script>

<script>

export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    
  },
  async mounted() {
    if (!localStorage.getItem("ppsm-admin")) {
      window.location.href = "/login-admin"
    }
    axios.get("https://api.ppsm.or.id/api/events", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ppsm-admin")}`
      }
    }).then(res => {
      this.events = res.data.data
      console.log(this.events);
    })
  },
};
</script>