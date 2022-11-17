<template>
  <NavbarAdmin />
  <EventsGroupAdmin :data="events" />
</template>

<script setup>
import EventsGroupAdmin from "../components/EventGroupAdmin.vue";
import NavbarAdmin from "../components/NavbarAdmin.vue";
</script>

<script>
import DataService from "../utils/firestoreDb";

export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getData(organizer) {
      const service = new DataService();
      const data = await service.getDataByOrganizer(organizer);
      this.events = data;
      console.log(data);
    },
  },
  async mounted() {
  },
};
</script>