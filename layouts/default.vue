<template>
  <div>
    <AppHeader :show-only-header="showOnlyHeader" />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeader from '@/components/app-header.vue'

export default Vue.extend({
  components: {
    AppFooter,
    AppHeader
  },
  computed: {
    showOnlyHeader () {
      const { name } = this.$route
      return name !== 'index'
    }
  }
})
</script>

<style lang="scss">

</style>
