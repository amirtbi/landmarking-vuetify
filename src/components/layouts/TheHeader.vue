<template>
  <v-app-bar
    class="main-app_bar"
    app
    color="white"
    light
    elevation="6"
    elevation-on-scroll
  >
    <v-app-bar-title> Vuetify App </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-list class="d-flex flex-row align-center">
      <v-list-item
        link
        v-for="item in items"
        :to="item.router"
        :key="item.title"
      >
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
    <v-btn text>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn outlined color="success"> Get started </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", router: "/home" },
        { title: "About", router: "/about" },
        { title: "Portfolio", router: "/portfolio" },
        { title: "Project", router: "/project" },
        { title: "Gallery", router: "/gallery" },
        { title: "Contact", router: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
.v-toolbar-title {
  font-size: 2rem;
  color: green;
  font-family: "Recursive", sans-serif;
  font-weight: bold;
}
</style>
