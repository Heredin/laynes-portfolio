<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
import socialData from "~/mixins.js/socialData.js";
export default {
  mixins: [socialData],
  components: { FooterCopyright },
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    // ...mapState(["copyrightDate", "socialProfiles"]),
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="section-container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-Sk-Modernist-Regular text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5"
        >
          {{ $t("footer.followme") }}
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in social_networks"
            :key="social.id"
            :href="social.link"
            target="__blank"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
          >
            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
