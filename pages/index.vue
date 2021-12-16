<template>
  <div>
    <AppHeader />
    <AppSearch />
    <AppSlider />
    <AppSubscription />
    <AppNewest />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'
import AppSearch from '~/components/app-search.vue'
import AppSlider from '~/components/app-slider.vue'
import AppSubscription from '~/components/app-subscription.vue'
import AppFooter from '~/components/app-footer.vue'
import AppNewest from '~/components/app-newest.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppSearch,
    AppSlider,
    AppSubscription,
    AppFooter,
    AppNewest
  }
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
