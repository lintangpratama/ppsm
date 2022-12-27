<template>
  <div v-if="user === 'user'">
    <NavbarUser />
  </div>
  <div v-else-if="user === 'admin'">
    <NavbarAdmin />
  </div>
  <div v-else>
    <Navbar />
  </div>
  <div class="max-w-2xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
    <DetailEvent :id="this.$route?.params?.eventId" :title="event.title" :about="event.description"
      :end_time="event.end_at" :start_time="event.start_at" :imageUrl="event.banner" :link="event.link"
      :location="event.location" :type="event.type" :price="event.price" />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import NavbarUser from "../components/NavbarUser.vue";
import NavbarAdmin from "../components/NavbarAdmin.vue";
import DetailEvent from "../components/DetailEvent.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: localStorage.getItem("ppsm-user") ? "user" : localStorage.getItem("ppsm-admin") ? "admin" : "guest",
      event: {}
    };
  },
  async mounted() {
    const eventId = this.$route.params.eventId;
    console.log("ini adalah event id", eventId)
    axios.get(`https://api.ppsm.or.id/api/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
      }
    }).then(res => this.event = res.data.data)
  },
};
</script>