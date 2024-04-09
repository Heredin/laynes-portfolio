<script>
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {},
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="https://res.cloudinary.com/dl1yzz0zx/image/upload/v1712166106/My%20Portfolio/Home/here_profile_iaprlx.jpg"
        class="rounded-lg w-96"
        alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="font-Raleway-Regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
      >
        ¡Hola!, Soy Heredin Velázquez. Desarrollador Full-Stack con 3 años de
        experiencia con buenos conocimientos en Front-end y Backend. Tengo
        habilidades en el desarrollo web para una posición estimulante en una
        compañia moderna y profesional o proyectos desafiantes, siempre estoy
        disponible a aprender cosas nuevas e ir mejorando como profesional.
      </p>
      <!-- component -->

      <!-- Element 1 -->
      <a
        class="flex md:grid grid-cols-12 gap-2 mb-2 md:mb-0 md:gap-1 items-center"
        href="tel:9983929076"
      >
        <!-- Icon -->
        <div
          class="col-span-12 md:col-span-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 cursor-pointer duration-500"
        >
          <i data-feather="phone" class="w-6 sm:w-5 h-6 sm:h-8"></i>
        </div>

        <!-- Title -->
        <div class="col-span-11 xl:-ml-8">
          <p class="text-violet-600 font-Raleway-Regular">9983929076</p>
        </div>
      </a>
      <!-- Element 2 -->
      <a
        class="flex md:grid grid-cols-12 gap-2 mb-2 md:mb-0 md:gap-1 items-center"
        href="mailto:herevel77@gmail.com"
      >
        <!-- Icon -->
        <div
          class="col-span-12 md:col-span-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 cursor-pointer duration-500"
        >
          <i data-feather="mail" class="w-6 sm:w-5 h-6 sm:h-8"></i>
        </div>

        <!-- Title -->
        <div class="col-span-11 xl:-ml-8">
          <p class="text-rose-500 font-Raleway-Regular">herevel77@gmail.com</p>
        </div>
      </a>
      <!-- Element 3 -->
      <a
        class="flex md:grid grid-cols-12 gap-2 mb-2 md:mb-0 md:gap-1 items-center"
        target="_blank"
        href="https://maps.app.goo.gl/A84bg35xawyEU18z6"
      >
        <!-- Icon -->
        <div
          class="col-span-12 md:col-span-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 cursor-pointer duration-500"
        >
          <i data-feather="map-pin" class="w-6 sm:w-5 h-6 sm:h-8"></i>
        </div>

        <!-- Title -->
        <div class="col-span-11 xl:-ml-8">
          <p class="text-cyan-400 font-Raleway-Regular">
            Col. Lázaro Cárdenas, Mpio Chicomuselo, Chis México
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
