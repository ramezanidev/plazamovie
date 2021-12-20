<template>
  <div class="container mx-auto my-20 app-best">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >بهترین ها</span>
    </div>
    <VueSlickCarousel v-bind="settings" class="overflow-x-hidden mt-8">
      <div
        v-for="movie in data"
        :key="movie.name"
        draggable="false"
        class="w-full h-96"
      >
        <div class="flex w-full h-full flex-col rounded overflow-hidden relative">
          <div class="h-48 relative">
            <div class="absolute rounded top-0 left-0 py-1 px-2 font-extrabold text-sm bg-yellow-400 text-white">
              <span class="flex items-center">
                <span>10/10</span>
                <svg class="flex w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
              </span>
            </div>
            <img
              draggable="false"
              :src="movie.cover"
              class="w-full rounded-t w h-full object-cover object-center"
            >
          </div>
          <div class="flex-auto relative">
            <div class="bg-gradient-to-b opacity-60 from-brand-2 to-black w-full h-full absolute inset-0" />
            <div class="flex flex-col justify-between h-full relative">
              <div class="p-2 text-white">
                Hello
              </div>
              <button class="w-full h-12 rounded-b bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
                خرید + جزئیات بیشتر
              </button>
            </div>
          </div>
        </div>
      </div>
    </vueslickcarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import VueSlickCarousel from 'vue-slick-carousel-rtl'
import 'vue-slick-carousel-rtl/dist/vue-slick-carousel-rtl.css'
// optional style for arrows & dots
// import 'vue-slick-carousel-rtl/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  name: 'AppBest',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        arrows: false,
        dots: true,
        rows: 3,
        rtl: true
      },
      data: [
        {
          href: '/',
          cover: '/wallpapersden.com_clifford-the-big-red-dog-hd_2800x1400.jpg',
          score: '5/10',
          name: 'Uncharted 1',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover:
            '/wallpapersden.com_robert-pattinson-the-batman-cool_1920x1080.jpg',
          score: '5/10',
          name: 'Uncharted 2',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover:
            '/wallpapersden.com_uncharted-4k-tom-holland-as-nathan-drake_4000x3000.jpg',
          score: '5/10',
          name: 'Uncharted 3',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover: '/wp8970877-hollywood-movies-2021-wallpapers.jpg',
          score: '5/10',
          name: 'Uncharted 4',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover: '/wp9426050-let-there-be-carnage-wallpapers.jpg',
          score: '5/10',
          name: 'Uncharted 5',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover: '/spiderman-multiverse-of-madness-5k-va-1152x864.jpg',
          score: '5/10',
          name: 'Uncharted 6',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover: '/5872151.png',
          score: '5/10',
          name: 'Uncharted 7',
          writer: 'میلاد سعیدی'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.app-best .slick-slide {
  @apply grid-cols-3 #{!important};
}
</style>
