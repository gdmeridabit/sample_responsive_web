<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomSheet/>
  </v-app>
</template>

<script>
import BottomSheet from './components/BottomSheet';

export default {
  name: "App",
  components: {
    BottomSheet
  },
  data() {
    return {
    };
  }
};
</script>

<style>
  body {
    background-image: url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2');
    background-size: cover;
  }
</style>
