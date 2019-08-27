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
