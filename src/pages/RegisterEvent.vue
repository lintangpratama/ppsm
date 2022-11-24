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
            Register <span class="text-main">Event</span>
        </h1>
        <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div v-if="event.type === 'paid'" class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7">
                            Detail Pesanan
                        </h3>

                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Total
                            </p>
                            <p
                                class="text-sm w-36 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ toRupiah(event.price) }}
                            </p>
                        </div>
                        <p class="mt-1 text-sm text-gray-600">

                        </p>
                    </div>
                    <div v-if="event.type === 'paid'" class="px-4 sm:px-0 mt-12">
                        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7">
                            Data Peserta
                        </h3>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Nama Peserta
                            </p>
                            <p
                                class="text-sm w-48 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.name }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Email
                            </p>
                            <p
                                class="text-sm text-right overflow-auto text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.email }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Nomor HP
                            </p>
                            <p
                                class="text-sm w-36 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.phone_number }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Alamat Sekolah
                            </p>
                            <p class="text-sm text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.school_name }}
                            </p>
                        </div>
                    </div>
                </div>
                <div v-if="event.type === 'paid'" class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                    <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7">
                                        Rekening Pembayaran
                                    </h3>
                                    <div class="flex justify-between mt-1" style="margin: 8px !important;">
                                        <p class="text-sm text-gray-600 self-center">
                                            Nama Bank
                                        </p>
                                        <p
                                            class="text-sm w-48 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                            BCA
                                        </p>
                                    </div>
                                    <div class="flex justify-between mt-1" style="margin: 8px !important;">
                                        <p class="text-sm text-gray-600 self-center">
                                            Nama Pemilik Rekening
                                        </p>
                                        <p
                                            class="text-sm w-48 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                            Ibnu
                                        </p>
                                    </div>
                                    <div class="flex justify-between mt-1" style="margin: 8px !important;">
                                        <p class="text-sm text-gray-600 self-center">
                                            Nomor Rekening
                                        </p>
                                        <p
                                            class="text-sm w-48 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                            222331315533
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7 mt-10">
                                        Upload Bukti Pembayaran
                                    </h3>
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
                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor"
                                                fill="none" viewBox="0 0 48 48" aria-hidden="true">
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
                                                        @change="onFileChange" accept="image/*" class="sr-only" />
                                                </label>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                                PNG, JPG, JPEG up to 10MB
                                            </p>
                                        </div>
                                        <div v-else class="space-y-1 text-center">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 50 50" style="
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
                                    <div v-if="!this.loading">
                                        Daftar
                                    </div>
                                    <div v-else class="flex justify-center items-center">
                                        Uploading <img src="../assets/animated/loading-white.svg" width="30" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div v-else class="flex flex-col w-full justify-end">
                    <div class="px-4 sm:px-0 mt-12">
                        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-7">
                            Data Peserta
                        </h3>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Nama Peserta
                            </p>
                            <p
                                class="text-sm w-48 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.name }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Email
                            </p>
                            <p
                                class="text-sm text-right overflow-auto text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.email }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Nomor HP
                            </p>
                            <p
                                class="text-sm w-36 text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.phone_number }}
                            </p>
                        </div>
                        <div class="flex justify-between mt-2">
                            <p class="text-sm text-gray-600 self-center">
                                Alamat Sekolah
                            </p>
                            <p class="text-sm text-right text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                {{ this.profile.school_name }}
                            </p>
                        </div>
                    </div>
                    <button type="submit" @click.prevent="add" class="
                          inline-flex
                          justify-center
                          py-2
                          px-4
                          mt-6
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
                          text-right
                        ">
                        <div v-if="!this.loading">
                            Daftar
                        </div>
                        <div v-else class="flex justify-center items-center">
                            Uploading <img src="../assets/animated/loading-white.svg" width="30" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import toRupiahFormat from '../utils/toRupiahFormat';

export default {
    data() {
        return {
            file: null,
            profile: {
                name: "",
                email: "",
                phone_number: "",
                school_name: ""
            },
            loading: false,
            event: {
                type: 'free'
            },
        };
    },
    mounted() {
        if (!localStorage.getItem("ppsm-user")) {
            window.location.href = "/login-user"
        } else {
            const eventId = this.$route.params.eventId;
            axios.get(`https://api.ppsm.or.id/api/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
                }
            }).then(res => {
                this.event = res.data.data
                console.log(this.event);
            })
            axios.get(`https://api.ppsm.or.id/api/users/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
                }
            }).then(res => this.profile = res.data.data)
        }
    },
    methods: {
        onFileChange(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },
        toRupiah(total) {
            return toRupiahFormat(total)
        },
        add() {
            if (this.event.type === 'free') {
                this.loading = true;
                let formData = new FormData()
                formData.append("event_id", this.$route.params.eventId)
                formData.append("amount", 0)
                formData.append("proof_of_payment", "free")
                axios.post("https://api.ppsm.or.id/api/events/order",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
                        }
                    }
                ).then(res => {
                    console.log(res);
                    if (res.data.meta.status_code == 200) {
                        console.log(res);
                        this.$swal({
                            icon: 'success',
                            title: "Register Success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        window.location.href = "/order"
                        this.loading = false;

                    } else {
                        this.$swal({
                            icon: 'error',
                            title: res.meta.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.loading = false;

                    }
                }).catch(e => {
                    console.log(e);
                    this.$swal({
                        icon: 'error',
                        title: e.response.data.meta.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.loading = false;

                })
                this.loading = false;

            } else {
                this.loading = true;
                if (!this.event.price || !this.file) {
                    this.$swal({
                        icon: 'error',
                        title: 'Harap Isi Semua Data Terlebih Dahulu',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.loading = false;

                } else {
                    let formData = new FormData()
                    formData.append("event_id", this.$route.params.eventId)
                    formData.append("amount", this.event.price)
                    formData.append("proof_of_payment", this.file)
                    console.log(formData);
                    axios.post("https://api.ppsm.or.id/api/events/order",
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("ppsm-user")}`
                            }
                        }
                    ).then(res => {
                        console.log(res);
                        if (res.data.meta.status_code == 200) {
                            this.$swal({
                                icon: 'success',
                                title: "Register Success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            window.location.href = "/order"
                            this.loading = false;

                        } else {
                            this.$swal({
                                icon: 'error',
                                title: res.meta.message,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            this.loading = false;

                        }
                    }).catch(e => {
                        console.log(e);
                        this.$swal({
                            icon: 'error',
                            title: e.response.data.meta.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.loading = false;
                    })
                    this.loading = false;
                }
            }
        },
    },
};
</script>