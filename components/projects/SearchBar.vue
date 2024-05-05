<script setup>
const searchInput = ref("");
defineProps(["searchError"]);
</script>
<template>
  <div>
    <div class="flex justify-between">
      <input
        v-model.lazy="searchInput"
        class="font-Raleway-Regular w-auto sm:w-80 pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-700 text-sm sm:text-md bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
        id="name"
        name="name"
        type="search"
        required=""
        :placeholder="$t('projects.search_input')"
        aria-label="Name"
      />
      <button
        class="font-Raleway-Regular text-md sm:text-md bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-r-full"
        type="submit"
        @click="$emit('searchProject', searchInput)"
      >
        {{ $t("projects.search") }}
      </button>
    </div>
    <span
      v-if="searchError"
      class="font-Raleway-Regular text-red-700 px-4 py-3"
      role="alert"
    >
      {{ $t("projects.alert") }}
    </span>
  </div>
</template>
