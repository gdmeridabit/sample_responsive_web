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
  @import url('https://fonts.googleapis.com/css?family=Cabin+Sketch|Caveat|M+PLUS+Rounded+1c&display=swap');
  .title-font {
    font-family: 'Cabin Sketch', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 5em;
  }
  .simple-sm-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 2em;
  }
  .simple-font {
    font-family: 'Caveat', 'M PLUS Rounded 1c', sans-serif, cursive;
    font-size: 3em;
  }
</style>
