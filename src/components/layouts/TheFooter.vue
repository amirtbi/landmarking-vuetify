<template>
  <v-footer class="mt-10 pa-0 text-white text-center d-flex flex-column">
    <v-col lg="12">
      <v-row justify="center">
        <v-col
          lg="6"
          class="d-flex bg-grey-lighten-5 text-black justify-center align-center flex-column pa-2"
        >
          <v-toolbar-title class="text-h5 text-green-darken-2"
            >Amir Torabi</v-toolbar-title
          >
          <div style="max-width: 500px">
            <p class="pa-2 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              repudiandae animi perferendis nulla, impedit, dolorum labore
              voluptate doloremque atque illo consequuntur distinctio explicabo
            </p>
          </div>
          <v-card-text
            class="text-center d-flex flex-column justify-center align-center"
          >
            <div>
              <v-btn icon v-for="link in links" :key="link" class="ma-2" dark>
                <v-icon size="23" dark>{{ link.icon }} </v-icon>
              </v-btn>
            </div>
            <v-form ref="form" v-model="valid" style="width: 400px">
              <v-text-field
                v-model="email"
                variant="outlined"
                color="text-green-lighten-1"
                label="E-Mail"
                dense
                required
                :rules="emailRules"
                @input="subscribe"
              ></v-text-field>
              <v-btn @click="subscribe" class="px-5" color="success" rounded
                >Subscribe</v-btn
              >
            </v-form>
          </v-card-text>
        </v-col>

        <v-divider></v-divider>

        <v-col
          lg="6"
          md="6"
          cols="12"
          class="d-flex justify-center justify-md-start align-center flex-row bg-grey-lighten-5"
        >
          <div class="text-grey-darken-2">
            {{ new Date().getFullYear() }} —
            <strong>Vuetify App</strong>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-row align-center justify-center justify-md-end bg-grey-lighten-5"
          lg="6"
        >
          <div>
            <p class="text-grey">
              @ Copyright Amir Torabi. All rights reserved

              {{ new Date().getFullYear() }}

              <v-spacer />
              <strong>Vuetify App designed by Amir.Torabi</strong>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      links: [
        { href: "https://github.com/amirtbi", icon: "mdi-github" },
        {
          href: "www.linkedin.com/in/amirhosein-torabi-20540880",
          icon: "mdi-linkedin",
        },
      ],
    };
  },
  methods: {
    subscribe() {
      this.$refs.form.validate();
    },
  },
};
</script>
