<template>
  <div class="pt-14">
    <h2 class="bg-brand-3 container mx-auto text-white font-bold pl-4 text-lg select-none">
      اخبار ها
    </h2>
    <AppNews class="mt-6" :hide-title="true" />
    <div class="grid md:h-116 grid-cols-1 md:grid-cols-2 container mx-auto my-8 gap-4">
      <div class="grid gap-4 grid-cols-2 grid-rows-2">
        <div class="relative group overflow-hidden">
          <img
            draggable="false"
            src="/292086.png"
            class="w-full h-full rounded object-cover object-center"
          >
          <div class="w-full h-1/2 text-white p-2 absolute inset-x-0 bottom-0 transform hover:translate-y-full translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer bg-brand-3 !bg-opacity-75">
            1
          </div>
        </div>
        <div class="relative group overflow-hidden">
          <img
            draggable="false"
            src="/292086.png"
            class="w-full h-full rounded object-cover object-center"
          >
          <div class="w-full h-1/2 text-white p-2 absolute inset-x-0 bottom-0 transform hover:translate-y-full translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer bg-brand-3 !bg-opacity-75">
            1
          </div>
        </div>
        <div class="relative group overflow-hidden">
          <img
            draggable="false"
            src="/292086.png"
            class="w-full h-full rounded object-cover object-center"
          >
          <div class="w-full h-1/2 text-white p-2 absolute inset-x-0 bottom-0 transform hover:translate-y-full translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer bg-brand-3 !bg-opacity-75">
            1
          </div>
        </div>
        <div class="relative group overflow-hidden">
          <img
            draggable="false"
            src="/292086.png"
            class="w-full h-full rounded object-cover object-center"
          >
          <div class="w-full h-1/2 text-white p-2 absolute inset-x-0 bottom-0 transform hover:translate-y-full translate-y-full group-hover:translate-y-0 transition-all duration-300 cursor-pointer bg-brand-3 !bg-opacity-75">
            1
          </div>
        </div>
      </div>
      <div
        draggable="false"
        class="w-full h-116 md:h-full relative"
      >
        <img
          draggable="false"
          src="/292086.png"
          class="w-full rounded-t w object-cover object-center"
          style="height: calc(100% - 3rem)"
        >
        <div class="absolute p-2 text-white bottom-12 inset-x-0 w-full h-32 bg-brand-3 !bg-opacity-75 overflow-hidden overflow-ellipsis text-sm">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ار
        </div>
        <button
          class="
                  w-full
                  h-12
                  rounded-b
                  bg-brand-1
                  hover:bg-brand-4
                  transition-all
                  text-white
                  font-bold
                "
        >
          خرید + جزئیات بیشتر
        </button>
      </div>
    </div>
    <AppBest class="mt-8" :hide-title="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBest from '~/components/app-best.vue'
import AppNews from '~/components/app-news.vue'

export default Vue.extend({
  name: 'AppNewsPage',
  components: {
    AppNews,
    AppBest
  }
})
</script>

<style lang="scss" scoped>
</style>
