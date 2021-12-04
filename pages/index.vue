<template>
  <div class="flex w-full h-screen bg bg-cover bg-center">
    <div class="container mx-auto">
      <AppHeader />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'

export default Vue.extend({
  components: {
    AppHeader,
  },
  name: 'app',
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
