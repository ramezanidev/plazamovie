<template>
  <div class="container mx-auto my-20">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >اشتراک ویژه</span>
    </div>
    <div class="w-full pt-12 flex items-center justify-center gap-8">
      <!-- silver -->
      <div class="border border-brand-1 border-opacity-50 relative overflow w-64 h-80 rounded">
        <div class="bg-gradient-to-b from-brand-4 absolute inset-0 opacity-40" />
        <div class="relative inset-0 h-full w-full p-4">
          <h4 class="text-white font-bold w-full text-center text-lg">
            اشتراک نقره
          </h4>
          <ul class="mt-4 text-gray-300 text-sm px-2 space-y-2">
            <li>دانلود 5 تا فیلم سینمایی</li>
            <li>15 روز حق استفاده از اشتراک</li>
          </ul>
          <button class="absolute bottom-0 left-0 right-0 w-full h-12 rounded bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
            خرید + جزئیات بیشتر
          </button>
        </div>
      </div>
      <!-- gold -->
      <div style="box-shadow: 0px 0px 20px 0px #e23e5785;" class="border border-brand-1 border-opacity-70 relative overflow h-96 w-72 rounded">
        <div class="bg-gradient-to-b from-brand-4 absolute inset-0 opacity-40" />
        <div class="relative inset-0 h-full w-full p-4">
          <h4 class="text-yellow-500 font-bold w-full text-center text-lg">
            اشتراک طلایی
          </h4>
          <ul class="mt-4 text-gray-300 text-sm px-2 space-y-2">
            <li>دانلود 5 تا فیلم سینمایی</li>
            <li>15 روز حق استفاده از اشتراک</li>
          </ul>
          <button class="absolute bottom-0 left-0 right-0 w-full h-12 rounded bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
            خرید + جزئیات بیشتر
          </button>
        </div>
      </div>
      <!-- Bronze -->
      <div class="border border-brand-1 border-opacity-50 relative overflow w-64 h-80 rounded">
        <div class="bg-gradient-to-b from-brand-4 absolute inset-0 opacity-40" />
        <div class="relative inset-0 h-full w-full p-4">
          <h4 class="text-white font-bold w-full text-center text-lg">
            اشتراک برنزه
          </h4>
          <ul class="mt-4 text-gray-300 text-sm px-2 space-y-2">
            <li>دانلود 5 تا فیلم سینمایی</li>
            <li>15 روز حق استفاده از اشتراک</li>
          </ul>
          <button class="absolute bottom-0 left-0 right-0 w-full h-12 rounded-b bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
            خرید + جزئیات بیشتر
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSubscription',
  components: {},
  data () {
    return {}
  }
})
</script>

<style lang="scss"></style>
