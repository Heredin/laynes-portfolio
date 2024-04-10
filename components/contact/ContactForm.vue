<script>
import Button from "../reusable/Button.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
export default {
  components: { Button, VueTelInput },
  data: function () {
    return {
      isActiveRequest: false,
      valid: true,
      phone: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      responseMessage: "",
      serverError: "",
      defaultMessage: "",
      emailRegex: /\w+@\w+\.+[a-z]/,
      options: {
        placeholder: this.$t("forms.phone_placeholder"),
      },
      errors: {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      },
    };
  },
  computed: {},
  created() {
    this.defaultMessage = this.$t("forms.message_placeholder");
    this.message = this.defaultMessage;
  },
  methods: {
    /* eslint-disable no-var */
    isValid() {
      return (
        this.errors["name"] === "" &&
        this.errors["phone"].length < 16 &&
        this.errors["phone"] === "" &&
        this.errors["email"] === "" &&
        this.errors["subject"] === "" &&
        this.errors["message"] === "" &&
        this.emailRegex.test(this.email)
      );
    },
    nameRules() {
      this.errors["name"] = "";
      if (this.name === "") {
        this.errors["name"] = this.$t("validations.name_required");
      }
    },
    subjectRules() {
      this.errors["subject"] = "";
      if (this.subject === "") {
        this.errors["subject"] = this.$t("validations.subject_required");
      }
    },
    numberRules() {
      this.errors["phone"] = "";
      if (this.phone === "") {
        this.errors["phone"] = this.$t("validations.number_required");
      } else if (this.phone.length < 16) {
        this.errors["phone"] = this.$t("validations.digits_required");
      }
    },
    messageRules() {
      this.errors["message"] = "";
      if (this.name === "") {
        this.errors["message"] = this.$t("validations.message_required");
      }
    },
    emailRules() {
      this.errors["email"] = "";
      if (this.email === "") {
        this.errors["email"] = this.$t("validations.email_required");
      } else if (!this.emailRegex.test(this.email)) {
        this.errors["email"] = this.$t("validations.no_valid_email");
      }
    },
    acceptNumber() {
      var x = this.number
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.number = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    clearForm() {
      this.$refs.fullcontactform.reset();
      this.isActiveRequest = false;
      this.responseMessage = "";
      this.serverError = "";
      this.email = "";
      this.phone = "";
      this.subject = "";
      this.name = "";
      this.message = "";
    },
    reset() {
      this.$refs.fullcontactform.reset();
    },
    handleSubmit() {
      if (!this.isActiveRequest) {
        this.nameRules();
        this.numberRules();
        this.emailRules();
        this.subjectRules();
        this.messageRules();
        if (this.isValid()) {
          this.onCaptchaVerified();
        }
      }
    },
    onCaptchaVerified() {
      this.isActiveRequest = true;
      this.sendMail();
    },
    sendMail() {
      this.isActiveRequest = true;
      const locationActual = window.location;
      const successMessageSendMail = this.$t("forms.successMessage");
      const failMessageSendMail = this.$t("forms.failMessage");
      const self = this;
      /* eslint-disable */
      const data = {
        name: this.name,
        email: this.email,
        subject: "Laynes Dev: Nuevo Contacto",
        text:
          "Ha recibido un nuevo mensaje desde el formulario de contacto en " +
          locationActual +
          "\n" +
          "\n" +
          "Los datos son los siguientes:" +
          "\n" +
          "\n" +
          "Nombre: " +
          this.name +
          "\n" +
          "Asunto: " +
          this.subject +
          "\n" +
          "Teléfono: " +
          this.phone +
          "\n" +
          "Correo: " +
          this.email +
          "\n" +
          "Mensaje: " +
          this.message +
          "\n",
      };
      this.$mail
        .send({
          from: "Heredin Velázquez <herevel@gmail.com>",
          subject: data.subject,
          text: data.text,
        })
        .then((res) => {
          self.responseMessage = successMessageSendMail;
          //self.clearForm();
          // window.location.href = self.$t('links.thanks');
        })
        .catch((err) => {
          this.isActiveRequest = false;
          self.serverError = failMessageSendMail;
        })
        .finally(() => {
          setTimeout(() => {
            this.isActiveRequest = false;
            self.clearForm();
            //window.location.href = "/gracias";
          }, 7000);
        });
    },
    /* eslint-disable */
    // default message
    /*placeholderClick() {
      if (this.message === this.defaultMessage) {
        this.message = "";
      }
    },
    placeholderBlur() {
      if (this.message === "") {
        this.message = this.defaultMessage;
      }
    },*/
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="portfolioForm w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl my-4 lg:m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-Sk-Modernist-Regular text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        {{ $t("forms.contact") }}
      </p>
      <form
        ref="fullcontactform"
        @submit.prevent="handleSubmit"
        class="space-y-7"
      >
        <div class="">
          <label
            class="font-Sk-Modernist-Bold block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
          >
            {{ $t("forms.name_label") }}</label
          >
          <input
            v-model="name"
            @blur="nameRules"
            class="input-contact font-Sk-Modernist-Regular w-full py-2 text-primary-dark dark:text-secondary-light text-md focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            :placeholder="$t('forms.name_placeholder')"
            :aria-label="$t('forms.name_placeholder')"
          />
          <p v-show="errors['name']" class="text-red-500 pt-1 text-xs">
            {{ errors["name"] }}
          </p>
        </div>
        <div class="mt-6">
          <label
            class="font-Sk-Modernist-Bold block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="phone"
            >{{ $t("forms.phone_label") }}</label
          >
          <vue-tel-input
            class="input-contact font-Sk-Modernist-Regular w-full py-2 text-primary-dark dark:text-secondary-light text-md focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            v-model="phone"
            max="10"
            type="number"
            default-country="MX"
            :preferred-countries="['mx', 'us', 'ca']"
            :valid-characters-only="true"
            @blur="numberRules"
            mode="international"
            :inputOptions="options"
          />

          <p v-show="errors['phone']" class="text-red-500 pt-1 text-xs">
            {{ errors["phone"] }}
          </p>
        </div>
        <div class="mt-6">
          <label
            class="font-Sk-Modernist-Bold block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >{{ $t("forms.mail_label") }}</label
          >
          <input
            v-model="email"
            @blur="emailRules"
            class="input-contact font-Sk-Modernist-Regular w-full py-2 text-primary-dark dark:text-secondary-light text-md focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            :placeholder="$t('forms.mail_placeholder')"
            :aria-label="$t('forms.mail_placeholder')"
          />
          <p v-show="errors['email']" class="text-red-500 pt-1 text-xs">
            {{ errors["email"] }}
          </p>
        </div>
        <div class="mt-6">
          <label
            class="font-Sk-Modernist-Bold block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >{{ $t("forms.subject_label") }}</label
          >
          <input
            v-model="subject"
            @blur="subjectRules"
            class="input-contact font-Sk-Modernist-Regular w-full py-2 text-primary-dark dark:text-secondary-light text-md focus:outline-none focus:shadow-outline"
            id="subject"
            name="subject"
            type="text"
            :placeholder="$t('forms.subject_placeholder')"
            :aria-label="$t('forms.subject_placeholder')"
          />
          <p v-show="errors['subject']" class="text-red-500 pt-1 text-xs">
            {{ errors["subject"] }}
          </p>
        </div>

        <div class="mt-6">
          <label
            class="font-Sk-Modernist-Bold block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >{{ $t("forms.message_label") }}</label
          >
          <textarea
            v-model="message"
            class="input-contact font-Sk-Modernist-Regular w-full py-2 text-primary-dark dark:text-secondary-light text-md focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            cols="14"
            rows="6"
            :aria-label="$t('forms.message_placeholder')"
            @click="placeholderClick"
            @blur="placeholderBlur"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            :title="$t('forms.form_send')"
            class="font-Sk-Modernist-Regular w-full py-1.5 text-white tracking-wider bg-gray-700 hover:bg-gray-600 focus:ring-1 focus:ring-gray-700 rounded-none duration-500"
            type="submit"
            :disabled="isActiveRequest"
            :aria-label="$t('forms.form_send')"
          />
        </div>
        <div class="alerts-center">
          <div>
            <div
              class="bg-green-50 border-2 border-green-700 rounded-b text-green-700 px-4 py-3"
              role="alert"
              v-show="responseMessage"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <linearGradient
                      id="I9GV0SozQFknxHSR6DCx5a"
                      x1="9.858"
                      x2="38.142"
                      y1="9.858"
                      y2="38.142"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#21ad64" />
                      <stop offset="1" stop-color="#088242" />
                    </linearGradient>
                    <path
                      fill="url(#I9GV0SozQFknxHSR6DCx5a)"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    />
                    <path
                      d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
                      opacity=".05"
                    />
                    <path
                      d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
                      opacity=".07"
                    />
                    <path
                      fill="#fff"
                      d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
                    />
                  </svg>
                </div>
                <div class="text-alert font-Sk-Modernist-Regular">
                  {{ responseMessage }}
                </div>
              </div>
            </div>
            <div
              class="bg-red-50 border-2 border-red-700 rounded-b text-red-700 px-4 py-3"
              role="alert"
              v-show="serverError"
            >
              <div class="flex">
                <div class="py-1">
                  <img
                    src="https://res.cloudinary.com/dl1yzz0zx/image/upload/v1712717299/My%20Portfolio/icons/iconalert_nokeyu.png"
                    alt=""
                  />
                </div>
                <div class="text-alert font-Sk-Modernist-Regular">
                  {{ serverError }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import "./contact-form.css";
</style>
