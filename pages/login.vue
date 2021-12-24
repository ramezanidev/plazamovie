<template>
  <div>
    <AppHeader :show-only-header="true" />
    <div class="w-full flex justify-center py-5">
      <div class="w-80 h-auto bg-gradient-to-b from-brand-4 p-5 to-brand-2 rounded flex flex-col">
        <h2 class="text-white font-extrabold text-lg my-4 text-center">
          ورود به حساب کاربری
        </h2>
        <form autocomplete="off" class="mt-4 space-y-6">
          <div class="flex flex-col">
            <label for="username" class="text-white mb-2 text-sm">ایمیل یا شماره موبایل</label>
            <input id="username" class="bg-brand-3 rounded py-2 px-4 text-white outline-none caret-brand-1" type="text" name="username">
          </div>
          <div class="flex flex-col">
            <label for="password" class="text-white mb-2 text-sm">گذرواژه</label>
            <input id="password" class="bg-brand-3 rounded py-2 px-4 text-white outline-none caret-brand-1" type="password" name="password">
            <div class="my-2 flex justify-between items-center">
              <label class="text-white text-xs flex items-center cursor-pointer select-none">
                <input type="checkbox">
                <span class="mx-1 select-none">مرا بخواتر بسپار</span>
              </label>
              <span class="text-white text-xs hover:underline cursor-pointer">رمز عبور خود را فراموش کردید؟</span>
            </div>
          </div>

          <div class="flex flex-col">
            <button class="w-full h-11 rounded bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
              ورود به سایت
            </button>
            <div class="mt-2">
              <span class="text-white font-extrabold text-xs hover:underline cursor-pointer">عضویت در سایت</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/app-header.vue'
export default Vue.extend({
  name: 'AppLogin',
  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
.bg {
  background-image: url(/940348.jpg);
}
</style>
