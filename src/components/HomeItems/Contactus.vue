<template>
  <v-container class="my-10">
    <v-row justify="center" align="center">
      <v-col lg="12">
        <h5 class="mb-2 text-center text-h4">Contact us</h5>
        <p class="text-body-1 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-5 px-12">
      <!-- Map -->
      <v-col lg="6" class="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414746.67244650266!2d51.06963145458477!3d35.69648946102067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sfr!4v1649615196322!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
      <!-- Form -->
      <v-col lg="6">
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="firstName"
            :counter="10"
            label="Name"
            :rules="nameRules"
            @input="submit"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            @input="submit"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :rules="messageRules"
            @input="submit"
            label="Message"
            :counter="200"
          >
          </v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      firstName: "",
      email: "",
      message: "",
      nameRules: [
        (v) => v.length >= 5 || "your name must be greater than 5 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          (v !== "" && v.length >= 20) ||
          "Minimum length 50 characters is needed",
        (v) => v.length <= 200 || "Maximum length is 200 characters",
      ],
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate();
    },
  },
  computed: {},
};
</script>
