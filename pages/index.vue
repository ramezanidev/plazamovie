<template>
  <div>
    <AppHeader />
    <AppSearch />
    <AppSlider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'
import AppSearch from '~/components/app-search.vue'
import AppSlider from '~/components/app-slider.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppSearch,
    AppSlider
  }
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
