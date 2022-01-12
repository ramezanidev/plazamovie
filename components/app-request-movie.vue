<template>
  <div class="container mx-auto my-20 md:mb-auto mb-96">
    <div class="w-full h-144 relative">
      <div class="inset-0 w-full h-full absolute rounded overflow-hidden">
        <img class="w-full h-full object-cover object-left" src="/movie.png">
      </div>
      <div class="relative z-10 w-full h-full md:pt-6 pt-96 pr-4 pl-4 md:pl-0">
        <div class="md:w-80 w-full h-auto bg-brand-2 rounded">
          <div class="h-auto p-5">
            <h4 class="text-white text-center text-xl font-extrabold">
              چه فیلمی رو دوست داشتی که تو سایتم نبود؟
            </h4>
            <form autocomplete="off" class="mt-4 space-y-6">
              <div class="flex flex-col">
                <label for="movie_name" class="text-white font-bold mb-2">نام فیلم:</label>
                <input id="movie_name" placeholder="مثال:‌ venom" class="form-input" type="text" name="movie_name">
              </div>
              <div class="flex flex-col">
                <label for="movie_director" class="text-white font-bold mb-2">کارگردان:</label>
                <input id="movie_director" placeholder="مثال:‌ janson" class="form-input" type="text" name="movie_director">
              </div>
              <div class="flex flex-col">
                <label for="movie_construction" class="text-white font-bold mb-2">سال ساخت:</label>
                <input id="movie_construction" placeholder="مثال:‌ 2014" class="form-input" type="text" name="movie_construction">
              </div>
              <div class="flex flex-col">
                <label for="movie_email" class="text-white font-bold mb-2">ایمیل:</label>
                <input id="movie_email" placeholder="مثال:‌ email@gmail.com" class="form-input" type="email" name="movie_email">
              </div>
            </form>
          </div>
          <button class="w-full mt-6 h-12 rounded-b bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
            ثبت درخواست
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppRequestMovie',
  components: {},
  data () {
    return {}
  }
})
</script>

<style lang="scss"></style>
