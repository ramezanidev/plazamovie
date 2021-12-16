<template>
  <div class="container mx-auto my-20 app-newest">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >جدیدترین ها</span>
    </div>
    <VueSlickCarousel v-bind="settings" class="overflow-x-hidden mt-8">
      <div
        v-for="movie in data"
        :key="movie.name"
        draggable="false"
        class="h-72 w-full flex"
      >
        <div class="w-full h-full p-4 grid grid-cols-3 gap-4 rounded bg-brand-2 overflow-hidden relative">
          <img
            draggable="false"
            :src="movie.cover"
            class="grid col-start-1 col-end-2 rounded h-full object-cover object-center"
          >
          <div class="col-start-2 col-end-4">
            <h3
              class="text-white font-bold text-lg"
            >
              {{ movie.name }}
            </h3>
            <p class="mt-6 text-sm text-justify text-white">
              {{ movie.text }}
            </p>
            <p class="mt-4 text-white text-sm">
              امتیاز:‌ <strong>{{ movie.score }}</strong>
            </p>
            <p class="mt-2 text-white text-sm">
              ژانر:‌ <strong>{{ movie.type }}</strong>
            </p>
            <p class="mt-2 text-white text-sm">
              رده سنی:‌ <strong dir="ltr">{{ movie.age }}</strong>
            </p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
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
  name: 'AppNewest',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        arrows: false,
        dots: true,
        rows: 1,
        rtl: true
      },
      data: [
        {
          href: '/',
          cover: '/wallpapersden.com_clifford-the-big-red-dog-hd_2800x1400.jpg',
          score: '5/10',
          name: 'Uncharted 1',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover:
              '/wallpapersden.com_robert-pattinson-the-batman-cool_1920x1080.jpg',
          score: '5/10',
          name: 'Uncharted 2',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover:
              '/wallpapersden.com_uncharted-4k-tom-holland-as-nathan-drake_4000x3000.jpg',
          score: '5/10',
          name: 'Uncharted 3',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover: '/wp8970877-hollywood-movies-2021-wallpapers.jpg',
          score: '5/10',
          name: 'Uncharted 4',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover: '/wp9426050-let-there-be-carnage-wallpapers.jpg',
          score: '5/10',
          name: 'Uncharted 5',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover: '/spiderman-multiverse-of-madness-5k-va-1152x864.jpg',
          score: '5/10',
          name: 'Uncharted 6',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        },
        {
          href: '/',
          cover: '/5872151.png',
          score: '5/10',
          name: 'Uncharted 7',
          text: ' وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!',
          writer: 'میلاد سعیدی',
          age: '+15',
          type: 'اکشن'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.app-newest .slick-slide {
  @apply grid-cols-1 #{!important};
}
</style>
