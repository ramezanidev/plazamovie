<template>
  <header class="w-full flex">
    <nav class="navbar flex items-center">
      <ul class="flex space-s-6 font-bold text-lg">
        <li class="text-white hover:text-brand-1 transition-all whitespace-nowrap" v-for="nav in navBar" :key="nav.to">
          <nuxt-link :to="nav.to" v-text="nav.name" />
        </li>
      </ul>
    </nav>
    <div class="flex items-center space-s-4">
      <!-- change theme -->
      <div class="bg-brand-2 w-16 h-6 rounded-full">
        <span class="flex h-8 w-8 bg-brand-3 rounded-full -mt-1"></span>
      </div>
      <!-- account -->
      <button class="w-8 h-8 text-white bg-brand-1 rounded-full flex items-center justify-center">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    navBar: [
      {
        name: 'خانه',
        to: '/',
      },
      {
        name: 'سینمایی',
        to: '/cinematic',
      },
      {
        name: 'سریال',
        to: '/serial',
      },
      {
        name: 'اکشن',
        to: '/action',
      },
      {
        name: 'درباره ما',
        to: '/about-us',
      },
      {
        name: 'ارتباط با ما',
        to: '/contact-us',
      },
    ],
  })
})
</script>

<style lang="scss">
.navbar {
  a.nuxt-link-exact-active {
    @apply border-b-2 border-brand-1;
  }
}
</style>
