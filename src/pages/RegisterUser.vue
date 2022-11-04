<template>
  <div class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    ">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/logo.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Regiter your accunt
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="full-name" class="sr-only">Nama Lengkap</label>
            <input id="full-name" name="text" v-model="name" type="text" autocomplete="name" required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Nama Lengkap" />
          </div>
          <div>
            <label for="phone-number" class="sr-only">Nomor HP</label>
            <input id="phone-number" name="phone-number" v-model="phone" type="number" required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Nomor HP" />
          </div>
          <div>
            <label for="address" class="sr-only">Alamat Asal</label>
            <input id="address" name="address" v-model="address" type="text" required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Alamat Asal" />
          </div>
          <div>
            <label for="school" class="sr-only">Asal Sekolah</label>
            <input id="school" name="school" v-model="school" type="text" required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Asal Sekolah" />
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input id="email" name="email" v-model="email" type="text" required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Email" />
          </div>
          <div>
            <label for="parents-name" class="sr-only">Nama Orang Tua</label>
            <input id="parents-name" name="parents-name" v-model="parentsText" type="text" autocomplete="name"
              required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Nama Orang Tua" />
          </div>
          <div>
            <label for="parents-phone" class="sr-only">Nomor HP Orang Tua</label>
            <input id="parents-phone" name="parents-phone" v-model="parentsPhone" type="number" autocomplete="phone"
              required="true" class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Nomor HP Orang Tua" />
          </div>
        </div>
        <div>
          <button @click.prevent="login" type="submit" class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-main
              hover:bg-emerald-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-emerald-500
            ">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-emerald-100 group-hover:text-emerald-400" aria-hidden="true" />
            </span>
            <a @click.prevent="login">Daftar</a>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<script>
export default {
  methods: {
    login() {
      alert("Haha");
      window.location.href = "/login"
    },
  },
  mounted() {
    alert("Haha");
  },
};
</script>
