<script setup></script>

<template>
  <div class="section-container mx-auto">
    <SharedPortfolioBanner />
    <ProjectsGrid class="pt-10 sm:pt-20 md:pt-24" />

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
