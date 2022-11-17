<script setup>
import NavbarAdmin from "../components/NavbarAdmin.vue";
import AdminMenu from "../components/AdminMenu.vue";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import console from "console";
const auth = getAuth();
</script>

<template>
  <NavbarAdmin />
  <AdminMenu />
</template>

<script>
export default {
  mounted() {
    if (!localStorage.getItem("ppsm-admin")) {
      window.location.href = "/login-admin"
    }
  },
}
</script>