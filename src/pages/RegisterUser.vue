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
          Register your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div class="flex flex-col mb-2">
            <label for="full-name" class="text-xs mr-auto mb-1">Nama Lengkap</label>
            <input id="full-name" name="text" v-model="name" type="text" autocomplete="name" required="true" class="
                appearance-none
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-md
                focus:outline-none
                focus:ring-emerald-400
                focus:border-emerald-400
                focus:z-10
                sm:text-sm
              " placeholder="Nama Lengkap" />
          </div>
          <div class="flex flex-col mb-2">
            <label for="phone-number" class="text-xs mr-auto mb-1">Nomor HP</label>
            <input id="phone-number" name="phone-number" v-model="phone" type="number" required="true" class="
                appearance-none
                rounded-md
                
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
          <div class="flex flex-col mb-2">
            <label for="address" class="text-xs mr-auto mb-1">Alamat Asal</label>
            <input id="address" name="address" v-model="address" type="text" required="true" class="
                appearance-none
                rounded-md
                
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
          <div class="flex flex-col mb-2">
            <label for="school" class="text-xs mr-auto mb-1">Asal Sekolah</label>
            <input id="school" name="school" v-model="school" type="text" class="
                appearance-none
                rounded-md
                
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
          <div class="flex flex-col mb-2">
            <label for="email" class="text-xs mr-auto mb-1">Alamat Email</label>
            <input id="email" name="email" v-model="email" type="text" required="true" class="
                appearance-none
                rounded-md
                
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
          <div class="flex flex-col mb-2">
            <label for="username" class="text-xs mr-auto mb-1">Username</label>
            <input id="username" name="username" v-model="username" type="text" required="true" class="
                appearance-none
                rounded-md
                
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
              " placeholder="Username" />
          </div>
          <div class="flex flex-col mb-2">
            <label for="password" class="text-xs mr-auto mb-1">Password</label>
            <input id="password" name="password" v-model="password" type="password" required="true" class="
                appearance-none
                rounded-md
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
              " placeholder="Password" />
            <p class="text-xs text-left text-black-400">Password harus terdiri dari 8 kata dan memiliki huruf kapital,
              angka, dan karakter</p>
          </div>
          <div class="flex flex-col mb-2">
            <label for="parents-name" class="text-xs mr-auto mb-1">Nama Orang Tua</label>
            <input id="parents-name" name="parents-name" v-model="parentsName" type="text" autocomplete="name"
              required="true" class="
                appearance-none
                rounded-md
                
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
          <div class="flex flex-col mb-2">
            <label for="parents-phone" class="text-xs mr-auto mb-1">Nomor HP Orang Tua</label>
            <input id="parents-phone" name="parents-phone" v-model="parentsPhone" type="number" autocomplete="phone"
              required="true" class="
                appearance-none
                rounded-md
                
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
          <button @click.prevent="register" type="submit" class="
              group
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
            <a>Daftar</a>
          </button>
          <div class="
              group
              w-full
              flex
              justify-center
              py-2
              px-4
              mt-2
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-main
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-emerald-500
            ">
            <p class="text-gray-900">Sudah punya akun?
              <span class="text-main">
                <a href="/login">Masuk</a>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
</script>

<script>
export default {
  methods: {
    passwordValidation(inputPassword) {
      var re = /^(?=.*\d)(?=.*[-!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(inputPassword);
    },
    register() {
      if (!this.name || !this.username || !this.parentsName || !this.email || !this.password || !this.phone || !this.parentsPhone || !this.school || !this.address) {
        this.$swal({
          icon: 'error',
          title: 'Harap Isi Semua Data Terlebih Dahulu',
          showConfirmButton: false,
          timer: 1500
        });
      } else if (!this.passwordValidation(this.password)) {
        this.$swal({
          icon: 'error',
          title: 'Password harus terdiri dari 8 kata dan memiliki huruf kapital, angka, dan karakter',
          showConfirmButton: false,
          timer: 1500
        });
      }
      else {
        const nameFull = this.name.split(" ").length === 1 ? `${this.name} ${this.name}` : this.name
        axios.post("https://api.ppsm.or.id/api/auth/register?user=user",
          {
            "name": nameFull,
            "username": this.username,
            "parent_name": this.parentsName,
            "email": this.email,
            "password": this.password,
            "phone_number": this.phone.toString(),
            "parent_phone_number": this.parentsPhone.toString(),
            "school_name": this.school,
            "address": this.address
          }).then(res => {
            if (res.data.meta.status_code == 200) {
              this.$swal({
                icon: 'success',
                title: 'Pendaftaran Akun Berhasil',
                showConfirmButton: false,
                timer: 1500
              });
              window.location.href = "/login"
            } else {
              this.$swal({
                icon: 'success',
                title: res.meta.message,
                showConfirmButton: false,
                timer: 1500
              });
            }
          }).catch(e => {
            this.$swal({
              icon: 'error',
              title: e.response.data.meta.message,
              showConfirmButton: false,
              timer: 1500
            });
          })
      }
    },
  },
  mounted() {
  },
};
</script>
