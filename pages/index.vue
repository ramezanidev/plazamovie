<template>
  <div>
    <AppHeader />
    <div class="overflow-hidden pt-24 -mt-24 relative">
      <div class="bg-brand-3 w-full h-24 absolute top-12 inset-x-0 transform -rotate-3" />
      <article class="bg-brand-3 relative z-10 pt-14">
        <section class="w-full container mx-auto">
          <div class="w-full grid grid-cols-3 gap-6">
            <div class="w-full border-8 h-44 lg:h-52 border-brand-4 rounded">
              <img src="/5872151.png" class="w-full h-full object-cover object-center" draggable="false">
            </div>
            <div class="w-full border-8 h-44 lg:h-52 border-brand-4 rounded">
              <img src="/wp8970877-hollywood-movies-2021-wallpapers.jpg" class="w-full h-full object-cover object-center" draggable="false">
            </div>
            <div class="w-full border-8 h-44 lg:h-52 border-brand-4 rounded">
              <img src="/wp9426050-let-there-be-carnage-wallpapers.jpg" class="w-full h-full object-cover object-center" draggable="false">
            </div>
          </div>
          <div class="bg-brand-4 w-full mt-24 py-4 px-4 md:px-8 lg:px-14">
            <div class="w-full">
              <input placeholder="اسم فیلمتو بهم بگو ..." class="w-full h-14 bg-brand-3 placeholder-white px-4 rounded" type="text">
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4 select-none">
              <button class="w-full h-10 text-white border border-brand-2 rounded hover:bg-brand-3 hover:bg-opacity-70 transition bg-brand-3">
                همه
              </button>
              <button class="w-full h-10 text-white border border-brand-2 rounded hover:bg-brand-3 hover:bg-opacity-70 transition">
                علمی
              </button>
              <button class="w-full h-10 text-white border border-brand-2 rounded hover:bg-brand-3 hover:bg-opacity-70 transition">
                تخیلی
              </button>
              <button class="w-full h-10 text-white border border-brand-2 rounded hover:bg-brand-3 hover:bg-opacity-70 transition">
                ماجراجویی
              </button>
              <button class="w-full h-10 text-white border border-brand-2 rounded hover:bg-brand-3 hover:bg-opacity-70 transition">
                اکشن
              </button>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
