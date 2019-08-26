<template>
  <v-container class="mb-5">
    <v-layout>
      <v-flex xs12>

      </v-flex>
    </v-layout>
    <v-layout text-xs-center py-3 id="about">
      <v-flex xs12>
        <span class="display-2 font-weight-bold" color="blue">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            src="https://portfolio-gwen.s3.amazonaws.com/50988163_10213734001079444_2817855097181044736_n.jpg"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">Gwen Danielle Merida</p>
        <p class="title font-weight-thin mt-3">
          I'm a Software Developer who has enthusiast to learn new technologies. <br>
          I have already worked with various clients and learn various technologies based on the clients need. I have already manage a development team.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  })
};
</script>

<style>
#container-full {
  padding: 0;
}
.v-carousel {
  box-shadow: 0 0 0 0;
}
</style>
