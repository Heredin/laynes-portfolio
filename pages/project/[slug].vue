<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { data: project, error } = await useFetch(
  `/api/projects/${route.params.slug}`
);
</script>
<template>
  <ProjectsProjectDetail
    class="section-container mx-auto"
    :project="project.data"
  />
</template>
<style lang="css" scoped>
.st0 {
  fill: #0acf83;
}
.st1 {
  fill: #a259ff;
}
.st2 {
  fill: #f24e1e;
}
.st3 {
  fill: #ff7262;
}
.st4 {
  fill: #1abcfe;
}
</style>
