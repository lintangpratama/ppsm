<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 -mt-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl mb-10 font-extrabold tracking-tight text-gray-900">
        {{ title }} <span class="text-main">Events</span>
      </h2>

      <div v-if="data !== null">
        <div class="
          mt-6
          grid grid-cols-1
          gap-y-10 gap-x-6
          sm:grid-cols-2
          lg:grid-cols-4
          xl:gap-x-8
        ">
          <div v-for="product in data" :key="product.id" class="group relative">
            <div class="
                w-full
                min-h-80
                aspect-w-1 aspect-h-1
                rounded-md
                bg-gray-100
                overflow-hidden
                group-hover:opacity-75
                lg:h-80 lg:aspect-none
              ">
              <img :src="product.banner" alt="event_image" class="
                  w-full
                  h-full
                  object-center object-contain
                  lg:w-full lg:h-full
                " />
            </div>
            <div class="mt-4 flex justify-center">
              <div>
                <h3 class="text-sm text-gray-700">
                  <router-link :to="page === 'order' ? '/order/' + product.id : '/events/' + product.id">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.title }}
                  </router-link>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.type === "paid" ? toRupiahFormat(product.price) :
                    "Gratis"
                }}</p>
                <p class="mt-1 text-sm text-gray-500">{{ convertTime(product.end_at) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto" v-else>
        <p class="text-center">{{ emptyMsg }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import convertTime from "../utils/convertTime"
</script>

<script>
import toRupiahFormat from "../utils/toRupiahFormat"
export default {
  props: ['data', 'title', 'page', 'emptyMsg']
}
</script>