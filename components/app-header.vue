<template>
  <div
    class="flex flex-col w-full bg-cover bg-center"
    :class="{ bg: !showOnlyHeader }"
  >
    <div class="container mx-auto">
      <header
        ref="navbar"
        class="w-full flex justify-between py-6"
      >
        <div class="flex">
          <nuxt-link to="/">
            <img class="w-20 logo" src="/logo.svg" draggable="false">
          </nuxt-link>
          <nav class="navbar md:flex items-center mr-8 hidden">
            <ul class="flex space-s-6 font-bold text-lg">
              <li
                v-for="nav in navBar"
                :key="nav.to"
                class="
                  text-white
                  hover:text-brand-1
                  transition-all
                  whitespace-nowrap
                "
              >
                <nuxt-link :to="nav.to" v-text="nav.name" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center space-s-4">
          <!-- change theme -->
          <div class="bg-brand-2 w-16 h-6 rounded-full cursor-pointer">
            <span
              class="
                flex
                h-8
                w-8
                text-white
                justify-center
                items-center
                bg-brand-3
                rounded-full
                -mt-1
              "
            >
              <svg style="width: 20px; height: 20px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
                />
              </svg>
            </span>
          </div>
          <!-- account -->
          <nuxt-link
            to="/login"
            class="
              w-8
              h-8
              text-white
              bg-brand-1
              transition-all
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
              />
            </svg>
          </nuxt-link>
          <!-- menu -->
          <button
            class="
              w-8
              h-8
              text-brand-1
              flex
              items-center
              justify-center
              cursor-pointer
              md:hidden
            "
          >
            <svg class="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </button>
        </div>
      </header>
      <div v-if="!showOnlyHeader" class="mt-20">
        <h2 class="text-brand-1 font-bold text-3xl">
          به بزرگ ترین مرجع فیلم و سریال <br>خوش آمدید
        </h2>
        <p class="text-white max-w-sm mt-8">
          تیم ما تمام تلاششو کرده تا بهترین سریال ها و فیلم های سینمایی را به
          بهترین کیفیت ممکن برای شما عزیزان فراهم کند، با ما همراه باشید.
        </p>
        <div class="mt-12 flex">
          <nuxt-link
            to="/subscription/golden"
            class="
              bg-brand-1
              border border-brand-1
              hover:bg-transparent
              flex
              justify-center
              items-center
              cursor-pointer
              mx-2
              text-white
              w-32
              h-12
              rounded
              font-bold
            "
          >
            اشتراک ویژه
          </nuxt-link>
          <button
            class="
              border
              flex
              justify-center
              items-center
              cursor-pointer
              bg-transparent
              hover:bg-brand-1
              transition-all
              border-brand-1
              mx-2
              text-white
              w-32
              h-12
              rounded
            "
          >
            درباره ما
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  props: {
    showOnlyHeader: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    navBar: [
      {
        name: 'خانه',
        to: '/'
      },
      {
        name: 'سینمایی',
        to: '/cinematic'
      },
      {
        name: 'سریال',
        to: '/serial'
      },
      {
        name: 'اکشن',
        to: '/action'
      },
      {
        name: 'درباره ما',
        to: '/about-us'
      },
      {
        name: 'ارتباط با ما',
        to: '/contact-us'
      }
    ]
  }),
  mounted () {
    window.addEventListener('scroll', () => {
      const el = this.$refs.navbar
      if (screen.availHeight < scrollY) {
        el.classList.add('navbar-fixed')
      } else {
        el.classList.remove('navbar-fixed')
      }
    })
  }
})
</script>

<style lang="scss">
.navbar {
  a.nuxt-link-exact-active {
    @apply border-b-2 border-brand-1;
  }
}

.bg {
  height: 600px;
  background-image: url(/940348.jpg);
}

.navbar-fixed {
  background-color: rgba(var(--color-brand-3), var(--tw-bg-opacity)) !important;
  @apply fixed shadow-xl px-10 py-4 z-50 top-0 inset-x-0 bg-opacity-75 backdrop-filter backdrop-blur-xl #{!important};
  & .logo {
    @apply w-14 #{!important};
  }
}
</style>
