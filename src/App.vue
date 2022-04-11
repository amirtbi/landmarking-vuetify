<template>
  <v-app :style="cssProps">
    <the-header></the-header>

    <v-main class="mt-10">
      <router-view></router-view>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {};
  },
  computed: {
    cssProps() {
      var themeColors = {};
      Object.keys(
        this.$vuetify.theme.themes.myCustomThemDefinition.colors
      ).forEach((color) => {
        themeColors[`--v-${color}`] =
          this.$vuetify.theme.themes.myCustomThemDefinition.colors[color];
      });
      return themeColors;
    },
  },
};
</script>

<style lang="sass">
@import './styles/_variables.scss'
</style>
