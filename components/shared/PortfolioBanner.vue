<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
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
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-3/5 text-left">
      <h1
        class="font-Sk-Modernist-Regular text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        {{ $t("welcome.greeting") }}
      </h1>
      <p
        class="font-Raleway-Regular mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ $t("welcome.position") }}
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="/CV_Velazquez_Laynes_Heredin.pdf"
          download=""
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-gray-700 focus:ring-1 focus:ring-indigo-900 hover:bg-gray-600 text-white hover:bg-gray-600 duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-Raleway-Regular duration-100">{{
            $t("buttons.cv")
          }}</span></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/5 text-right float-left">
      <img
        class="rounded-full"
        v-if="$colorMode.value == 'dark'"
        src="https://res.cloudinary.com/dl1yzz0zx/image/upload/v1712117167/My%20Portfolio/Home/here_comi_qil7to.jpg"
        alt="Developer Dark"
      />
      <img
        v-else
        class="rounded-full"
        src="https://res.cloudinary.com/dl1yzz0zx/image/upload/v1712120799/My%20Portfolio/Home/here_cancun_cquyly.jpg"
        alt="Developer Light"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
