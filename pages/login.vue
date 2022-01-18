<template>
  <div class="container mx-auto">
    <div class="bg-login">
      <div
        class="
          md:w-80 w-full
          h-auto
          bg-gradient-to-b
          from-brand-4
          p-5
          to-brand-2
          rounded
          flex flex-col
        "
      >
        <h2 class="text-white font-extrabold text-lg my-4 text-center">
          ورود به حساب کاربری
        </h2>
        <form autocomplete="off" class="mt-4 space-y-6">
          <div class="flex flex-col">
            <label for="username" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                />
              </svg>
              <span class="mx-1">ایمیل یا شماره موبایل</span>
            </label>
            <input
              id="username"
              class="form-input"
              type="text"
              name="username"
            >
          </div>
          <div class="flex flex-col">
            <label for="password" class="form-label">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                />
              </svg>
              <span class="mx-1">گذرواژه</span>
            </label>
            <input
              id="password"
              class="form-input"
              type="password"
              name="password"
            >
            <div class="my-2 flex justify-between items-center">
              <label
                class="
                  text-white text-xs
                  flex
                  items-center
                  cursor-pointer
                  select-none
                "
              >
                <input type="checkbox">
                <span class="mx-1 select-none">مرا بخواتر بسپار</span>
              </label>
              <span class="text-white text-xs hover:underline cursor-pointer">رمز عبور خود را فراموش کردید؟</span>
            </div>
          </div>

          <div class="flex flex-col">
            <button
              class="
                w-full
                h-11
                rounded
                bg-brand-1
                hover:bg-brand-4
                transition-all
                text-white
                font-bold
              "
            >
              ورود به سایت
            </button>
            <div class="mt-2">
              <span
                class="
                  text-white
                  font-extrabold
                  text-xs
                  hover:underline
                  cursor-pointer
                  flex
                  items-center
                "
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                  />
                </svg>
                <nuxt-link to="/sign-in" class="mx-1">عضویت در سایت</nuxt-link>
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
  name: 'AppLogin'
})
</script>

<style lang="scss">
.bg-login {
  @apply w-full flex justify-center md:py-5 rounded relative;
  &::before {
    content: "";
    @apply absolute inset-0 w-full h-full md:bg-brand-3 opacity-60 filter contrast-75;
  }
  & > div {
    z-index: 2;
  }
}
@screen md {
  .bg-login {
    background-image: url(/cinema-equipment-table.png);
  }
}
</style>
