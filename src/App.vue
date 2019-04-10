<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Gwen</span>
        <span class="font-weight-light">Merida</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="#about" target="_blank">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn flat href="#skills" target="_blank">
        <span class="mr-2">Skills</span>
      </v-btn>
      <v-btn flat href="#career" target="_blank">
        <span class="mr-2">Career</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
    };
  }
};
</script>
