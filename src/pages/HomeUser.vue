<template>
  <NavbarUser />
  <HeroSection />
  <EventsGroup :data="events" />
  <Category />
</template>

<script setup>
import NavbarUser from "../components/NavbarUser.vue";
import HeroSection from "../components/HeroSection.vue";
import Category from "../components/Category.vue";
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