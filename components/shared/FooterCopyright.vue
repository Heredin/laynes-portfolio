<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectName: "Nuxt 3 & Tailwind CSS Portfolio",
      author: "Laynes",
    };
  },
  computed: {},
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-Raleway-Regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ new Date().getFullYear() }}.
      <a
        href="https://tailwindcss.com/docs/guides/nuxtjs"
        target="__blank"
        class="font-Raleway-Regular hover:underline hover:text-gray-500 dark:hover:text-gray-400 duration-500"
        >{{ projectName }}</a
      >
      . {{ $t("footer.developed") }}
      <a
        href="https://www.linkedin.com/in/heredin"
        target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-gray-500 dark:hover:text-gray-400 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
