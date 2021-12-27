<template>
  <div class="container mx-auto my-20">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >همه سبک ها</span>
    </div>
    <VueSlickCarousel v-bind="settings" class="overflow-x-hidden mt-8">
      <nuxt-link
        v-for="movie in data"
        :key="movie.name"
        draggable="false"
        :to="movie.href"
        class="w-full h-80 rounded bg-brand-2 overflow-hidden relative group cursor-pointer"
      >
        <img
          draggable="false"
          :src="movie.cover"
          class="w-full relative w h-full object-cover object-center"
        >
        <div
          class="absolute bottom-0 font-bold text-white left-0 right-0 h-28 bg-brand-4 bg-opacity-80 backdrop-filter backdrop-blur py-4 px-2 md:px-4 transform translate-y-28 opacity-0 group-hover:opacity-100 duration-500 group-hover:translate-y-0 transition-all"
        >
          <p>نام اثر:‌ {{ movie.name }}</p>
          <p>نویسنده:‌ {{ movie.writer }}</p>
          <p>امتیاز:‌ {{ movie.score }}</p>
        </div>
      </nuxt-link>
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import VueSlickCarousel from 'vue-slick-carousel-rtl'
// optional style for arrows & dots
// import 'vue-slick-carousel-rtl/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  name: 'AppSlider',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        arrows: false,
        dots: true,
        rows: 4,
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
@import url('vue-slick-carousel-rtl/dist/vue-slick-carousel-rtl.css');

.slick-slide {
  @apply grid grid-cols-4 gap-4 #{!important};
}

.slick-track > * {
  @apply px-0.5
}
.slick-dots {
  @apply mt-4 p-0 w-full block text-center list-none;
  li {
    @apply cursor-pointer p-0 mx-2 inline-block w-5 h-5 relative;
    button {
      @apply block outline-none border-none w-5 h-5 p-2 cursor-pointer text-transparent bg-transparent;
      font-size: 0;
      line-height: 0;
      &:hover,
      &:focus {
        @apply outline-none;
      }
      &:hover:before,
      &:focus:before {
        @apply opacity-100;
      }
      &:before {
        content: " ";
        @apply bg-gray-200 rounded-full w-4 h-4 absolute top-0 left-0;
      }
    }
    &.slick-active button:before {
      color: black;
      @apply bg-brand-1 text-black;
    }
    &.slick-active button:before {
      @apply opacity-75 text-black;
    }
  }
}
</style>
