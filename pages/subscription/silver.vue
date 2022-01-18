<template>
  <div class="container mx-auto">
    <div class="w-full pt-12 flex flex-col-reverse md:grid grid-cols-10 gap-4">
      <div class="relative overflow h-80 rounded col-start-1 col-end-5">
        <div class="bg-gradient-to-b from-brand-4 absolute inset-0" />
        <div class="relative inset-0 h-full w-full p-4">
          <h4
            class="
              text-white
              font-bold
              w-full
              text-center text-lg
              border-b border-brand-1 border-opacity-75
              pb-2
            "
          >
            اشتراک نقره
          </h4>
          <ul class="mt-4 text-gray-100 text-sm px-2 space-y-2">
            <li>قیمت:‌ 130 هزار تومان</li>
            <li>مدت زمان استفاده:‌ 35 روز</li>
            <li>تعداد خریداری شده توسط دیگر کاربران:‌ 140</li>
          </ul>
          <button
            class="
              absolute
              bottom-0
              left-0
              right-0
              w-full
              h-12
              rounded
              bg-brand-1
              hover:bg-brand-4
              transition-all
              text-white
              font-bold
            "
          >
            خرید
          </button>
        </div>
      </div>
      <!--  -->
      <div class="relative overflow rounded col-start-5 col-end-11 pb-4">
        <div
          class="bg-gradient-to-b from-brand-4 to-brand-2 absolute inset-0"
        />
        <div class="relative inset-0 h-full w-full p-4">
          <h4
            class="
              text-white
              font-bold
              w-full
              text-lg
              border-b border-brand-1 border-opacity-75
              pb-2
            "
          >
            اشتراک نقره
          </h4>
          <h4 class="text-white font-bold w-full text-lg py-4">
            اشتراک نقره چیست؟
          </h4>
          <p class="text-gray-200 text-sm pt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در ص د.
          </p>
          <h4 class="text-white font-bold w-full text-lg pt-4 pb-2">
            چرا اشتراک نقره را تهیه کنیم؟
          </h4>
          <ul class="check mt-4 text-gray-300 text-sm px-2 space-y-2">
            <li>دانلود 5 تا فیلم سینمایی</li>
            <li>15 روز حق استفاده از اشتراک</li>
            <li>دانلود 5 تا فیلم سینمایی</li>
            <li>15 روز حق استفاده از اشتراک</li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="mt-20">
      <div class="w-full h-1 bg-opacity-60 bg-brand-1 relative mb-20">
        <span
          class="
            bg-brand-3
            text-white
            font-bold
            right-0
            top-1/2
            absolute
            transform
            -translate-y-1/2
            pl-4
            text-lg
            select-none
          "
        >اشتراک های دیگر
        </span>
      </div>
      <div class="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-around">
        <!-- gold -->
        <div class="relative overflow h-80 w-full md:w-72 rounded">
          <div
            class="bg-gradient-to-b from-brand-4 absolute inset-0 opacity-40"
          />
          <div class="relative inset-0 h-full w-full p-4">
            <h4 class="text-yellow-500 font-bold w-full text-center text-lg">
              اشتراک طلایی
            </h4>
            <ul class="check mt-4 text-gray-300 text-sm px-2 space-y-2">
              <li>دانلود 5 تا فیلم سینمایی</li>
              <li>15 روز حق استفاده از اشتراک</li>
            </ul>
            <nuxt-link
              to="/subscription/golden"
              class="
                absolute
                flex
                justify-center
                items-center
                bottom-0
                left-0
                right-0
                w-full
                h-12
                rounded
                bg-brand-1
                hover:bg-brand-4
                transition-all
                text-white
                font-bold
              "
            >
              خرید + جزئیات بیشتر
            </nuxt-link>
          </div>
        </div>
        <!-- Bronze -->
        <div class="relative overflow w-full md:w-72 h-80 rounded">
          <div
            class="bg-gradient-to-b from-brand-4 absolute inset-0 opacity-40"
          />
          <div class="relative inset-0 h-full w-full p-4">
            <h4 class="text-white font-bold w-full text-center text-lg">
              اشتراک برنزه
            </h4>
            <ul class="check mt-4 text-gray-300 text-sm px-2 space-y-2">
              <li>دانلود 5 تا فیلم سینمایی</li>
              <li>15 روز حق استفاده از اشتراک</li>
            </ul>
            <nuxt-link
              to="/subscription/bronze"
              class="
                absolute
                flex
                justify-center
                items-center
                bottom-0
                left-0
                right-0
                w-full
                h-12
                rounded-b
                bg-brand-1
                hover:bg-brand-4
                transition-all
                text-white
                font-bold
              "
            >
              خرید + جزئیات بیشتر
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SubscriptionSilver',
  components: {}
})
</script>

<style lang="scss" scoped>
ul.check {
  list-style-image: url("/check.svg");
  @apply px-5;
  ::marker {
    font-size: 35px;
  }
}
</style>
