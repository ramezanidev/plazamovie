<template>
  <div class="overflow-hidden pt-24 -mt-24 relative">
    <div class="bg-brand-3 w-full h-24 absolute top-12 inset-x-0 transform -rotate-3" />
    <article class="relative z-10 pt-14">
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
        <div class="bg-brand-4 rounded w-full mt-16 py-4 px-4 md:px-8 lg:px-14">
          <form class="w-full relative">
            <button type="submit" class="absolute outline-none select-none top-0 left-0 flex text-white hover:text-brand-1 transition w-12 h-14">
              <svg class="w-8 h-8 m-auto" style="transform: scaleX(-100%)" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
            <input
              placeholder="اسم فیلمتو بهم بگو ..."
              required
              class="w-full h-14 bg-brand-3 placeholder-white px-4 rounded outline-none text-white focus:ring focus:ring-brand-1"
              type="text"
            >
          </form>
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSearch'
})
</script>

<style></style>
