<template>
  <v-card flat fixed>
    <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            color="transparent"
    >
      <v-btn
              color="teal"
              flat
              value="recent"
              to="/"
      >
        <span>About Me</span>
        <v-icon>sentiment_very_satisfied</v-icon>
      </v-btn>

      <v-btn
              color="teal"
              flat
              value="favorites"
              to="/skill"
      >
        <span>Skills</span>
        <v-icon>build</v-icon>
      </v-btn>

      <v-btn
              color="teal"
              flat
              value="nearby"
              to="/career"
      >
        <span>Career</span>
        <v-icon>work</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>
