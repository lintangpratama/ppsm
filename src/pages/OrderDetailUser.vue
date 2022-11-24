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
    <DetailOrder :id="this.$route.params.orderId" :title="event.status" :about="event.amount"
      :imageUrl="event.proof_of_payment" :link="event.link" />
  </div>
</template>
  
<script setup>
import Navbar from "../components/Navbar.vue";
import NavbarUser from "../components/NavbarUser.vue";
import NavbarAdmin from "../components/NavbarAdmin.vue";
import DetailOrder from "../components/DetailOrder.vue";
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
    const orderId = this.$route.params.orderId;
    axios.get(`https://api.ppsm.or.id/api/events/order/${orderId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
      }
    }).then(res => this.event = res.data.data)
  },
};
</script>