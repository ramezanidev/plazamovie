<template>
  <div>
    <AppHeader />
    <AppSearch />
    <AppSlider />
    <AppBest />
    <AppNewest />
    <AppSubscription />
    <AppNews />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'
import AppSearch from '~/components/app-search.vue'
import AppSlider from '~/components/app-slider.vue'
import AppBest from '~/components/app-best.vue'
import AppSubscription from '~/components/app-subscription.vue'
import AppFooter from '~/components/app-footer.vue'
import AppNewest from '~/components/app-newest.vue'
import AppNews from '~/components/app-news.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppSearch,
    AppSlider,
    AppBest,
    AppSubscription,
    AppFooter,
    AppNewest,
    AppNews
  }
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
