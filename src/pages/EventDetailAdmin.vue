<template>
  <NavbarAdmin />
  <div class="max-w-2xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">

    <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
      <div class="px-4 py-5 sm:px-6">
        <div class="w-full mx-auto mb-12 text-center">
          <h2 class="text-3xl mb-2 font-extrabold tracking-tight text-gray-900">
            Test
          </h2>
          <img
            src="https://res.cloudinary.com/dl2op0nfx/image/upload/v1668939946/cbt_dev/banner/j0nqe5jczlwpca7vakh3.png"
            class="mx-auto" width="350" alt="event image" />
          <div class="mx-auto max-w-fit w-full mt-5">
            <router-link :to="'/admin/edit-event/2Ho8CiPN3fIijlhHb6jx4FPYiaN'">
              <p
                class="bg-yellow-500 text-white h-9 pt-1.5 px-3 rounded-lg hover:bg-yellow-600 active:bg-yellow-700 cursor-pointer">
                Edit Event</p>
            </router-link>
          </div>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          <span class="text-main">Registered</span> User
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          List of user details and more information
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl class="border border-b-2">
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Lintang Aji Yoga Pratama</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex sm:flex-row flex-col justify-between">
              <a class="mt-4 sm:mt-0"
                href="http://res.cloudinary.com/dl2op0nfx/image/upload/v1668939946/cbt_dev/banner/j0nqe5jczlwpca7vakh3.png"
                target="_blank">
                <span>Bukti Pembayaran</span>
                <img
                  src="https://res.cloudinary.com/dl2op0nfx/image/upload/v1668939946/cbt_dev/banner/j0nqe5jczlwpca7vakh3.png"
                  width="250" alt="">
              </a>
              <div class="flex mt-6 sm:mt-0">
                <p
                  class="bg-green-500 text-white mr-3 h-9 pt-2 px-3 rounded-lg hover:bg-green-600 active:bg-green-700 cursor-pointer">
                  Konfirmasi</p>
                <p
                  class="bg-red-500 text-white mr-3 h-9 pt-2 px-3 rounded-lg hover:bg-red-600 active:bg-red-700 cursor-pointer">
                  Tolak</p>
              </div>
            </dd>
          </div>
        </dl>
        <dl class="border border-b-2">
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Lintang Aji Yoga Pratama</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex sm:flex-row flex-col justify-between">
              <a class="mt-4 sm:mt-0"
                href="http://res.cloudinary.com/dl2op0nfx/image/upload/v1668939946/cbt_dev/banner/j0nqe5jczlwpca7vakh3.png"
                target="_blank">
                <span>Bukti Pembayaran</span>
                <img
                  src="https://res.cloudinary.com/dl2op0nfx/image/upload/v1668939946/cbt_dev/banner/j0nqe5jczlwpca7vakh3.png"
                  width="250" alt="">
              </a>
              <div class="flex mt-6 sm:mt-0">
                <p
                  class="bg-green-500 text-white mr-3 h-9 pt-2 px-3 rounded-lg hover:bg-green-600 active:bg-green-700 cursor-pointer">
                  Konfirmasi</p>
                <p
                  class="bg-red-500 text-white mr-3 h-9 pt-2 px-3 rounded-lg hover:bg-red-600 active:bg-red-700 cursor-pointer">
                  Tolak</p>
              </div>
            </dd>
          </div>
        </dl>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NavbarAdmin from '../components/NavbarAdmin.vue';

export default {
  data() {
    return {
      file: null,
    };
  },
  mounted() {
    if (!localStorage.getItem("ppsm-admin")) {
      window.location.href = "/login-admin";
    }
  },
  methods: {

  },
  components: { NavbarAdmin }
};
</script>
