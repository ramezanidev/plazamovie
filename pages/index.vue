<template>
  <div>
    <AppSearch />
    <AppSlider />
    <AppBest />
    <AppNewest />
    <AppSubscription />
    <AppNews />
    <AppRequestMovie />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSearch from '~/components/app-search.vue'
import AppSlider from '~/components/app-slider.vue'
import AppBest from '~/components/app-best.vue'
import AppSubscription from '~/components/app-subscription.vue'
import AppNewest from '~/components/app-newest.vue'
import AppNews from '~/components/app-news.vue'
import AppRequestMovie from '~/components/app-request-movie.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppSearch,
    AppSlider,
    AppBest,
    AppSubscription,
    AppNewest,
    AppNews,
    AppRequestMovie
  }
})
</script>

<style lang="scss">

</style>
