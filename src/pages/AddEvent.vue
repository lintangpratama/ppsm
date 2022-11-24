<template>
  <div class="
      text-left
      mt-10
      mb-10
      mx-auto
      max-w-7xl
      px-4
      sm:mt-12 sm:px-6
      md:mt-16
      lg:mt-20 lg:px-8
      xl:mt-14
    ">
    <h1 class="text-center text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      Add <span class="text-main">Event</span>
    </h1>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Event Description
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="company-website" id="company-website" v-model="title" class="
                          focus:ring-emerald-300 focus:border-emerald-300
                          flex-1
                          block
                          w-full
                          rounded-md
                          sm:text-sm
                          border-gray-300
                        " placeholder="Ex: Pelatihan Dasar Adobe Premiere Pro" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      About
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" v-model="about" class="
                          shadow-sm
                          focus:ring-emerald-300 focus:border-emerald-300
                          mt-1
                          block
                          w-full
                          sm:text-sm
                          border border-gray-300
                          rounded-md
                        " placeholder="you@example.com" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your organization event. Such as
                      info about event time, the speaker, your event benefit, or
                      a contact person of the event.
                    </p>
                  </div>

                  <div class="col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Start time</label>
                    <input type="datetime-local" name="first-name" id="first-name" v-model="start_time"
                      autocomplete="given-name" class="
                        mt-1
                        focus:ring-emerald-300 focus:border-emerald-300
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      " />
                  </div>

                  <div class="col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">End time</label>
                    <input type="datetime-local" name="last-name" v-model="end_time" id="last-name"
                      autocomplete="family-name" class="
                        mt-1
                        focus:ring-emerald-300 focus:border-emerald-300
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      " />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Poster photo
                  </label>
                  <div class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                    ">
                    <div v-if="!this.file" class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        <label for="file-upload" class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-main
                            hover:text-emerald-300
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-emerald-300
                          ">
                          <span>Upload an image</span>
                          <input id="file-upload" name="file-upload" type="file" ref="poster" @change="onFileChange"
                            accept="image/*" class="sr-only" />
                        </label>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                    <div v-else class="space-y-1 text-center">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="
                          enable-background: new 0 0 50 50;
                          width: 60px;
                          margin: 0px auto;
                        " xml:space="preserve">
                        <circle style="fill: #25ae88" cx="25" cy="25" r="25" />
                        <polyline style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 2;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          " points="
	38,15 22,33 12,25 " />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        Image <span class="text-main ml-0.5">chosen</span>
                      </div>
                      <p class="text-xs text-gray-500">
                        File name: {{ file.name }}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Certificate Template
                  </label>
                  <div class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                    ">
                    <div v-if="!this.certificateFile" class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        <label for="file-upload" class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-main
                            hover:text-emerald-300
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-emerald-300
                          ">
                          <span>Upload an image</span>
                          <input id="file-upload" name="file-upload" type="file" ref="poster"
                            @change="onFileCertificateChange" accept="image/*" class="sr-only" />
                        </label>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                    <div v-else class="space-y-1 text-center">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="
                          enable-background: new 0 0 50 50;
                          width: 60px;
                          margin: 0px auto;
                        " xml:space="preserve">
                        <circle style="fill: #25ae88" cx="25" cy="25" r="25" />
                        <polyline style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 2;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          " points="
	38,15 22,33 12,25 " />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        Image <span class="text-main ml-0.5">chosen</span>
                      </div>
                      <p class="text-xs text-gray-500">
                        File name: {{ certificateFile.name }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                    Lokasi
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="company-website" id="company-website" v-model="title" class="
                            focus:ring-emerald-300 focus:border-emerald-300
                            flex-1
                            block
                            w-full
                            rounded-md
                            sm:text-sm
                            border-gray-300
                          " placeholder="Ex: https://meet.google.com/zkw-ckvw-dmi atau lokasi fisik" />
                  </div>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                    Tipe Event
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <select name="company-website" id="company-website" @change="onEventTypeChange" class="
                          focus:ring-emerald-300 focus:border-emerald-300
                          flex-1
                          block
                          w-full
                          rounded-md
                          sm:text-sm
                          border-gray-300
                        " placeholder="Ex: Pelatihan Dasar Adobe Premiere Pro">
                      <option value="free">Gratis</option>
                      <option value="paid">Berbayar</option>
                    </select>
                  </div>
                </div>

                <div v-if="this.eventType == 'paid'">
                  <div class="col-span-6 sm:col-span-4 mb-6">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Harga
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="company-website" id="company-website" v-model="title" class="
                            focus:ring-emerald-300 focus:border-emerald-300
                            flex-1
                            block
                            w-full
                            rounded-md
                            sm:text-sm
                            border-gray-300
                          " placeholder="Ex: 20000" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-4 mb-6">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Nama Bank
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="company-website" id="company-website" v-model="bank_name" class="
                            focus:ring-emerald-300 focus:border-emerald-300
                            flex-1
                            block
                            w-full
                            rounded-md
                            sm:text-sm
                            border-gray-300
                          " placeholder="Ex: BCA" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-4 mb-6">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Nama Pemilik Rekening
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="company-website" id="company-website" v-model="bank_owner" class="
                            focus:ring-emerald-300 focus:border-emerald-300
                            flex-1
                            block
                            w-full
                            rounded-md
                            sm:text-sm
                            border-gray-300
                          " placeholder="Ex: BCA" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-4 mb-6">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                      Nomor Rekening
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input type="text" name="company-website" id="company-website" v-model="bank_number" class="
                            focus:ring-emerald-300 focus:border-emerald-300
                            flex-1
                            block
                            w-full
                            rounded-md
                            sm:text-sm
                            border-gray-300
                          " placeholder="Ex: 2002736182" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" @click.prevent="add" class="
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-main
                      hover:bg-main
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-emerald-300
                    ">
                  <div v-if="this.loading === false">
                    Save
                  </div>
                  <div v-else class="flex justify-center items-center">
                    Uploading <img src="../assets/animated/loading-white.svg" width="30" />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      certificateFile: null,
      eventType: "free",
      loading: false,
    };
  },
  mounted() {
    if (!localStorage.getItem("ppsm-admin")) {
      window.location.href = "/login-admin"
    }
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    onFileCertificateChange(event) {
      this.certificateFile = event.target.files[0];
      console.log(this.certificateFile);
    },
    onEventTypeChange(event) {
      this.eventType = event.target.value;
      console.log(this.eventType);
    },
    add() {
      if (!this.title || !this.about || !this.file || !this.certificateFile || !this.start_time || !this.end_time) {
        this.$swal({
          icon: 'error',
          title: 'Harap Isi Semua Data Terlebih Dahulu',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        let formData = new FormData()
        formData.append("title", this.title)
        formData.append("description", this.about)
        formData.append("start_at", new Date(this.start_time).toISOString())
        formData.append("end_at", new Date(this.end_time).toISOString())
        formData.append("banner", this.file)
        formData.append("certificate", this.certificateFile)
        this.loading = true;
        axios.post("https://api.ppsm.or.id/api/events",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("ppsm-admin")}`
            }
          }
        ).then(res => {
          this.loading = false;
          console.log(res);
          if (res.data.meta.status_code == 200) {
            console.log(res);
            localStorage.setItem("ppsm-admin", res.data.data.token)
            window.location.href = "/admin"
          } else {
            this.$swal({
              icon: 'success',
              title: res.meta.message,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }).catch(e => {
          this.loading = false;
          console.log(e);
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
};
</script>
