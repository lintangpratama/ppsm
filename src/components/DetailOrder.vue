<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
        <div class="px-4 py-5 sm:px-6">
            <div class="w-full mx-auto mb-12 text-center">
                <p class="
              mt-1
              mb-10
              text-base text-gray-500
              sm:mt-3 sm:text-base sm:max-w-xl
              mx-auto
              md:mt-2 md:text-base
            ">
                    Bukti Pembayaran
                </p>
                <img :src="imageUrl" class="mx-auto" width="350" alt="event image" />
            </div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                <span class="text-main">Event</span> Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Event details and more information
            </p>
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Status</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ title }}
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Harga</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ toRupiahFormat(about || 0) }}
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Location</dt>
                    <dd v-if="title === 'CONFIRM'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ location }}
                    </dd>
                    <dd v-else-if="title === 'REJECT'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Your payment was not approved
                    </dd>
                    <dd v-else class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Make a payment to get the event location
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>
  
<script setup>
import { PaperClipIcon } from "@heroicons/vue/solid";
import convertDate from "../utils/convertTime";
import toRupiahFormat from "../utils/toRupiahFormat"
</script>
  
<script>
export default {
    props: [
        'title',
        'about',
        'date',
        'start_time',
        'end_time',
        'location',
        'link',
        'imageUrl',
        'type',
        'price'
    ],
}
</script>