<template>
  <div class="container mx-auto ">
    <div class="bg-signin">
      <div class="w-80 h-auto bg-gradient-to-b from-brand-4 p-5 to-brand-2 rounded flex flex-col">
        <h2 class="text-white font-extrabold text-lg my-4 text-center">
          ایجاد حساب کاربری
        </h2>
        <form autocomplete="off" class="mt-4 space-y-6">
          <div class="flex flex-col">
            <label for="name" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
              </svg>
              <span class="mx-1">نام</span>
            </label>
            <input id="name" class="form-input" type="text" name="name">
          </div>
          <div class="flex flex-col">
            <label for="phone" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              <span class="mx-1">تلفن همراه</span>
            </label>
            <input id="phone" class="form-input" type="text" name="phone">
          </div>
          <div class="flex flex-col">
            <label for="email" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />                </svg>
              <span class="mx-1">ایمیل</span>
            </label>
            <input id="email" class="form-input" type="text" name="email">
          </div>
          <div class="flex flex-col">
            <label for="password" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
              </svg>
              <span class="mx-1">گذرواژه</span>
            </label>
            <input id="password" class="form-input" type="password" name="password">
          </div>
          <div class="flex flex-col">
            <label for="trypassword" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
              </svg>
              <span class="mx-1">تکرار گذرواژه</span>
            </label>
            <input id="trypassword" class="form-input" type="password" name="trypassword">
          </div>

          <div class="flex flex-col">
            <button class="w-full h-11 rounded bg-brand-1 hover:bg-brand-4 transition-all text-white font-bold">
              ثبت نام در سایت
            </button>
            <div class="mt-2">
              <span class="text-white font-extrabold text-xs hover:underline cursor-pointer flex items-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                </svg>
                <nuxt-link to="/login" class="mx-1">ورود به حساب کاربری</nuxt-link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSignin'
})
</script>

<style lang="scss">
.bg-signin {
  @apply w-full flex justify-center py-5 rounded relative;
  background-image: url(/cinema-equipment-table.png);
  &::before {
    content:'';
    @apply absolute inset-0 w-full h-full bg-brand-3 opacity-60 filter contrast-75;
  }
  & > div{
    z-index: 2;
  }
}
</style>
