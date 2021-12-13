<template>
  <div class="container mx-auto my-20">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >همه سبک ها</span>
    </div>
    <VueSlickCarousel v-bind="settings" class="overflow-x-hidden mt-8">
      <nuxt-link v-for="movie in data" :key="movie.name" draggable="false" :to="movie.href" class="w-full h-80 rounded bg-brand-2 overflow-hidden relative group cursor-pointer">
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
import 'vue-slick-carousel-rtl/dist/vue-slick-carousel-rtl.css'
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
          cover: '/wallpapersden.com_robert-pattinson-the-batman-cool_1920x1080.jpg',
          score: '5/10',
          name: 'Uncharted 2',
          writer: 'میلاد سعیدی'
        },
        {
          href: '/',
          cover: '/wallpapersden.com_uncharted-4k-tom-holland-as-nathan-drake_4000x3000.jpg',
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
@charset 'UTF-8';
/* Icons */
.slick-slide {
  @apply grid grid-cols-4 gap-4 #{!important};
}
@font-face {
  font-family: "slick";
  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA)
    format("woff");
}
/* Arrows */
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: white;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}
[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: "←";
}
[dir="rtl"] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: -25px;
}
[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: "→";
}
[dir="rtl"] .slick-next:before {
  content: "←";
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  display: block;
  width: 100%;
  padding: 0;
  @apply mt-4;
  list-style: none;

  text-align: center;
}
.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}
.slick-dots li button:before {
  content: " ";
  @apply bg-gray-200 rounded-full w-4 h-4 absolute top-0 left-0;
}
.slick-dots li.slick-active button:before {
  color: black;
  @apply bg-brand-1;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
</style>
