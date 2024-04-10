<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <!-- App header -->
    <TheHeader />

    <!-- Render contents with transition -->
    <transition name="fade" mode="out-in">
      <slot />
    </transition>

    <!-- App footer -->
    <TheFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    >
      <BackToTop />
      <whatsapp-button />
    </div>
  </div>
</template>

<script lang="ts">
const route = useRoute();
useHead({
  //title: this.$t("seo.title"),
  title: "Portafolio de Laynes",
  meta: [
    {
      property: "og:title",
      // content: this.$t("seo.content"),
      content: "Desarrollador Web Full-Stack con 3 años de experiencia",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      charset: "utf-8",
    },
  ],
});
import feather from "feather-icons";
import TheHeader from "~/components/shared/TheHeader.vue";
import TheFooter from "~/components/shared/TheFooter.vue";
import BackToTop from "~/components/BackToTop.vue";
import WhatsappButton from "~/components/reusable/WhatsappButton.vue";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  mounted() {
    feather.replace();
  },
  components: { TheFooter, BackToTop, TheHeader, WhatsappButton },
};
</script>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
