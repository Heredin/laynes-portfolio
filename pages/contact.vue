<script>
import feather from "feather-icons";
import ContactForm from "~/components/contact/ContactForm.vue";
import ContactDetail from "~/components/contact/ContactDetail.vue";

export default {
  scrollToTop: true,
  components: { ContactForm, ContactDetail },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "9983929076",
          icon: "phone",
          link: "tel:9983929076",
          target: "",
        },
        {
          id: 2,
          name: "herevel77@gmail.com",
          icon: "mail",
          link: "mailto:herevel77@gmail.com",
          target: "",
        },
        {
          id: 3,
          name: "Chicomuselo, Chis México",
          icon: "map-pin",
          link: "https://maps.app.goo.gl/A84bg35xawyEU18z6",
          target: "_blank",
        },
      ],
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
  <div
    class="section-container mx-auto flex flex-col md:flex-row md:py-10 md:mt-20"
  >
    <!-- Contact details -->
    <ContactDetail :contacts="contacts" />
    <!-- Contact form -->
    <ContactForm />
  </div>
</template>
