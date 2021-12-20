<template>
  <div class="container mx-auto my-20">
    <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative">
      <span
        class="bg-brand-3 text-white font-bold right-0 top-1/2 absolute transform -translate-y-1/2 pl-4 text-lg select-none"
      >اخبار ها</span>
    </div>
    <div class="w-full pt-12 grid grid-cols-10 gap-4">
      <div class="col-start-1 col-end-5 flex-col flex gap-4">
        <div class="grid grid-cols-3">
          <button v-for="(txt, index) in ['جدیدترین ها', 'محبوبترین ها', 'قدیمی ترین ها']" :key="txt" class="text-sm text-white whitespace-nowrap overflow-ellipsis w-full overflow-hidden px-1 py-4 rounded" :class="{'bg-brand-4' : index === 0}">
            {{ txt }}
          </button>
        </div>
        <div class="flex-auto flex-col gap-4">
          <div class="w-full h-24 flex gap-2 bg-brand-2 bg-opacity-60 rounded shadow p-1">
            <div class="h-full" style="width: 5.5rem">
              <img draggable="false" class="w-full h-full rounded object-cover" src="/spiderman-multiverse-of-madness-5k-va-1152x864.jpg">
            </div>
            <div style="width: calc(100% - 6rem)" class="overflow-hidden">
              <h5 class="text-sm text-white">
                بیوه سعیدی
              </h5>
              <p class="text-xs mt-2 text-justify text-gray-200">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مو
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مو
              </p>
            </div>
          </div>
        </div>
        <button class="w-full h-12 rounded-b bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
          ادامه مطلب
        </button>
      </div>

      <div class="col-start-5 col-end-11 flex flex-col rounded overflow-hidden relative" draggable="false">
        <div class="h-68 relative">
          <img
            draggable="false"
            src="/spiderman-multiverse-of-madness-5k-va-1152x864.jpg"
            class="w-full rounded-t w h-full object-cover object-center"
          >
        </div>
        <div class="relative h-60">
          <div class="bg-gradient-to-b opacity-30 from-brand-2 to-brand-4 w-full h-full absolute inset-0" />
          <div class="flex flex-col justify-between h-full relative">
            <div class="p-4 text-white">
              Hello
            </div>
            <button class="w-full h-12 rounded-b bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
              ادامه مطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppNews',
  components: {},
  data () {
    return {}
  }
})
</script>

<style lang="scss"></style>
