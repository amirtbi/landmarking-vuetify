<template>
  <v-container>
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" lg="6" md="6">
        <img
          class="about-image"
          src="../../assets/images/about-background.png"
          alt="about"
        />
      </v-col>
      <v-col cols="12" lg="6" sm="12" md="6" class="px-4">
        <h5 class="text-center text-sm-start text-h4">About Us</h5>
        <p class="text-justify text-sm-start pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque
          suscipit quis vel consequatur esse pariatur enim aliquid debitis
          voluptas.
        </p>
        <v-list>
          <v-list-item v-for="item in items" :key="item.data">
            <v-icon class="pr-4" color="success">{{ item.icon }}</v-icon>
            <v-list-item-subtitle class="text-grey">
              {{ item.data }}
            </v-list-item-subtitle>
          </v-list-item>
          <p :class="classes" class="mt-4 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            nisi quos laudantium, molestias sapiente consequuntur natus sint
            totam accusamus veritatis dolor amet, deleniti veniam culpa
            praesentium ipsa dolores voluptatem hic.
          </p>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          data: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Voluptas earum voluptatibus accusamus",
          icon: "mdi-check-all",
        },
        {
          data: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Voluptas earum voluptatibus accusamus",
          icon: "mdi-check-all",
        },

        {
          data: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Voluptas earum voluptatibus accusamus",
          icon: "mdi-check-all",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
img.about-image {
  width: 100%;
}
.v-list-item-subtitle {
  opacity: 0.75;
}
</style>
