<template>
  <div>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from '@/components/app-footer.vue'

export default Vue.extend({
  components: {
    AppFooter
  }
})
</script>

<style lang="scss">

</style>
