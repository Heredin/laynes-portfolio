<template>
  <!-- Start block -->
  <div
    class="grid pt-3 sm:pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-20"
  >
    <div class="mr-auto place-self-center lg:col-span-7">
      <h1
        class="max-w-2xl font-Sk-Modernist-Bold mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl text-primary-dark dark:text-primary-light"
      >
        {{ project[0]?.attributes.name }}
      </h1>
      <div class="text-sm">
        <p class="mb-3 font-Raleway-Regular text-gray-500 dark:text-gray-400">
          {{ formatDate(project[0]?.attributes.published_date, $i18n.locale) }}
        </p>
      </div>
      <p
        class="max-w-xl mb-6 font-light font-Raleway-Regular text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
      >
        {{ project[0]?.attributes.description }}
      </p>
      <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          target="_blank"
          rel="nooppener noreferrer nofollow"
          :href="project[0]?.attributes.demo_url"
          class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-Raleway-Regular text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <svg
            class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {{ $t("projects.see_project") }}
        </a>
      </div>
    </div>
    <div class="mt-8 lg:mt-0 lg:col-span-5 lg:flex">
      <img
        :src="
          config.public.galleryBaseUrl +
          project[0]?.attributes.featured_image.data.attributes.formats.large
            .url
        "
        :alt="
          project[0]?.attributes.featured_image.data.attributes.alternativeText
        "
      />
    </div>
  </div>
  <!-- End block -->
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
import type { PropType } from "vue";
import type { Project } from "~~/types/Project";
const props = defineProps({
  project: {
    type: Object as PropType<Project>,
  },
});

const formatDate = (date, lang) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(lang, options);
};
</script>
