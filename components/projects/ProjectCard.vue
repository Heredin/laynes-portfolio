<script setup lang="ts">
//const config = useRuntimeConfig();
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
<template>
  <div class="relative">
    <div
      class="max-w-sm absolute z-10 inset-0 bg-gray-300 dark:bg-ternary-dark from-primary to-secondary shadow-lg transform -skew-y-6 skew-y-0 -rotate-6 rounded-lg"
    ></div>

    <div
      class="max-w-sm relative z-20 bg-white rounded-md shadow-md dark:bg-secondary-dark dark:border-gray-700 transform sm:hover:translate-x-6 sm:hover:-translate-y-6 sm:delay-50 sm:duration-100"
    >
      <a :href="`/project/${project?.attributes.slug}`">
        <img
          class="rounded-t-lg"
          :src="
            project?.attributes.featured_image.data.attributes.formats.large.url
          "
          :alt="
            project?.attributes.featured_image.data.attributes.alternativeText
          "
        />
      </a>
      <div class="p-5">
        <a
          :href="`/project/${project?.attributes.slug}`"
          class="flex justify-between items-center"
        >
          <h5
            class="font-Sk-Modernist-Regular font-bold mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
          >
            {{ project?.attributes.name }}
          </h5>
          <div class="text-sm">
            <p
              class="mb-2 font-Raleway-Regular text-gray-500 dark:text-gray-400"
            >
              {{ formatDate(project?.attributes.published_date, $i18n.locale) }}
            </p>
          </div>
        </a>
        <p class="mb-3 font-Raleway-Regular text-gray-700 dark:text-gray-400">
          {{ project?.attributes.description }}
        </p>
        <a
          target="_blank"
          rel="nooppener noreferrer nofollow"
          :href="project?.attributes.demo_url"
          class="inline-flex font-Raleway-Regular items-center text-blue-600 hover:underline"
        >
          {{ $t("projects.see_project") }}
          <svg
            class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
