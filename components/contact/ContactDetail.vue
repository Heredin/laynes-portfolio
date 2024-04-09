<script>
export default {
  props: ["contacts"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- Contact details -->
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2
        class="font-Sk-Modernist-Bold text-2xl text-primary-dark dark:text-primary-light mt-8 mb-8"
      >
        {{ $t("forms.find") }}
      </h2>
      <ul class="font-Sk-Modernist-Regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <i
            :data-feather="contact.icon"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
          ></i>
          <a
            :href="contact.link"
            :target="contact.target"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
            aria-label="Website and Phone"
          >
            {{ contact.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
