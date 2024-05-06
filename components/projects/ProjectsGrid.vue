<script setup lang="ts">
import type { APIResponse } from "~~/types/APIResponse";
const projects = ref([]);

const searchError = ref(false);
const searchProject = async (searchInput: string) => {
  //console.log("search Text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
    projects.value = data.value;
  }
  if (searchInput !== "") {
    searchError.value = false;
    const { data, error } = await useFetch<APIResponse>(
      `/api/projects/search?searchInput=${searchInput}`
    );
    projects.value = data.value;
  }
};
//Fetch  All Projects
const { data, error } = await useFetch("/api/projects");
projects.value = data.value;
</script>

<template>
  <div>
    <!-- Projects grid header -->
    <div class="text-center">
      <p
        class="uppercase font-Sk-Modernist-Regular text-3xl md:text-3xl xl:text-4xl mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ $t("projects.title") }}
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p> -->
    </div>

    <!-- Filter and search projects -->
    <div class="mt-4 sm:mt-5">
      <h3
        class="font-Raleway-Regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-4"
      >
        {{ $t("projects.search_project") }}
      </h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <ProjectsSearchBar
          @search-project="searchProject"
          :searchError="searchError"
        />

        <!--<ProjectsFilter @change="selectedProject = $event" />-->
      </div>
    </div>
    <!-- Projects grid  -->
    <div class="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      <div v-for="project in projects?.data" :key="project.id">
        <ProjectsProjectCard :project="project" />
      </div>
    </div>
    <!--End Project Grid-->
    <!-- Projects grid 
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.id}`">
          <div>
            <img
              :src="project.img"
              :alt="project.title"
              class="rounded-t-xl border-none"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
              class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ project.title }}
            </p>
            <span
              class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
              >{{ project.category }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>-->
  </div>
</template>

<style lang="scss" scoped></style>
