<script>
import PortfolioBanner from "~/components/shared/PortfolioBanner.vue";
import Button from "~/components/reusable/Button.vue";
import ProjectsGrid from "~/components/projects/ProjectsGrid.vue";
export default {
  scrollToTop: true,
  components: { PortfolioBanner, ProjectsGrid, Button },
};
</script>

<template>
  <div class="section-container mx-auto">
    <PortfolioBanner />

    <!--<ProjectsGrid />-->

    <!-- View more projects button 
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="font-Raleway-Regular flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-gray-700 hover:bg-gray-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        aria-label="More Projects"
      >
        <Button :title="$t('buttons.projects')" />
      </NuxtLink>
    </div>-->
  </div>
</template>

<style scoped></style>
